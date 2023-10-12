package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.OrdersItems;
import com.example.demo.repositories.OrdersItemsRepositories;

@Service
public class OrdersItemsService {
	
	
	@Autowired
	OrdersItemsRepositories oirepo;
	
	public OrdersItems save(OrdersItems o)
	{
		return oirepo.save(o);
	}
	
	public List<OrdersItems> getAll()
	{
		return oirepo.findAll();
	}
	

}
