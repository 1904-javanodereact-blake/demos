package com.revature.access;

import com.revature.model.Spaceship;

public class AccessLauncher {
	public static void main(String[] args) {
		Spaceship ship = new Spaceship(1, "ship", "its a ship");
		System.out.println(ship.getName());
		
		System.out.println(ship);
		
	}
}
