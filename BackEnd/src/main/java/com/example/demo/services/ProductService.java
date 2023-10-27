package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prepo;
	
	public Product save(Product p)
	{
		return prepo.save(p);
	}
	
	public List<Product> getAll()
	{
		return prepo.findAll();
	}
	
	public int updateP(String pname,String pdesc, int uid, int cid, double mrp_price, double generic_price, int pid)
	 {
		 
		 return prepo.updateProduct(pname,pdesc,uid,cid,mrp_price,generic_price, pid);
	 }
	
	public int deleteP( int pid)
	 {
		 
		 return prepo.deleteProduct( pid);
	 }
	
	
	
	
	
}
