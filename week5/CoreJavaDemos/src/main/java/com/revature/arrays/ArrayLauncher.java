package com.revature.arrays;

import java.util.Arrays;

public class ArrayLauncher {
	public static void main(String[] args) {
		int[] nums = new int[7];
		nums[2] = 15;
		
		nums[6] = 3;
		nums[1] = 14;
		
		nums[3] = 5;
//		for(int i = 0; i < nums.length; i++) {
//			System.out.println(nums[i]);
//		}
		
//		for(int num: nums) {
//			System.out.println(num);
//		}
		System.out.println(Arrays.toString(nums));
		
		Arrays.sort(nums);
		System.out.println(Arrays.toString(nums));
		
		int[][] matrix = new int[2][2];
		matrix[0][0] = 15;
	}
}
