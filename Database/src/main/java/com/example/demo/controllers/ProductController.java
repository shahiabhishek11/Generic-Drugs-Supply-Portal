package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	ProductService pservice;
	
	
	@GetMapping("/showProduct")
	public List<Product> showProduct()
	{
		return pservice.getAll();
	}
	
	@PostMapping("/insertProduct")
	public Product insertProduct(@RequestBody Product p)
	{
		return pservice.save(p);
	}
	
	
	
	@PostMapping("/updateProduct")
	public int updateProduct( @RequestParam("pname")String pname , @RequestParam("p_desc")String p_desc, @RequestParam("unit_id")int unit_id, @RequestParam("cid")int cid, @RequestParam("mrp_price")double mrp_price, @RequestParam("generic_price")double  generic_price, @RequestParam("pid")int pid )
	{
		return pservice.updateP( pname, p_desc, unit_id, cid, mrp_price, generic_price,pid );
	
	}
	
	@GetMapping("/deleteProduct")
	public int deleteProduct( @RequestParam("pid")int pid) {
		return pservice.deleteP(pid );
	
	}
	
}
