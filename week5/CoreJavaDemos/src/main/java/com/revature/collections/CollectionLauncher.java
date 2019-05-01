package com.revature.collections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.revature.model.Spaceship;

public class CollectionLauncher {
	public static void main(String[] args) {
		List<Spaceship> myList = new ArrayList<Spaceship>();

		myList.add(new Spaceship(1, "ship", "ship"));
		myList.add(new Spaceship(2, "ship2", "ship"));
		myList.add(new Spaceship(3, "my ship", "ship"));
		myList.add(new Spaceship(4, "your ship", "ship"));
		myList.add(new Spaceship(5, "red ship", "ship"));
		myList.add(new Spaceship(6, "blue ship", "ship"));

		System.out.println(myList);

		Set<Integer> nums = new HashSet<Integer>();
		
		nums.add(5);
		nums.add(25);
		nums.add(7);
		nums.add(2);
		nums.add(823147);
		nums.add(2343);
		
		
		System.out.println(nums);
		
		for(int number: nums) {
			System.out.println(number);
		}
		
		
		Map<String, String> dictionary = new HashMap<String, String>();
		dictionary.put("hi", "An informal greeting");
		dictionary.put("Aloha", "Hi or goodbye");
		dictionary.put("goodbye", "an informal saying for departing");
		
		dictionary.put("goodbye", "a formal saying for departing");
		
		for (String key: dictionary.keySet()) {
			System.out.println(key + ": " + dictionary.get(key));
		}
	}
}
