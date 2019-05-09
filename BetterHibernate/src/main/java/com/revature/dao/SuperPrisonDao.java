package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.SuperPrison;
import com.revature.util.HibernateUtil;

public class SuperPrisonDao {
	public SuperPrisonDao() {
		// TODO Auto-generated constructor stub
	}
	
	public void insert(SuperPrison superPrison) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.save(superPrison);
		
		tx.commit();
	}
	
	public void update(SuperPrison superPrison) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.saveOrUpdate(superPrison);
		tx.commit();
	}
	
	public SuperPrison selectById(int id) {
		Session ses = HibernateUtil.getSession();
		
		SuperPrison superPrison = ses.get(SuperPrison.class, id);
		
		return superPrison;
	}
	
	public SuperPrison selectByName(String name) {
		return null;
	}
	
	public List<SuperPrison> selectAll(){
		Session ses =HibernateUtil.getSession();
		
		List<SuperPrison> superPrisonList=
				ses.createQuery("from SuperPrison", SuperPrison.class).list();
		
		return superPrisonList;
	}
}
