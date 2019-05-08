package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.Band;
import com.revature.util.HibernateUtil;

public class BandDao {
	public BandDao() {
		// TODO Auto-generated constructor stub
	}
	public void insert(Band band) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		ses.save(band);

		tx.commit();
		/*ses.close();*/
	}

	public void update(Band band) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();

		ses.update(band);

		tx.commit();
		/*ses.close();*/
	}

	public Band selectById(int id) {
		Session ses = HibernateUtil.getSession();

		Band superPrison = ses.get(Band.class, id);

		/*ses.close();*/

		return superPrison;
	}

	public Band selectByName(String name) {
		return null;
	}

	public List<Band> selectAll() {
		Session ses = HibernateUtil.getSession();

		List<Band> superPrisonList =
				ses.createQuery("from SuperPrison",
						Band.class).list();

		/*ses.close();*/

		return superPrisonList;
	}

}
