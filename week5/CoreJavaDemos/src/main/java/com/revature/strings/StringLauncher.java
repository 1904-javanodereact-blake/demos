package com.revature.strings;

public class StringLauncher {
	
	public static void main(String[] args) {
		String s = "he";
		String s2 = "he";
		System.out.println(s == s2);
		
		String s3 = "hello";
		s3 = s3.substring(0,2);
		System.out.println(s3);
		System.out.println(s == s3);
		
		String s4 = new String("he"); // new keyword makes strings not in string pool
		System.out.println(s == s4);
		System.out.println(s.equals(s4));
		
		s4 = s4.intern(); // returns the string from string pool if there is one with same value
							// or puts string in string pool if not
		System.out.println(s == s4);
		
		
		StringBuilder sb = new StringBuilder("hello");
		sb.append(" world");
		System.out.println(sb);
	}

}
