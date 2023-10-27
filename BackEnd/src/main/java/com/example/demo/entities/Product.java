package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int pid;
	
	
	
	@Column
	String pname;
	

	@Column
	String p_desc;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "unit_id")
	Unit unit;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "cid")
	Company company;
	
	@Column
	double mrp_price;
	
	@Column
	double generic_price;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String pname, String p_desc, Unit unit, Company comapny, double mrp_price, double generic_price) {
		super();
		this.pname = pname;
		this.p_desc = p_desc;
		this.unit = unit;
		this.company = comapny;
		this.mrp_price = mrp_price;
		this.generic_price = generic_price;
	}

	public Product(int pid, String pname, String p_desc, Unit unit, Company comapny, double mrp_price,
			double generic_price) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.p_desc = p_desc;
		this.unit = unit;
		this.company = comapny;
		this.mrp_price = mrp_price;
		this.generic_price = generic_price;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getP_desc() {
		return p_desc;
	}

	public void setP_desc(String p_desc) {
		this.p_desc = p_desc;
	}

	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}

	public Company getComapny() {
		return company;
	}

	public void setComapny(Company comapny) {
		this.company = comapny;
	}

	public double getMrp_price() {
		return mrp_price;
	}

	public void setMrp_price(double mrp_price) {
		this.mrp_price = mrp_price;
	}

	public double getGeneric_price() {
		return generic_price;
	}

	public void setGeneric_price(double generic_price) {
		this.generic_price = generic_price;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", p_desc=" + p_desc + ", unit=" + unit + ", comapny="
				+ company + ", mrp_price=" + mrp_price + ", generic_price=" + generic_price + "]";
	}

	

	
		
	
	

}
