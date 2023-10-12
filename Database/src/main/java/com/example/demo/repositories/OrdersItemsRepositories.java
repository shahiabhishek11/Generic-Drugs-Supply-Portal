package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.OrdersItems;

public interface OrdersItemsRepositories extends JpaRepository<OrdersItems, Integer> {

}
