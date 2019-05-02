package com.revature.exceptions;

import java.util.Arrays;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ExceptionLauncher {
	private static Logger log = LogManager.getRootLogger();
	public static void main(String[] args) {
		runtime();
//		checked();
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
		log.warn("An exception occurred in myMethod()");
		throw new Exception();
	}

	public static void runtime() {
		System.out.println("started");
		int[] nums = null;
		log.trace("nums: " + Arrays.toString(nums));
		
		nums[5] = 20;
		log.trace("nums: " + Arrays.toString(nums));

		System.out.println("done");
	}
}
