package com.example.demo.entities;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders")
public class Orders 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int oid;
	
	@Column
	Date odate;
	
	@ManyToOne
	@JoinColumn(name = "cust_id")
	Customer customer;
	
	@ManyToOne
	@JoinColumn(name = "shopid")
	Shoppers shopper;
	
//	@Column
//	Integer shopid;
	
	@Column
	BigDecimal price;
	
	@Column
	String pstatus;
	
	@Column
	String ostatus;
	
	@JsonIgnoreProperties("order")
	@OneToMany(mappedBy = "order",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	Set<OrdersItems> orderItemList;

	public Orders() {
		super();
	}

	public Orders(int oid, Date odate, Customer customer, Shoppers shopper, BigDecimal price, String pstatus,
			String ostatus) {
		super();
		this.oid = oid;
		this.odate = odate;
		this.customer = customer;
		this.shopper = shopper;
		this.price = price;
		this.pstatus = pstatus;
		this.ostatus = ostatus;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public Date getOdate() {
		return odate;
	}

	public void setOdate(Date odate) {
		this.odate = odate;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Shoppers getShopper() {
		return shopper;
	}

	public void setShopper(Shoppers shopper) {
		this.shopper = shopper;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getPstatus() {
		return pstatus;
	}

	public void setPstatus(String pstatus) {
		this.pstatus = pstatus;
	}

	public String getOstatus() {
		return ostatus;
	}

	public void setOstatus(String ostatus) {
		this.ostatus = ostatus;
	}
	
	
	public Set<OrdersItems> getOrderItemList() {
		return orderItemList;
	}

	public void setOrderItemList(Set<OrdersItems> orderItemList) {
		this.orderItemList = orderItemList;
		
		for(OrdersItems item:orderItemList)
				item.setOrder(this);
	}

	@Override
	public String toString() {
		return "Orders [oid=" + oid + ", odate=" + odate + ", customer=" + customer + ", shopper=" + shopper
				+ ", price=" + price + ", pstatus=" + pstatus + ", ostatus=" + ostatus + "]";
	}

	
}
