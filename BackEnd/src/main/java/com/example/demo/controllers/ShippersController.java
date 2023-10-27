package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Orders;
import com.example.demo.entities.Shippers;
import com.example.demo.forms.OrderStatus;
import com.example.demo.services.OrdersService;
import com.example.demo.services.ShippersService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ShippersController
{
	@Autowired
	ShippersService shipperservice;
	
	@Autowired
	OrdersService orderservice;
	
	@PostMapping("/shippers")
	public Shippers save(@RequestBody Shippers s)
	{
		return shipperservice.save(s);
	}
	
	@GetMapping("/shippers")
	public List<Shippers> fetch()
	{
		return shipperservice.getAll();
	}
	
	@GetMapping("/shop/{shopid}/shippers")
	public List<Shippers> getShippersByShop(@PathVariable("shopid") Integer shopid )
	{
		System.out.println(shopid);
		return shipperservice.getByShopID(shopid);
	}
	
	@GetMapping("/shippers/{shopid}/orders")
	public List<Orders> getOrdersByShop(@PathVariable("shopid") Integer shopid)
	{
		return orderservice.getOrdersByShopID(shopid);
	}
	
	
	@PutMapping("/shippers/orders/{orderid}")
	public int updateOrderById(@RequestBody OrderStatus status, @PathVariable("orderid") Integer orderid)
	{
		return orderservice.updateStatus(status.getPstatus(), status.getOstatus(), orderid);
	}
	
	
}
