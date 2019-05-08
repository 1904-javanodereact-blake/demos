package com.revature.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Record_Company")
public class RecordCompany {
	
	@Id
	@Column(name="record_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	
	@Column(name="company_name")
	private String companyName;
	
	@OneToMany(mappedBy= "id", fetch=FetchType.LAZY)
	private List<Band> bands;
	
	public RecordCompany() {
		// TODO Auto-generated constructor stub
	}

	public RecordCompany(int id, String companyName, List<Band> bands) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.bands = bands;
	}

	public RecordCompany(String companyName, List<Band> bands) {
		super();
		this.companyName = companyName;
		this.bands = bands;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public List<Band> getBands() {
		return bands;
	}

	public void setBands(List<Band> bands) {
		this.bands = bands;
	}

	@Override
	public String toString() {
		return "RecordCompany [id=" + id + ", companyName=" + companyName + ", bands=" + bands + "]";
	}

	public RecordCompany(String companyName) {
		super();
		this.companyName = companyName;
	}
	
	

}
