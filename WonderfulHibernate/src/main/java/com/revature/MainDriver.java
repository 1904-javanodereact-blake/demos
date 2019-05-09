package com.revature;

import com.revature.dao.RockDao;
import com.revature.model.Rockstar;

public class MainDriver {

	public static RockDao rd= new RockDao();
	
	public static void main(String[] args) {
		insertInitialValues();
		System.out.println("We just put them in our DB");
		System.out.println("here they are by name: "+rd.selectByName("Nikki Sixx"));
		
	}
	
	public static void insertInitialValues() {
		Rockstar rocker1 = new Rockstar("Nikki Sixx", 6, "Bass");
		Rockstar rocker2 = new Rockstar("James Hetfield", 10, "guitar");
		rd.insert(rocker1);
		rd.insert(rocker2);
	}
}








