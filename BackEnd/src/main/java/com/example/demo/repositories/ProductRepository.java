package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.example.demo.entities.Product;
@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	
	//update
	
		@Modifying
		@Query("update Product p set p.pname=?1,p.p_desc=?2, p.unit=?3, p.company=?4, p.mrp_price=?5, p.generic_price=?6  where p.pid=?7")
		public int updateProduct( String pname,String p_desc, int unit_id, int cid, double mrp_price, double generic_price,int pid);

		
		@Modifying
		@Query(value = "delete from Product where pid = ?1" , nativeQuery = true)
		public int  deleteProduct(int pid);
		
		
		
		
}
