package com.revature.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.RecordCompany;
import com.revature.util.HibernateUtil;

public class RecordCompanyDao {
public RecordCompanyDao() {
	// TODO Auto-generated constructor stub
}public void insert(RecordCompany company) {
	Session ses = HibernateUtil.getSession();
	Transaction tx = ses.beginTransaction();

	ses.save(company);

	tx.commit();
	/*ses.close();*/
}

public void update(RecordCompany company) {
	Session ses = HibernateUtil.getSession();
	Transaction tx = ses.beginTransaction();

	ses.update(company);

	tx.commit();
	/*ses.close();*/
}

public RecordCompany selectById(int id) {
	Session ses = HibernateUtil.getSession();

	RecordCompany superPrison = ses.get(RecordCompany.class, id);

	/*ses.close();*/

	return superPrison;
}

public RecordCompany selectByName(String name) {
	return null;
}

public List<RecordCompany> selectAll() {
	Session ses = HibernateUtil.getSession();

	List<RecordCompany> superPrisonList =
			ses.createQuery("from SuperPrison",
					RecordCompany.class).list();

	/*ses.close();*/

	return superPrisonList;
}

}
