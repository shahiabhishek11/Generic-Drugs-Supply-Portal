package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Company;
import com.example.demo.repositories.CompanyRepository;


@Service
public class CompanyService {

	@Autowired
	CompanyRepository crepo;
	
	public Company save(Company c)
	{
		return crepo.save(c);
	}
	
	public List<Company> getAll()
	{
		return crepo.findAll();
	}
}
