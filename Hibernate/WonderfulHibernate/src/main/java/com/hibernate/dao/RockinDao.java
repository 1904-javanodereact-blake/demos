package com.hibernate.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.hibernate.model.Rockstar;
import com.hibernate.util.HibernateUtil;

public class RockinDao {
	
	public RockinDao() {
		
	}

	public void insert(Rockstar rocker) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		ses.save(rocker);

		tx.commit();
		/*ses.close();*/
	}

	public void update(Rockstar rocker) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		ses.update(rocker);

		tx.commit();
		/*ses.close();*/
	}

	public Rockstar selectById(int id) {
		Session ses = HibernateUtil.getSession();

		Rockstar rocker = ses.get(Rockstar.class, id);

		/*ses.close();*/

		return rocker;
	}

	public Rockstar selectByName(String name) {
		Session ses = HibernateUtil.getSession();
		
		///////HQL
		//the attribute needs to be in single quotes (if string)
		//HQL uses Hibernate class names instead of the table names
		List<Rockstar> rockList = ses.createQuery("from Rockstar"+
				" where name='" + name+"'", Rockstar.class).list();
		//we can also do stuff like this with HQL
		/*List<Rockstar> rockList = ses.createQuery("select bounty from"+
				"Rockstar where name='" + name+"'", Rockstar.class).list();*/
		
		///////////CRITERIA API
		//Criteria is a PROGRAMMATIC solution to complex queries
		/////no single quotes on the attribute
		/*List<Rockstar> rockList = ses.createCriteria(Rockstar.class)
				.add(Restrictions.like("name",  name)).list();*/
		
		////////NATIVE SQL
		//uses db table names
		//single quotes again
		/*List<Rockstar> rockList = ses.createNativeQuery("select * from"+
				" Super_Villain where name='"+ name+"'", Rockstar.class).list();*/
		
		///returning
		if(rockList.size()==0) {
			System.out.println("PANIC!!!!!!!!!!");
			return null;
		}
		return rockList.get(0);
	}

	public List<Rockstar> selectAll() {
		Session ses = HibernateUtil.getSession();

		List<Rockstar> rockList =
				ses.createQuery("from Rockstar",
						Rockstar.class).list();

		/*ses.close();*/

		return rockList;
	}
}

