package com.revature.reflections;

import java.lang.reflect.Field;

import com.revature.model.Spaceship;

public class ReflectionLauncher {
	public static void main(String[] args) throws NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
		Spaceship s = new Spaceship(1, "name", "desc");

		Class<? extends Spaceship> c = s.getClass();
		Field f = c.getDeclaredField("name");
		System.out.println(f);
		f.setAccessible(true);
		f.set(s, "fish sticks");
		
		System.out.println(s);
	}
}
