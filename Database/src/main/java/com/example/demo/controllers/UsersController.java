package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Users;

import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UsersController {

	
	@Autowired
	UserService uservice;
	
	@PostMapping("/saveusers")
	public Users save(@RequestBody Users u)
	{
		return uservice.save(u);
	}

	@GetMapping("/allusers")
	public List<Users> fetch()
	{
		return uservice.getAll();
	}
	
	@PostMapping("/CheckLogin")
	public Object CheckLogin(@RequestBody Users u) {
		return  uservice.CheckLogin(u.getUserid(),u.getPassword());
	}
}
