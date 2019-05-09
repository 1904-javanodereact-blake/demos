package com.revature.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/*
 * Configuration (class)
 * Configuration's job is to gather information from hibernate.cfg.xml and use 
 * that information to create a SessionFactory
 * 
 * SesionFactory (interface)
 * SessionFactory's job i to create is to create sessions and store information on 
 * how to make connections to your database. Once it's configures its immutable.
 * 
 * Session (interface)
 * Session manages the connection to your DB and provides 
 * 		CREATE, READ, UPDATE AND DELETE OPERATIONS
 * 
 * Transaction (interface)
 * Transaction manages your transactions and cache. Must be ACID.
 * 
 * ACID:
 * 	Atomicity: All or nothing. You cannot have part of a transaction
 * 	CONSISTENCY:	after a transaction, the DB schema will stay intact.
 * 	ISOLATION:	Transactions cannot interfere with each other.
 * 	DURABILITY:	Data will persist, usually deals with hardware failures.
 * 
 * 
 * 
 * 
 */





public class HibernateUtil {

	private static Session ses;
	private static SessionFactory sf=
			new Configuration().configure("hibernate.cfg.xml").
			buildSessionFactory();
	
	public static Session getSession() {
		if(ses==null) {
			ses=sf.openSession();
		}
		return ses;
	}
	
	public static void closeSes() {
		ses.close();
	}
	
}







