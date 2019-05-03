package com.revature.threading;

public class BasicRunnable implements Runnable {

	@Override
	public void run() {
		while(true) {
			System.out.println("runnable running");
		}
	}
}
