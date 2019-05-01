package com.revature.gc;

public class Trash {
	private int id;
	private static int sequence = 1;
	
	public Trash() {
		this.id = sequence;
		sequence++;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	@Override
	protected void finalize() throws Throwable {
		System.out.println("trash with id: " + this.id + " removed");
	}
	
	
}
