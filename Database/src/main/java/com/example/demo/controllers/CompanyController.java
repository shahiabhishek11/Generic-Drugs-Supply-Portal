package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Company;
import com.example.demo.services.CompanyService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CompanyController {

	@Autowired
	CompanyService cservice;
	
	
	@GetMapping("/showCompany")
	public List<Company> showComapny()
	{
		return cservice.getAll();
	}
	
	@PostMapping("/insertCompany")
	public Company insertCompany(@RequestBody Company c)
	{
		return cservice.save(c);
	}
}
