package com.revature.sorting;

import java.util.Comparator;

import com.revature.model.Spaceship;

public class ShipNameComparator implements Comparator<Spaceship> {

	@Override
	public int compare(Spaceship o1, Spaceship o2) {
		return o1.getName().compareTo(o2.getName());
	}

}
