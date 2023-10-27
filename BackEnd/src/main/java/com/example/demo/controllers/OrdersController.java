package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Orders;
import com.example.demo.services.OrdersService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrdersController {
	
	@Autowired
	OrdersService oservice;
	
	@PostMapping("/saveorder")
	public Orders save(@RequestBody Orders o)
	{
		return oservice.save(o);
	}
	
	@GetMapping("/fetchorders")
	public List<Orders> fetch()
	{
			return oservice.getAll();
	}

}
