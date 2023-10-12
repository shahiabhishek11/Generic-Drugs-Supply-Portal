package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "unit")
public class Unit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int unit_id;
	
	
	@Column
	String u_desc;


	public Unit() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	public Unit(String u_desc) {
		super();
		this.u_desc = u_desc;
	}




	public Unit(int uid, String u_desc) {
		super();
		this.unit_id = uid;
		this.u_desc = u_desc;
	}




	public int getUid() {
		return unit_id;
	}




	public void setUid(int uid) {
		this.unit_id = uid;
	}




	public String getU_desc() {
		return u_desc;
	}




	public void setU_desc(String u_desc) {
		this.u_desc = u_desc;
	}




	@Override
	public String toString() {
		return "Unit [uid=" + unit_id + ", u_desc=" + u_desc + "]";
	}
	
	

}
