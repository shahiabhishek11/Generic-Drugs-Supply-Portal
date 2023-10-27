package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;

import com.example.demo.entities.Users;
import com.example.demo.services.CustomerService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

	@Autowired
	CustomerService  custservice;
	
	@Autowired
	UserService userservice;
	
	
	
	@PostMapping("/savecustomer")
	public Customer save(@RequestBody Customer c)
	{
//		Users u=new Users(c.getUserid(),c.getPassword(),c.getEmail(),c.getContact(),c.getArea(),c.getCity(),c.getPincode(),"customer");
//		Users saveduser=userservice.save(u);
//		Customer c1=new Customer(saveduser,c.getFname(),c.getLname(),c.getGender());
		
//		Users u=new Users(c.getUserid(),c.getPassword(),c.getEmail(),c.getContact(),c.getArea(),c.getCity(),c.getPincode(),"customer");
//		Users saveduser=userservice.save(u);
//		Customer c1=new Customer(saveduser,c.getFname(),c.getLname(),c.getGender());
		
		//Users u=new Users(c.getUserid(),c.getPassword(),c.getEmail(),c.getContact(),c.getArea(),c.getCity(),c.getPincode(),"customer"); 
		
		
		return custservice.save(c);
	}
	
	
	@GetMapping("/allcustomers")
	public List<Customer> fetch()
	{
		return custservice.getAll();
	}
}
