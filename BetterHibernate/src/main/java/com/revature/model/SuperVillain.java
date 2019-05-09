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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/*
 * JPA annotations (Java Persistence API)
 * 		It is a standardized api that deals with mapping java objects to DB's.
 * Hibernate implements JPA annotations.
 * 
 * We often choose JPA annotations over Hibernate annotations because in the 
 * future if we want to change ORM frameworks, we dont have to use diferent annotations
 * We can simply switch out the framework itself.
 */
@Entity
@Table(name="Super_Villain")
public class SuperVillain {

	@Id
	@Column(name="svill_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int svillId;
	
	@Column(name="name", unique=true, nullable= false)
	private String name;
	
	@Column(name="superpower")
	private String superpower;
	
	@Column(name="bounty")
	private int bounty;
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	List<Crime> crimes;
	//A proxy will be in the place of something that hasnt been loaded yet
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	@JoinColumn(name="Prison_FK")
	private SuperPrison superPrisonVar;

	public SuperVillain() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SuperVillain(int svillId, String name, String superpower, int bounty, SuperPrison superPrisonVar) {
		super();
		this.svillId = svillId;
		this.name = name;
		this.superpower = superpower;
		this.bounty = bounty;
		this.superPrisonVar = superPrisonVar;
	}
	

	public SuperVillain(String name, String superpower, int bounty, List<Crime> crimes, SuperPrison superPrisonVar) {
		super();
		this.name = name;
		this.superpower = superpower;
		this.bounty = bounty;
		this.crimes = crimes;
		this.superPrisonVar = superPrisonVar;
	}

	public SuperVillain(String name, String superpower, int bounty, SuperPrison superPrisonVar) {
		super();
		this.name = name;
		this.superpower = superpower;
		this.bounty = bounty;
		this.superPrisonVar = superPrisonVar;
	}

	public int getSvillId() {
		return svillId;
	}

	public void setSvillId(int svillId) {
		this.svillId = svillId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSuperpower() {
		return superpower;
	}

	public void setSuperpower(String superpower) {
		this.superpower = superpower;
	}

	public int getBounty() {
		return bounty;
	}

	public void setBounty(int bounty) {
		this.bounty = bounty;
	}

	public SuperPrison getSuperPrisonVar() {
		return superPrisonVar;
	}

	public void setSuperPrisonVar(SuperPrison superPrisonVar) {
		this.superPrisonVar = superPrisonVar;
	}

	@Override
	public String toString() {
		return "SuperVillain [svillId=" + svillId + ", name=" + name + ", superpower=" + superpower + ", bounty="
				+ bounty+ "]";
	}
	
	
	
}
