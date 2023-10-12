package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumns;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Inheritance(strategy =InheritanceType.JOINED)
@Entity
@Table(name="users")
public   class Users 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	
	@Column
	String userid;
	
	@Column
	String password;
	
	@Column
	String email;
	
	@Column
	String contact;
	
	@Column
	String area;
	
	@Column
	String city;
	
	@Column
	String pincode;
	
	@Column
	String usertype;
	
	
	

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	


	public Users(String userid, String password, String email, String contact, String area, String city, String pincode,
			String usertype) {
		super();
		this.userid = userid;
		this.password = password;
		this.email = email;
		this.contact = contact;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
		this.usertype = usertype;
	}




	public int getUid() {
		return uid;
	}




	public void setUid(int uid) {
		this.uid = uid;
	}




	public String getUserid() {
		return userid;
	}




	public void setUserid(String userid) {
		this.userid = userid;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getContact() {
		return contact;
	}




	public void setContact(String contact) {
		this.contact = contact;
	}




	public String getArea() {
		return area;
	}




	public void setArea(String area) {
		this.area = area;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public String getPincode() {
		return pincode;
	}




	public void setPincode(String pincode) {
		this.pincode = pincode;
	}




	public String getUsertype() {
		return usertype;
	}




	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	
	
	
	
}
