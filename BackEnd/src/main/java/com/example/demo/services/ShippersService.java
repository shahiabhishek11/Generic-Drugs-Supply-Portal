package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Shippers;
import com.example.demo.repositories.ShippersRepository;

@Service
public class ShippersService 
{
	@Autowired
	ShippersRepository shippersrepo;
	
	public Shippers save(Shippers shipper) {
		return shippersrepo.save(shipper);
		
	}
	
	public List<Shippers> getAll()
	{
		return shippersrepo.findAll();
	}
	
	public  List<Shippers> getByShopID(Integer shopid) 
	{
		return shippersrepo.findByShopid(shopid);
	}

}
