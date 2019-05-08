package com.hibernate.model;

public class Rockstar {

	int id;
	String rockName;
	int hairLength;
	double attitude;

	public Rockstar() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Rockstar(String rockName, int hairLength, double attitude) {
		super();
		this.rockName = rockName;
		this.hairLength = hairLength;
		this.attitude = attitude;
	}

	public Rockstar(int id, String rockName, int hairLength, double attitude) {
		super();
		this.id = id;
		this.rockName = rockName;
		this.hairLength = hairLength;
		this.attitude = attitude;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRockName() {
		return rockName;
	}

	public void setRockName(String rockName) {
		this.rockName = rockName;
	}

	public int getHairLength() {
		return hairLength;
	}

	public void setHairLength(int hairLength) {
		this.hairLength = hairLength;
	}

	public double getAttitude() {
		return attitude;
	}

	public void setAttitude(double attitude) {
		this.attitude = attitude;
	}

	@Override
	public String toString() {
		return "Rockstar [id=" + id + ", rockName=" + rockName + ", hairLength=" + hairLength + ", attitude=" + attitude
				+ "]";
	}

}
