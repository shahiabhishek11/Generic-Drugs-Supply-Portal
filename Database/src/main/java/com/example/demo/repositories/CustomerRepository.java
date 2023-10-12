package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Users;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>
{

	
	
}
