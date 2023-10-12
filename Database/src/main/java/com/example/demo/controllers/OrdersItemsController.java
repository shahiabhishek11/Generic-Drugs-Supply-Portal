package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.OrdersItems;
import com.example.demo.services.OrdersItemsService;


@RestController
public class OrdersItemsController {

	@Autowired
	OrdersItemsService oiservice;
	
	/*@PostMapping("/saveorderitem")
	public OrdersItems save(@RequestBody OrdersItems oi)
	{
		return oiservice.save(oi);
	}*/
	
	@GetMapping("/fetchordersitems")
	public List<OrdersItems> fetch()
	{
		return oiservice.getAll();
	}
}