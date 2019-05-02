package com.revature.sorting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.revature.model.Spaceship;

public class SortingLauncher {
	public static void main(String[] args) {
		List<Spaceship> ships = new ArrayList<>();
		ships.add(new Spaceship(1, "Ebon Hawk", "Its a hawk"));
		ships.add(new Spaceship(4, "Knuckles", "It doesn't chuckle"));
		ships.add(new Spaceship(3, "Friends", "Its a friend??? or fiend????"));
		ships.add(new Spaceship(7, "Star fox", "Its a fox"));
		ships.add(new Spaceship(5, "Robot nick", "Its a Robot"));
		ships.add(new Spaceship(2, "Sonic", "Its a hedgehog"));
		ships.add(new Spaceship(6, "Tails", "Its a fox that can fly"));
		System.out.println("before sort");
		ships.forEach(ship -> System.out.println(ship));
		
		Collections.sort(ships); // will use comparable
		System.out.println("after sort");
		ships.forEach(ship -> System.out.println(ship));
		
//		ships.sort(new ShipNameComparator());
		ships.sort((one, two) -> one.getName().compareTo(two.getName()));
		System.out.println("after sort comparator");
		ships.forEach(ship -> System.out.println(ship));
		
	}
}
