package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.revature.model.Rockstar;
import com.revature.util.HibernateUtil;

public class RockDao {

	public RockDao() {
		// TODO Auto-generated constructor stub
	}
	
	public void insert(Rockstar rocker) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.save(rocker);
		
		tx.commit();
	}
	
	public void update(Rockstar rocker) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		
		ses.saveOrUpdate(rocker);
		
		tx.commit();
	}
	
	public Rockstar selectById(int id) {
		Session ses= HibernateUtil.getSession();
		
		Rockstar rocker = ses.get(Rockstar.class, id);
		
		return rocker;
	}
	
	/*
	 * public static voi prepareStatementExample(String name, String attribute){
	 * 	try(Connection conn = DriverManager.getConnection(url,username,password)){
	 * 		String sql="Insert into table(column_name, column_name) values(?,?)";
	 * 		PreparedStatement ps= conn.prepareStatement(sql);
	 * 		ps.setString(1,name);
	 * 		ps.setInt(2,attribute);
	 * 		ps.executeUpdate();
	 * 	}
	 * 	catch (SQLException e){
	 * 		e.printStackTrace();
	 * 	}
	 * }
	 * 
	 */

	public List<Rockstar> selectAll(){
		Session ses = HibernateUtil.getSession();
		
		List<Rockstar> rockList = 
				ses.createQuery("from Rockstar", Rockstar.class).list();
		return rockList;
	}
	
	public Rockstar selectByName(String name) {
		Session ses = HibernateUtil.getSession();
		
		/////////3 WAYS TO CREATE QUERIES INSIDE OF HIBERNATE
		
		///NATIVE SQL
		//Basically a straight sql statement written as a string in hibernate
//		  List<Rockstar> rockList = ses.createNativeQuery("select * from"+
//		  " Rock_star where name ='"+name+"'", Rockstar.class).list();
		  
		/////CRITERIA API
		//Criteria is a programmatic solution to making complex queries
//		List<Rockstar> rockList = ses.createCriteria(Rockstar.class)
//				.add(Restrictions.like("name", name)).list();
		
		/////HQL 
		//the attribute needs to be in single quotes (if it is a string)
		//HQL uses hibernate class names instead of the table names
		List<Rockstar> rockList = ses.createQuery("from Rockstar"+
				" where name = '"+name+"'", Rockstar.class).list();
		  
		if(rockList.size()==0) {
			System.out.println("there are no records by that name");
			return null;
		}
		return rockList.get(0);
		
	}

}













