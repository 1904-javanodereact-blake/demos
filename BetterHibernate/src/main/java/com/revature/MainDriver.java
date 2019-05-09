package com.revature;

import java.util.ArrayList;
import java.util.List;

import com.revature.dao.CrimeDao;
import com.revature.dao.SuperPrisonDao;
import com.revature.dao.SuperVillainDao;
import com.revature.model.Crime;
import com.revature.model.SuperPrison;
import com.revature.model.SuperVillain;
import com.revature.util.HibernateUtil;

public class MainDriver {
	public static SuperVillainDao svdao = new SuperVillainDao();
	public static CrimeDao cdao = new CrimeDao();
	public static SuperPrisonDao spdao = new SuperPrisonDao();
	
	public static void main(String[] args) {
		InsertInitialValues();
		System.out.println("We have inserted the stuff");
		System.out.println("lets get it by name: "+svdao.selectByName("Jerry"));
		System.out.println("all the prizons: "+ spdao.selectAll());
		System.out.println("all the crimes: ");
		System.out.println("\t"+cdao.selectAll());
		System.out.println("Lets get all villains: "+svdao.selectAll());
		
		HibernateUtil.closeSes();
	}
	public static void InsertInitialValues() {
		//SuperPrisons
		SuperPrison sp1 = new SuperPrison("Arkham", "Gotham");
		SuperPrison sp2 = new SuperPrison("Solitude", "Fortress");
		SuperPrison sp3 = new SuperPrison("Alcetraz", "Somewhere in that Ocean by that name");
		
		//Crimes
		Crime c1 = new Crime("Petty Theft", "Stealing something...petty?");
		Crime c2 = new Crime("Elderly Arson", "This dude is for real");
		Crime c3 = new Crime ("Attempted Destruction of the planet", "Who are you, Lex Luthor?");
		Crime c4 = new Crime("murder","Is this the most normal thing yet?");
		Crime c5 = new Crime("Baby kidnapping", "this dude is a MONSTER!?!?!!?");
		
		//Villains
			List<Crime> crimeList = new ArrayList<>();
			crimeList.add(c2);
			crimeList.add(c3);
			SuperVillain vill1 = new SuperVillain("Not Nice", "Kinesis? I think I spelled that right?",20_000_000, crimeList, sp3 );
			sp3.getVillList().add(vill1);
			
			crimeList=new ArrayList<>();
			crimeList.add(c4);
			crimeList.add(c1);
			crimeList.add(c2);
			SuperVillain vill2 = new SuperVillain("Jerry", "But, I'm not phased...", 40, crimeList, sp1);
			sp1.getVillList().add(vill2);
			
			crimeList = new ArrayList<>();
			crimeList.add(c5);
			crimeList.add(c4);
			crimeList.add(c1);
			SuperVillain vill3 = new SuperVillain("Ric...inator", "No need for glasses here", 3, crimeList, sp2);
			sp2.getVillList().add(vill3);
			
			spdao.insert(sp1);
			spdao.insert(sp2);
			spdao.insert(sp3);
			cdao.insert(c1);
			cdao.insert(c2);
			cdao.insert(c3);
			cdao.insert(c4);
			cdao.insert(c5);
			svdao.insert(vill1);
			svdao.insert(vill2);
			svdao.insert(vill3);
			
	}
}
