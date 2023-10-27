package com.example.demo.entities;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Entity
@Table(name="customer")
@PrimaryKeyJoinColumn(name = "cust_id",referencedColumnName = "uid")
public class Customer  extends Users
{

		//@Id
		//@GeneratedValue(strategy = GenerationType.IDENTITY)
		//int cust_id;
		
		
		//@OneToOne(cascade = CascadeType.ALL)
		//@JoinColumn(name="uid")
		//Users users;
		
		@Column
		String fname;
		
		@Column
		String lname;
		
		
		@Column
		String gender;

		public Customer() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Customer(String userid, String password, String email, String contact, String area, String city,
				String pincode, String usertype, String fname, String lname, String gender) {
			super(userid, password, email, contact, area, city, pincode, usertype);
			this.fname = fname;
			this.lname = lname;
			this.gender = gender;
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
			return "Customer [fname=" + fname + ", lname=" + lname + ", gender=" + gender + "]";
		}
		
		
		
		
		

//		public Customer(Users users, String fname, String lname, String gender) {
//			super();
//			this.users = users;
//			this.fname = fname;
//			this.lname = lname;
//			this.gender = gender;
//		}

//		public Customer(String userid, String password, String email, String contact, String area, String city,
//				String pincode, String usertype, int cust_id, Users users, String fname, String lname, String gender) {
//			super(userid, password, email, contact, area, city, pincode, usertype);
//			this.cust_id = cust_id;
//			this.users = users;
//			this.fname = fname;
//			this.lname = lname;
//			this.gender = gender;
//		}
//
//		
//		
//		
//		public int getCust_id() {
//			return cust_id;
//		}
//
//		public void setCust_id(int cust_id) {
//			this.cust_id = cust_id;
//		}
//
//		public Users getUsers() {
//			return users;
//		}
//
//		public void setUsers(Users users) {
//			this.users = users;
//		}
//
//		public String getFname() {
//			return fname;
//		}
//
//		public void setFname(String fname) {
//			this.fname = fname;
//		}
//
//		public String getLname() {
//			return lname;
//		}
//
//		public void setLname(String lname) {
//			this.lname = lname;
//		}
//
//		public String getGender() {
//			return gender;
//		}
//
//		public void setGender(String gender) {
//			this.gender = gender;
//		}
//
//		@Override
//		public String toString() {
//			return "Customer [cust_id=" + cust_id + ", users=" + users + ", fname=" + fname + ", lname=" + lname
//					+ ", gender=" + gender + "]";
//		}
		
		
		
		
		
		
		
		
		
		
	}
