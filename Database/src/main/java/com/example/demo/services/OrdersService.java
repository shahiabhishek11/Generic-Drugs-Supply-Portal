package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Orders;
import com.example.demo.repositories.OrdersRepository;

@Service
public class OrdersService 
{
	@Autowired
	OrdersRepository orderrepo;
	

	public Orders save(Orders order)
	{
		return orderrepo.save(order);
	}
	
	public List<Orders> getAll()
	{
		return orderrepo.findAll();
	}
	
	public List<Orders> getOrdersByShopID(Integer shopid)
	{
		return orderrepo.findByShopperUid(shopid);
		
	}
	public Orders update(Orders order, Integer orderid)
	{
		return orderrepo.save(order);
		
	}
	
	public int updateStatus(String p, String o, Integer oid) 
	{
		return orderrepo.changeOrderStatus(p, o, oid);
	}
	

}
