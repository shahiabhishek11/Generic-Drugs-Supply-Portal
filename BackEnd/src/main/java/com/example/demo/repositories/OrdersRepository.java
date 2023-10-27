package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer>
{
	List<Orders> findByShopperUid(Integer shopid);
	
	@Transactional
	@Modifying
	@Query("update Orders o set o.pstatus = ?1, o.ostatus = ?2 where o.oid = ?3") 
	int changeOrderStatus(String pstatus, String ostatus, Integer oid);
}
