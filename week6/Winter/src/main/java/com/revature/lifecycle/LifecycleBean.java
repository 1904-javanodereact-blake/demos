package com.revature.lifecycle;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author USER
 *
 */
//@Component
public class LifecycleBean implements DisposableBean, BeanNameAware, BeanFactoryAware, ApplicationContextAware, InitializingBean {

	private String field;

	public LifecycleBean() {
		System.out.println("Instantiation-------------------------------------------");
	}

	public String getField() {
		return field;
	}

	@Value("Hello")
	public void setField(String field) {
		System.out.println("Populate Properties------------------------------------------");
		this.field = field;
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		System.out.println("Application Context Aware");
	}

	@Override
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		System.out.println("Bean Factory Aware");
	}

	@Override
	public void setBeanName(String name) {
		System.out.println("AWARES ----------------------------------------------------------------");
		System.out.println("Bean Name Aware");
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("Initialization--------------------------------------------------------");
	}

	@PostConstruct // custom init method
	public void myCustomInit() {
		System.out.println("custom init----------------------------------------------------------");
	}

	@PreDestroy
	public void customDestroy() {
		System.out.println("custom destory-------------------------------------------------------");
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("destroy---------------------------------------------------------------");
	}

}
