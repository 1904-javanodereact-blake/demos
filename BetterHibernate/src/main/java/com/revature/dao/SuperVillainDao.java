package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.SuperVillain;
import com.revature.util.HibernateUtil;

/*
 * Session Methods
 * 
 * save() and persist()						result in a sql insert
 * update() and merge()						result in a sql update
 * delete()									result in a sql delete
 * saveOrUpdate()							results in either a sql insert or update(depending)
 * get() and load()							results in a sql select
 * 
 * get()		will go to the DB immediately
 * load()		will use a placeholder (proxy) until you need the value
 * 
 * update()		will not allow duplicate id's inside of your cache
 * merge()		will insert into the cache or overwrite the existing cache value
 * 
 * 
 */



public class SuperVillainDao {
	public SuperVillainDao() {
		// TODO Auto-generated constructor stub
	}
	
	public void insert(SuperVillain SuperVillain) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.save(SuperVillain);
		
		tx.commit();
	}
	
	public void update(SuperVillain SuperVillain) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.saveOrUpdate(SuperVillain);
		tx.commit();
	}
	
	public SuperVillain selectById(int id) {
		Session ses = HibernateUtil.getSession();
		
		SuperVillain SuperVillain = ses.get(SuperVillain.class, id);
		
		return SuperVillain;
	}
	
	public SuperVillain selectByName(String name) {
		Session ses = HibernateUtil.getSession();
		
		List<SuperVillain> villList = ses.getNamedQuery("HQL_GET_VILLAIN_BY_NAME").list();
		if(villList.size()==0) {
			System.out.println("No names found");
		return null;
		}
		return villList.get(0);
	}
	
	public List<SuperVillain> selectAll(){
		Session ses =HibernateUtil.getSession();
		
		List<SuperVillain> SuperVillainList=
				//ses.createQuery("from SuperVillain", SuperVillain.class).list();
				ses.getNamedQuery("HQL_GET_ALL").list();
		
		return SuperVillainList;
	}
}
