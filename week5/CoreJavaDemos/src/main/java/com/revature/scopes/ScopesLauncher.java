package com.revature.scopes;

public class ScopesLauncher {
	public static int x = 10; // class scoped variable
	
	public String name = "blake"; // instance scoped name
	
	public static void main(String[] args) {
		System.out.println("x = " + ScopesLauncher.x);
		ScopesLauncher.x = 25;
		System.out.println("x = " + ScopesLauncher.x);
		
		ScopesLauncher l = new ScopesLauncher();
		System.out.println("name = " + l.name);
		l.setName("Tyler");
		System.out.println("new name = " + l.name);
		
		ScopesLauncher l2 = new ScopesLauncher();
	}
	
	/**
	 *  
	 * @param name is scoped to the method
	 */
	public void setName(String name) {
		if(true) {
			int i = 5; // i is block scoped
			System.out.println(i);
		}
		this.name = name;
	}

}
