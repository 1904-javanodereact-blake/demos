package com.revature.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
/*
 * Configuration (class)
 * 	Configuration's job is to gather information from hibernate.cfg.xml
 *  and use that information to create a session factory.
 *  
 * SessionFactory (interface)
 * 	SessionFactory's job is to create sessions and store information on
 * 	how to make connections to your database. Once it's configured it's immutable
 * 
 * Session (interface)
 * 	Session manages the connection to your database and provides
 * 		create, read, update, and delete operations
 * 
 * 	Transaction (interface)
 * 		Transaction manages...well....your transactions (and cache). Must be ACID
 * 
 * What is ACID?
 * 	Atomicity- transactions are "all or nothing". You cannot have PART of a
 * 		transaction happen.
 * 	Consistency- after a transaction the database schema will be intact.
 * 	Isolation- transactions cannot interfere with one another.
 * 	Durability- data will persist.
 */
public class HibernateUtil {
	private static Session ses;
	private static SessionFactory sf =
			new Configuration().configure("hibernate.cfg.xml")
				.buildSessionFactory();
	
	public static Session getSession() {
		if(ses==null) {
			ses= sf.openSession();
		}
		return ses;
	}
	
	public static void closeSes() {
		ses.close();
	}
}
