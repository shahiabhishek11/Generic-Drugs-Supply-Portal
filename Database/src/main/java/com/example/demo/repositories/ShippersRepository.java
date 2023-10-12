package com.example.demo.repositories;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Shippers;

public interface ShippersRepository extends JpaRepository<Shippers, Integer>
{
	List<Shippers> findByShopid(Integer shopid);
}
