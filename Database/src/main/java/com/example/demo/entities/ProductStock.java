package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="product_stock")
public class ProductStock 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int psid;
	
	
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name = "shopid")
	Shoppers shopper;
	
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name = "pid")
	Product product;
	
	
	@Column
	int qty;


	public ProductStock() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ProductStock(Shoppers shopper, Product product, int qty) {
		super();
		this.shopper = shopper;
		this.product = product;
		this.qty = qty;
	}


	public int getPsid() {
		return psid;
	}


	public void setPsid(int psid) {
		this.psid = psid;
	}


	public Shoppers getShopper() {
		return shopper;
	}


	public void setShopper(Shoppers shopper) {
		this.shopper = shopper;
	}


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}


	public int getQty() {
		return qty;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}


	@Override
	public String toString() {
		return "ProductStock [psid=" + psid + ", shopper=" + shopper + ", product=" + product + ", qty=" + qty + "]";
	}
	
	
	
	
}
