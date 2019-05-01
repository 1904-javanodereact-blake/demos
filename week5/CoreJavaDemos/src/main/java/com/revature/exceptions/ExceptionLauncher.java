package com.revature.exceptions;

public class ExceptionLauncher {
	public static void main(String[] args) {
//		runtime();
		checked();
	}

	public static void checked() {
		System.out.println("started");
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("done");
	}

	public static void myMethod() throws Exception {
		throw new Exception();
	}

	public static void runtime() {
		System.out.println("started");
		int[] nums = null;

		nums[5] = 20;

		System.out.println("done");
	}
}
