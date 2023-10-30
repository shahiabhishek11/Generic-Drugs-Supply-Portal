CREATE DATABASE  IF NOT EXISTS `generic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `generic`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: generic
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Teva Pharmaceutical Industries'),(2,'Wockhardt Pharmaceutical'),(3,'Fresenius Kabi'),(4,'Endo Pharmaceuticals Inc'),(5,'Hospira, Inc');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  CONSTRAINT `FKrpy0r4jlf1syx0c0k791dngcn` FOREIGN KEY (`cust_id`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Shweta','Pande','M'),(2,'Harsha','Ugave','F'),(3,'Komal','Patil',NULL),(4,'Shubham','Joshi',NULL),(5,'Nitin','Chavhan',NULL),(12,'Abhi','Shahi','M'),(13,'','',''),(14,'','',''),(15,'','',''),(16,'','',''),(17,'dsfsd','dsfgdf','Male'),(18,'sdfsdgsd','dfsgdfhgsdfgh','Female');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `ooid` int NOT NULL AUTO_INCREMENT,
  `oid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  PRIMARY KEY (`ooid`),
  KEY `oid_fk_idx` (`oid`),
  KEY `pid_fk_idx` (`pid`),
  CONSTRAINT `oid_fk` FOREIGN KEY (`oid`) REFERENCES `orders` (`oid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `pid_fk` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,1,1,3),(2,2,2,2),(3,1,3,2);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `odate` datetime DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `shopid` int DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `pstatus` varchar(45) DEFAULT NULL,
  `ostatus` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`oid`),
  KEY `shopid_fk_idx` (`shopid`),
  KEY `cust_id_fk_idx` (`cust_id`),
  CONSTRAINT `cust_id_fk` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `shopid_fk1` FOREIGN KEY (`shopid`) REFERENCES `shopper` (`shopid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2022-06-06 00:00:00',1,3,'293.55','','delivered'),(2,'2022-07-06 00:00:00',2,4,'664.46',NULL,'delivered');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `pname` varchar(45) DEFAULT NULL,
  `p_desc` varchar(500) DEFAULT NULL,
  `unit_id` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  `mrp_price` decimal(12,2) DEFAULT NULL,
  `generic_price` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `unit_id_fk_idx` (`unit_id`),
  KEY `cid_fk_idx` (`cid`),
  CONSTRAINT `cid_fk` FOREIGN KEY (`cid`) REFERENCES `company` (`cid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `unit_id_fk` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'AMLOBET 5+50 TAB(Tablet)','A synthetic fluoroquinolone (fluoroquinolones) antibacterial agent that inhibits the supercoiling activity of bacterial DNA gyrase, halting DNA replication',1,2,65.42,58.71),(2,' ALFUSIN D TABLET (STRIP)','Alfuzosin (INN, provided as the hydrochloride salt) is an alpha-adrenergic blocker used to treat benign prostatic hyperplasia (BPH). It works by relaxing the muscles in the prostate and bladder neck, making it easier to urinate.',1,3,371.00,332.23),(3,'ABSOLUT 3G CAP (STRIP)','It is used to relieve pain and inflammation in the mouth',4,1,179.00,150.60),(4,'ABZ 10ML SYRUP (BOTTLE)','A benzimidazole broad-spectrum anthelmintic structurally related to mebendazole that is effective against many diseases. (From Martindale, The Extra Pharmacopoeia, 30th ed, p38)',2,5,16.69,14.94),(5,'9 PM EYE 2.5ML DROPS (PC','Latanoprost ophthalmic solution is a topical medication used for controlling the progression of glaucoma or ocular hypertension, by reducing intraocular pressure.',2,4,544.89,518.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_stock`
--

DROP TABLE IF EXISTS `product_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_stock` (
  `psid` int NOT NULL AUTO_INCREMENT,
  `shopid` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  PRIMARY KEY (`psid`),
  KEY `shopid_fk2_idx` (`shopid`),
  KEY `pid_fk2_idx` (`pid`),
  CONSTRAINT `pid_fk2` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `shopid_fk2` FOREIGN KEY (`shopid`) REFERENCES `shopper` (`shopid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_stock`
--

LOCK TABLES `product_stock` WRITE;
/*!40000 ALTER TABLE `product_stock` DISABLE KEYS */;
INSERT INTO `product_stock` VALUES (1,5,3,50),(2,4,2,40),(3,3,4,70),(4,2,5,100),(5,1,1,90);
/*!40000 ALTER TABLE `product_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_log`
--

DROP TABLE IF EXISTS `session_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session_log` (
  `session_id` int NOT NULL AUTO_INCREMENT,
  `login_time` datetime DEFAULT NULL,
  `logout_time` datetime DEFAULT NULL,
  `uid` int DEFAULT NULL,
  PRIMARY KEY (`session_id`),
  KEY `uid_fk3_idx` (`uid`),
  CONSTRAINT `uid_fk3` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_log`
--

LOCK TABLES `session_log` WRITE;
/*!40000 ALTER TABLE `session_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `session_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipper`
--

DROP TABLE IF EXISTS `shipper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipper` (
  `shid` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `shopid` int DEFAULT NULL,
  PRIMARY KEY (`shid`),
  KEY `uid_fk_idx` (`uid`),
  KEY `shopid_fk_idx` (`shopid`),
  CONSTRAINT `shopid_fk` FOREIGN KEY (`shopid`) REFERENCES `shopper` (`shopid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `uid_fk1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipper`
--

LOCK TABLES `shipper` WRITE;
/*!40000 ALTER TABLE `shipper` DISABLE KEYS */;
INSERT INTO `shipper` VALUES (1,3,'pending',NULL);
/*!40000 ALTER TABLE `shipper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopper`
--

DROP TABLE IF EXISTS `shopper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopper` (
  `shopid` int NOT NULL,
  `shop_name` varchar(500) DEFAULT NULL,
  `retail_lc_no` varchar(45) DEFAULT NULL,
  `acp_lc_no` varchar(45) DEFAULT NULL,
  `uid` int DEFAULT NULL,
  PRIMARY KEY (`shopid`),
  KEY `uid_fk2_idx` (`uid`),
  CONSTRAINT `uid_fk2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopper`
--

LOCK TABLES `shopper` WRITE;
/*!40000 ALTER TABLE `shopper` DISABLE KEYS */;
INSERT INTO `shopper` VALUES (1,'Abhishek GENERIC MEDICINE','re_lc_0815','ac_lc_0111',2),(2,'JAY GAJANAN SWAST AUSHADI SEVA GENERIC MEDICINE','re_lc_0745','ac_lc_0222',8),(3,'ASHA MEDICAL STORES','re_lc_0656','ac_lc_0333',9),(4,'GAYATRI MEDICAl & GENERAL STORES','re_lc_0545','ac_lc_0444',10),(5,'Shrihari Swast Aushdhi Seva Jeneric Medical Store','re_lc_0345','ac_lc_555',11);
/*!40000 ALTER TABLE `shopper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_details`
--

DROP TABLE IF EXISTS `stock_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_details` (
  `sdid` int NOT NULL AUTO_INCREMENT,
  `cdate` datetime DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `exp_date` datetime DEFAULT NULL,
  PRIMARY KEY (`sdid`),
  KEY `pid_fk3_idx` (`pid`),
  CONSTRAINT `pid_fk3` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_details`
--

LOCK TABLES `stock_details` WRITE;
/*!40000 ALTER TABLE `stock_details` DISABLE KEYS */;
INSERT INTO `stock_details` VALUES (1,'2022-03-12 00:00:00',4,70,'2024-03-12 00:00:00'),(2,'2022-03-11 00:00:00',3,50,'2024-03-09 00:00:00'),(3,'2022-03-09 00:00:00',2,30,'2024-03-11 00:00:00'),(4,'2022-03-10 00:00:00',5,80,'2024-03-10 00:00:00'),(5,'2022-03-13 00:00:00',1,30,'2024-03-10 00:00:00');
/*!40000 ALTER TABLE `stock_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `u_desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'	mg'),(2,'	ml'),(3,'mcg or μg'),(4,'g');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `area` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `usertype` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'shweta@123','444','shweta@ganil.com','9421746155','kothrud','pune','411002','customer'),(2,'abhi@123','333','abhishek@gmail.com','7517348498','pashan','aurangabad','431005','shopper'),(3,'shivani@12','222','shivani@gmail.com','9421747770','panchavati','nashik','422004','shipper'),(4,'harsha@12','111','harsha@gmail.com','9876542345','baner','nagpur','440005','customer'),(5,'komal@123','342','komal@gmail.com','7543234566','ramdaspeth','akola','444001','customer'),(6,'shubham@123','545','shubham@gmail.com','9545654322','jatharpeth','akola','444001','customer'),(7,'nitin@123','323','nitin@gmail.com','8834234544','tilaknagar','aurangabad','431005','customer'),(8,'shivam@123','989','shivam@gmail.com','9787654545','karvenagar','pune','411002','shopper'),(9,'akshay@123','888','akshay@gmail.com','8976543455','dhantoli','nagpur','440005','shopper'),(10,'swapnil@123','978','swapnil@gmail.com','8878765456','vadgaon','pune','411002','shopper'),(11,'mahesh@123','909','mahesh@gmail.com','8787654565','pimpari','pune','411002','shopper'),(12,'shahi','444','shweta.com','9421746155','kothrud','pune','411002','customer'),(13,'','','','','','','',NULL),(14,'','','','','','','',NULL),(15,'','','','','','','',NULL),(16,'','','','','','','',NULL),(17,'fsdgsdfgd','dfsgdfg','dsfgdfg','','sdfgdfg','dsgfsdfg','fdsgdfg',NULL),(18,'sfdghdfhfdg','dsghgfdhgf','dsfgdfghsfgdh','','dsfgsdf','fdshggdh','dfghfdghfg','customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-30  8:36:52
