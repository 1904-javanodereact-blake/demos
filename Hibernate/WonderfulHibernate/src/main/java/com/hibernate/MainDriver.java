package com.hibernate;

import com.hibernate.dao.RockinDao;
import com.hibernate.model.Rockstar;
import com.hibernate.util.HibernateUtil;

public class MainDriver {

	public static RockinDao rd = new RockinDao();
	
	public static void main(String[] args) {
		InsertInitialValues();
		System.out.println("here I am");
		System.out.println("rock me like a hurricane");
		
		System.out.println("Select by Name: "+rd.selectByName("Ronnie James Dio"));
		System.out.println("\nALL ROCKERS");
		System.out.println("\t"+rd.selectAll());
		System.out.println("done");
		HibernateUtil.closeSes();
	}
	
	public static void InsertInitialValues() {
		Rockstar rocker1 = new Rockstar("VanHalen", 50, 5.0);
		Rockstar rocker2 = new Rockstar("Ronnie James Dio", 100, 9.5);
		Rockstar rocker3 = new Rockstar("ZZTop", 1000, 7.5);
		rd.insert(rocker1);
		rd.insert(rocker2);
		rd.insert(rocker3);
	}

}
