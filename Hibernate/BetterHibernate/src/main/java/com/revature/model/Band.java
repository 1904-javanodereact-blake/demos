package com.revature.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Band")
public class Band {
	
	@Id
	@Column(name="Band_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	
	@Column(name="band_name")
	private String bandName;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name="band_members", joinColumns=@JoinColumn(name="group_id"), inverseJoinColumns = @JoinColumn(name="member_id"))
	private List<Rockstar> members;
	
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	@JoinColumn(name="record_id")
	private RecordCompany recordLabel;
	
	public Band() {
		// TODO Auto-generated constructor stub
	}

	public Band(int id, String bandName, List<Rockstar> members, RecordCompany recordLabel) {
		super();
		this.id = id;
		this.bandName = bandName;
		this.members = members;
		this.recordLabel = recordLabel;
	}

	public Band(String bandName, List<Rockstar> members, RecordCompany recordLabel) {
		super();
		this.bandName = bandName;
		this.members = members;
		this.recordLabel = recordLabel;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBandName() {
		return bandName;
	}

	public void setBandName(String bandName) {
		this.bandName = bandName;
	}

	public List<Rockstar> getMembers() {
		return members;
	}

	public void setMembers(List<Rockstar> members) {
		this.members = members;
	}

	public RecordCompany getRecordLabel() {
		return recordLabel;
	}

	public void setRecordLabel(RecordCompany recordLabel) {
		this.recordLabel = recordLabel;
	}

	@Override
	public String toString() {
		return "Band [id=" + id + ", bandName=" + bandName + ", members=" + members + ", recordLabel=" + recordLabel
				+ "]";
	}
	
	
}
