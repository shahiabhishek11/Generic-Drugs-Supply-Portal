package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "shopper")
@PrimaryKeyJoinColumn(name = "shopid", referencedColumnName = "uid")
public class Shoppers extends Users
{
	@Column(name = "shop_name")
	String shopname;
	
	@Column(name = "retail_lc_no")
	String retail_lc_no;
	
	@Column(name = "acp_lc_no")
	String acp_lc_no;

	public Shoppers(String userid, String password, String email, String contact, String area, String city,
			String pincode, String usertype, String shopname, String retail_lc_no, String acp_lc_no) {
		super(userid, password, email, contact, area, city, pincode, usertype);
		this.shopname = shopname;
		this.retail_lc_no = retail_lc_no;
		this.acp_lc_no = acp_lc_no;
	}

	public Shoppers() {
		super();
	}

	public String getShopname() {
		return shopname;
	}

	public void setShopname(String shopname) {
		this.shopname = shopname;
	}

	public String getRetail_lc_no() {
		return retail_lc_no;
	}

	public void setRetail_lc_no(String retail_lc_no) {
		this.retail_lc_no = retail_lc_no;
	}

	public String getAcp_lc_no() {
		return acp_lc_no;
	}

	public void setAcp_lc_no(String acp_lc_no) {
		this.acp_lc_no = acp_lc_no;
	}

	@Override
	public String toString() {
		return "Shoppers [shopname=" + shopname + ", retail_lc_no=" + retail_lc_no + ", acp_lc_no=" + acp_lc_no + "]";
	}

}
