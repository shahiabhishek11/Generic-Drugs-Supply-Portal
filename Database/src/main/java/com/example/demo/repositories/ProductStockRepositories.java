package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ProductStock;

@Transactional
@Repository

public interface ProductStockRepositories extends JpaRepository<ProductStock, Integer> {

	
		@Query(value="select ps.psid,ps.shopid,ps.qty,p.pid,p.pname,p.p_desc,p.mrp_price,p.generic_price from product_stock ps inner join  product p on p.pid=ps.pid",nativeQuery = true)
	public List<ProductStock> getAllProduct();

		public List<ProductStock> findByShopperUid(Integer shopid);
		
		@Transactional
		@Modifying
		@Query("update ProductStock ps set ps.qty=?2 where ps.psid = ?1")
		public int updateSockQty(Integer psid, int qty);
	
}
