package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.entities.ProductStock;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.repositories.ProductStockRepositories;

@Service
public class ProductStockServices {

	@Autowired
	ProductStockRepositories psrepo;
	
	
	
	public ProductStock save(ProductStock p)
	{
		return psrepo.save(p);
	}
	
	public List<ProductStock> getAll()
	{
		return psrepo.findAll();
	}
	
	
	public List<ProductStock> getAllProduct()	{
		return psrepo.getAllProduct();
     }

	public List<ProductStock> getAllProductStockByShop(Integer shopid) {
		// TODO Auto-generated method stub
		return psrepo.findByShopperUid(shopid);
	}

	public int updateStockQty(Integer psid, int qty) {
		// TODO Auto-generated method stub
		return psrepo.updateSockQty(psid, qty);
	}
}
