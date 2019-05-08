package com.revature;

import java.util.ArrayList;
import java.util.List;

import com.revature.dao.BandDao;
import com.revature.dao.RecordCompanyDao;
import com.revature.dao.RockinDao;
import com.revature.model.Band;
import com.revature.model.RecordCompany;
import com.revature.model.Rockstar;
import com.revature.util.HibernateUtil;

public class MainDriver {

	public static RockinDao rd = new RockinDao();
	public static BandDao bd = new BandDao();
	public static RecordCompanyDao rcd = new RecordCompanyDao();
	
	public static void main(String[] args) {
		InsertInitialValues();
		System.out.println("here I am");
		System.out.println("rock me like a hurricane");
		
		System.out.println("Select by Name: "+rd.selectByName("Ronnie James Dio"));
		System.out.println("\nALL ROCKERS");
		System.out.println("\t"+rd.selectAll());
		System.out.println("done");
		
		System.out.println("the bands: "+bd.selectAll());
		System.out.println("the record Companies: "+rcd.selectAll());
		HibernateUtil.closeSes();
	}
	
	public static void InsertInitialValues() {
		//////rockstars
		Rockstar rocker1 = new Rockstar("VanHalen", 50, 5.0);
		Rockstar rocker2 = new Rockstar("Ronnie James Dio", 100, 9.5);
		Rockstar rocker3 = new Rockstar("ZZTop", 1000, 7.5);
		
		////////////////record companies
		List<Band> bandList= new ArrayList<>();
		RecordCompany rc1 = new RecordCompany("the record company");
		RecordCompany rc2 = new RecordCompany("the Cool records");
		rcd.insert(rc1);
		rcd.insert(rc2);
		
		////////////////bands
		List<Rockstar> rockList=new ArrayList<>();
		rockList.add(rocker1);
		rockList.add(rocker2);
		Band band1= new Band("Cool band", rockList, rc1);
		
		rockList = new ArrayList<>();
		rockList.add(rocker2);
		rockList.add(rocker3);
		Band band2 = new Band("The greatest Band", rockList, rc2);
		
				
		rd.insert(rocker1);
		rd.insert(rocker2);
		rd.insert(rocker3);
		bd.insert(band1);
		bd.insert(band2);
		
		
	}

}
