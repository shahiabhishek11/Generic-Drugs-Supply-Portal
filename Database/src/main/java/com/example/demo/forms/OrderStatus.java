package com.example.demo.forms;

public class OrderStatus{
	String pstatus;
	String ostatus;
	
	public OrderStatus() {
		super();
	}
	public OrderStatus(String pstatus, String ostatus) {
		super();
		this.pstatus = pstatus;
		this.ostatus = ostatus;
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
	
}