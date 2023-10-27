package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cid;
	
	
	@Column
	String cname;


	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	public Company(String cname) {
		super();
		this.cname = cname;
	}




	public Company(int cid, String cname) {
		super();
		this.cid = cid;
		this.cname = cname;
	}




	public int getCid() {
		return cid;
	}




	public void setCid(int cid) {
		this.cid = cid;
	}




	public String getCname() {
		return cname;
	}




	public void setCname(String cname) {
		this.cname = cname;
	}




	@Override
	public String toString() {
		return "Company [cid=" + cid + ", cname=" + cname + "]";
	}
	
	
	
	
	

}
