package com.revature.threading;

public class ThreadingLauncher {
	private static synchronized void blockingMethod() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws InterruptedException {
//		basicExample();
		
		Thread t1 = new Thread(() -> {
			blockingMethod();
		});
		
		Thread t2 = new Thread(() -> {
			blockingMethod();
		});
		
		Thread t3 = new Thread(() -> {
			try {
				t1.join(); // t3 will now wait until t1 is done executing
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		});
		
		System.out.println(t1.getState());
		t1.start();
		t2.start();
		t3.start();
		System.out.println("t1 state: " + t1.getState());
		System.out.println("t2 state: " + t2.getState());
		Thread.sleep(1000);
		System.out.println("t1 state: " + t1.getState());
		System.out.println("t2 state: " + t2.getState());
		System.out.println("t3 state: " + t3.getState());
		
		Thread.sleep(3000);
		System.out.println("t1 state: " + t1.getState());
		System.out.println("t2 state: " + t2.getState());
	}
	
	
	private static void basicExample() {
		Thread t2 = new BasicThread();
		t2.start();
		
		BasicRunnable br = new BasicRunnable();
		
		Thread t1 = new Thread(br);
		t1.start();
		
		while (true) {
			System.out.println("Main thread running");
		}
	}
}
