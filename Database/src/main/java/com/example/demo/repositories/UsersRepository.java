package com.example.demo.repositories;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

 @Query("select u.usertype,u.uid from Users u where userid= :urid and password= :pwd")
 public List<Object[]> CheckLogin(@Param("urid")String urid,@Param("pwd")String pwd);
}


