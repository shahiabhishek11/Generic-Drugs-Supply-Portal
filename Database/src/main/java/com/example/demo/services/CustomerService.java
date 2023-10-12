package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Users;
import com.example.demo.repositories.CustomerRepository;


@Service
public class CustomerService 
{

	@Autowired
	CustomerRepository custrepo;
	
	public Customer save(Customer cust)
	{
		return custrepo.save(cust);
	}
	
	public List<Customer> getAll()
	{
		return custrepo.findAll();
	}
}
