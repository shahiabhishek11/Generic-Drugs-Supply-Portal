package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Shoppers;
import com.example.demo.services.ShoppersService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ShopperController
{
	@Autowired
	ShoppersService shoppersservice;
	
	@GetMapping("/shoppers")
	public List<Shoppers> shoppers()
	{
		return shoppersservice.getAll();
	}
	
	@PostMapping("/shoppers")
	public Shoppers createShopper(@RequestBody Shoppers shopper)
	{
		System.out.println(shopper);
		return shoppersservice.save(shopper);
	}

}
