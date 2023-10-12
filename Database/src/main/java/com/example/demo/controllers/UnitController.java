package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Unit;
import com.example.demo.services.UnitService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UnitController {

	@Autowired
	UnitService uservice;
	
	
	@GetMapping("/showUnit")
	public List<Unit> showUnit()
	{
		return uservice.getAll();
	}
	
	@PostMapping("/insertUnit")
	public Unit insertUnit(@RequestBody Unit u)
	{
		return uservice.save(u);
	}
}
