package com.revature.model;

public class Rockstar {

	int id;
	String name;
	int hairLength;
	String instrument;

	public Rockstar() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Rockstar(String name, int hairLength, String instrument) {
		super();
		this.name = name;
		this.hairLength = hairLength;
		this.instrument = instrument;
	}

	public Rockstar(int id, String name, int hairLength, String instrument) {
		super();
		this.id = id;
		this.name = name;
		this.hairLength = hairLength;
		this.instrument = instrument;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHairLength() {
		return hairLength;
	}

	public void setHairLength(int hairLength) {
		this.hairLength = hairLength;
	}

	public String getInstrument() {
		return instrument;
	}

	public void setInstrument(String instrument) {
		this.instrument = instrument;
	}

	@Override
	public String toString() {
		return "Rockstar [id=" + id + ", name=" + name + ", hairLength=" + hairLength + ", instrument=" + instrument
				+ "]";
	}

}
