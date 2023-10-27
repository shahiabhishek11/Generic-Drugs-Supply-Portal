package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Shoppers;
import com.example.demo.repositories.ShoppersRepository;

@Service
public class ShoppersService 
{
	@Autowired
	ShoppersRepository shopperrepo ;
	
	public Shoppers save(Shoppers shoppers)
	{
		return shopperrepo.save(shoppers);
	}
	
	public List<Shoppers> getAll()
	{
		return shopperrepo.findAll();
	}

}
