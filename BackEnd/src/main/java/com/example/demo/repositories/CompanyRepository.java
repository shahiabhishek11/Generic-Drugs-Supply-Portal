package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
