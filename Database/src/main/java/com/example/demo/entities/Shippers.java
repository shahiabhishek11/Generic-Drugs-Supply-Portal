package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "shipper")
@PrimaryKeyJoinColumn(name = "shid", referencedColumnName = "uid")
public class Shippers extends Users
{
	@Column
	Integer shopid;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	String gender;

	
	public Shippers() {
		super();
	}





public Shippers(String userid, String password, String email, String contact, String area, String city,
			String pincode, String usertype, Integer shopid, String fname, String lname, String gender) {
		super(userid, password, email, contact, area, city, pincode, usertype);
		this.shopid = shopid;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
	}





//	public Shoppers getShop() {
//		return shop;
//	}
//
//
//	public void setShop(Shoppers shop) {
//		this.shop = shop;
//	}


	public Integer getShopid() {
	return shopid;
}





public void setShopid(Integer shopid) {
	this.shopid = shopid;
}





	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}





	@Override
	public String toString() {
		return "Shippers [shopid=" + shopid + ", fname=" + fname + ", lname=" + lname + ", gender=" + gender + "]";
	}


	
	
	
	

}
