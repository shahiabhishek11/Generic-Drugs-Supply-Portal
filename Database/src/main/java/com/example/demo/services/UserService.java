package com.example.demo.services;

import java.util.List;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Shippers;
import com.example.demo.entities.Shoppers;
import com.example.demo.entities.Users;
import com.example.demo.repositories.CustomerRepository;

import com.example.demo.repositories.ShippersRepository;

import com.example.demo.repositories.ShoppersRepository;
import com.example.demo.repositories.UsersRepository;





@Service
public class UserService {
	
	  @Autowired
      UsersRepository usersr;
	  
	  @Autowired
	  CustomerRepository custrepo;
	  
	  @Autowired
	  ShippersRepository shiprepo;
	  
	  @Autowired
	  ShoppersRepository shoprepo;
	
	public Users save(Users ur)
	{
		return usersr.save(ur);
	}
	
	public List<Users> getAll()
	{
		return usersr.findAll();
	}
	
	public Object CheckLogin(String urid,String pwd) {
		
		List<Object[]> u =usersr.CheckLogin(urid, pwd);
		if(u.size()==1) {
			//System.out.println(u.get(0)[0]+"  :"+u.get(0)[1]);
			Customer c=null;
			Shoppers s=null;
			Shippers s1=null;
                        Users U=null;
			if(u.get(0)[0].equals("customer")) {
				Optional<Customer> op = custrepo.findById((int)u.get(0)[1]);
				try {
					c=op.get();
				}
				catch(Exception e){
					c=null;
				}
				
				return c;
			}
			
			
			
			else if(u.get(0)[0].equals("shopper")) {
				Optional<Shoppers> op = shoprepo.findById((int)u.get(0)[1]);
				try {
					s=op.get();
				}
				catch(Exception e){
					s=null;
				}
				
				return s;
			}

                       else if(u.get(0)[0].equals("admin")) {
				Optional<Users> op = usersr.findById((int)u.get(0)[1]);
				try {
					U=op.get();
				}
				catch(Exception e){
					U=null;
				}
				
				return U;
			}
			
				else if(u.get(0)[0].equals("shipper")){
				//System.out.println("shipper");
				//System.out.println(u.get(0)[1]);
				Optional<Shippers> op = shiprepo.findById((int)u.get(0)[1]);
				try {
					s1=op.get();
				}
				catch(Exception e){
					s1=null;
				}
				System.out.println(s1);
				return s1;
			}
			else
				return null;
			
	  }
		
		else {
			return null;
		}
	}

}
