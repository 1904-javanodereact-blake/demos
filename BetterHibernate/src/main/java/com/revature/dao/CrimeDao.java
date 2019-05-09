package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.Crime;
import com.revature.util.HibernateUtil;

public class CrimeDao {
	public CrimeDao() {
		// TODO Auto-generated constructor stub
	}
	
	public void insert(Crime Crime) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.save(Crime);
		
		tx.commit();
	}
	
	public void update(Crime Crime) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.saveOrUpdate(Crime);
		tx.commit();
	}
	
	public Crime selectById(int id) {
		Session ses = HibernateUtil.getSession();
		
		Crime Crime = ses.get(Crime.class, id);
		
		return Crime;
	}
	
	public Crime selectByName(String name) {
		return null;
	}
	
	public List<Crime> selectAll(){
		Session ses =HibernateUtil.getSession();
		
		List<Crime> CrimeList=
				ses.createQuery("from Crime", Crime.class).list();
		
		return CrimeList;
	}
}
