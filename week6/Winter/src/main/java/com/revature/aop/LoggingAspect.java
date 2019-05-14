package com.revature.aop;

import java.util.Arrays;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	private Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

		//		return  package  class method (parameters)
	@Around(value="execution(* com.revature.*..*(..))")
	public Object log(ProceedingJoinPoint pjp) throws Throwable {
		logger.trace("method called with signature: " + pjp.getSignature());
		logger.trace("\tand parameters: " + Arrays.toString(pjp.getArgs()));
		
		try {
			Object returned = pjp.proceed(); // allow the method we are weaving around to continue
			logger.trace(pjp.getSignature() + " returned: " + returned);
			return returned;
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.trace(pjp.getSignature() + " threw exception: " + e.getClass());
			throw e;
		}
	}
	
}





