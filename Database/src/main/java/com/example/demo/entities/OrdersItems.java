package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders_items")
public class OrdersItems 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ooid;
	
	
	@JsonIgnoreProperties("orderItemList")
	@ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "oid" , nullable = false)
	Orders order;
	
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="pid")
	Product product;
	
	@JoinColumn
	int qty;
	
	

	public OrdersItems() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrdersItems(Orders order, Product product, int qty) {
		super();
		this.order = order;
		this.product = product;
		this.qty = qty;
	}



	public OrdersItems(int ooid, Orders order, Product product, int qty) {
		super();
		this.ooid = ooid;
		this.order = order;
		this.product = product;
		this.qty = qty;
	}


	public int getOoid() {
		return ooid;
	}






	public void setOoid(int ooid) {
		this.ooid = ooid;
	}


	public Orders getOrder() {
		return order;
	}



	public void setOrder(Orders order) {
		this.order = order;
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
		return "OrdersItems [ooid=" + ooid + ", order=" + order + ", product=" + product + ", qty=" + qty + "]";
	}
	
	
	
}
