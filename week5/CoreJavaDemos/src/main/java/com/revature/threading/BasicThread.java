package com.revature.threading;

public class BasicThread extends Thread {

//	@Override
//	public synchronized void start() {
//		run();
//	}

	@Override
	public void run() {
		while (true) {
			System.out.println("basic thread running");
		}
	}
}
