-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dados212n
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `aut_codigo` int NOT NULL AUTO_INCREMENT,
  `aut_ativoinativo` char(1) DEFAULT NULL,
  `aut_nome` varchar(40) DEFAULT NULL,
  `aut_apelido` varchar(10) DEFAULT NULL,
  `aut_sexo` char(1) DEFAULT NULL,
  `aut_telefone` varchar(15) DEFAULT NULL,
  `aut_email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`aut_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'I','Fernando Chinaglia','Fernando','M','11-5205-4907','fer@hotmail.com'),(2,'A','Aguinaldo Aragon Fernandes','Aguinaldo','M','21-2568-1507','aguinaldo@ag.com.br'),(3,'A','Vladimir Ferraz de Abreu','Vladimir','M','11-2148-1437',''),(4,'I','Willian Stallings','Stallings','M','','email@gmail.com'),(5,'A','Costinha','Costinha','M','(11) 91551-5088','costinha@gmail.com'),(6,'A','Magali','Ma','F','16','Ma@gmail.com'),(7,'I','Machado de Assis','Machado','M','','machado@assis.com.br'),(8,'','Clarice Lispector','Clarice','F','(21) 94521215','oquevoce@quer.com');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banco` (
  `ban_codigo` int NOT NULL AUTO_INCREMENT,
  `ban_descricao` varchar(30) DEFAULT NULL,
  `ban_apelido` varchar(15) DEFAULT NULL,
  `ban_numero` varchar(3) DEFAULT NULL,
  `ban_ativoinativo` char(3) DEFAULT NULL,
  PRIMARY KEY (`ban_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES (1,'Caixa Econômica Federal','Caixa','104','A'),(2,'Itaú Unibanco S.A.','Itaú','341','I'),(3,'Santander Brasil S.A.','Santander','033','I'),(4,'Bradesco S.A.','Bradesco','237','I'),(5,'Banco do Brasil S.A.','Banco do Brasil','001','A'),(6,'Nu Pagamentos S.A.','Nubank','260','I'),(7,'Banco de Brasília S.A.','BRB','070','A'),(8,'Banco Teste','Teste','452','A');
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartao`
--

DROP TABLE IF EXISTS `cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartao` (
  `crt_codigo` int NOT NULL AUTO_INCREMENT,
  `crt_titular` varchar(30) DEFAULT NULL,
  `crt_descricao` varchar(15) DEFAULT NULL,
  `crt_validade` varchar(10) DEFAULT NULL,
  `crt_limite` decimal(12,2) DEFAULT NULL,
  `crt_melhordia` int DEFAULT NULL,
  `ban_codigo` int NOT NULL,
  `crt_ativoinativo` char(3) DEFAULT NULL,
  PRIMARY KEY (`crt_codigo`),
  KEY `fk_cartao_banco_idx` (`ban_codigo`),
  CONSTRAINT `fk_cartao_banco` FOREIGN KEY (`ban_codigo`) REFERENCES `banco` (`ban_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartao`
--

LOCK TABLES `cartao` WRITE;
/*!40000 ALTER TABLE `cartao` DISABLE KEYS */;
INSERT INTO `cartao` VALUES (1,'Anderson Martins','Visa','02/2022',3000.00,10,2,'A'),(2,'Fabio Bauer','Visa','02/2022',3000.00,16,1,'A'),(3,'Priscila Oliveira','Mastercard','04/2025',6000.00,5,3,'A'),(4,'Letícia de Jesus','Visa','10/2023',1000.00,20,6,'A'),(5,'Palom Nogueira','Elo','05/2024',2500.00,15,5,'I'),(6,'Ramiro Lopes','Mastercard','06/2026',5000.00,12,1,'I'),(7,'Mariana Ribeiro','Mastercard','11/2023',10000.00,25,4,'I'),(8,'Marcela Gomes','Visa','07/2026',10000.00,7,4,'I'),(9,'Josué Andrade','Elo','03/2024',2000.00,5,6,'A');
/*!40000 ALTER TABLE `cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editoras`
--

DROP TABLE IF EXISTS `editoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editoras` (
  `edt_codigo` int NOT NULL AUTO_INCREMENT,
  `edt_ativoinativo` char(1) DEFAULT NULL,
  `edt_nome` varchar(40) DEFAULT NULL,
  `edt_cidade` varchar(30) DEFAULT NULL,
  `edt_cep` char(9) DEFAULT NULL,
  `edt_estado` char(2) DEFAULT NULL,
  `edt_email` varchar(40) DEFAULT NULL,
  `edt_telefone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`edt_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editoras`
--

LOCK TABLES `editoras` WRITE;
/*!40000 ALTER TABLE `editoras` DISABLE KEYS */;
INSERT INTO `editoras` VALUES (1,'A','BRASPORT Livros e Multimídia Ltda','Rio de Janeiro','20270-280','RJ','editorial@brasport.com.br','21-2568-1415'),(2,'A','Pearson Education do Brasil','São Paulo','02712-100','SP','vendas@pearson.com','11-2178-8688'),(3,'A','Editoria Makron Books','São Paulo','05083-130','SP','editorial@mbooks.com.br','11-3641-5314'),(4,'I','Editora Ano Zero Ltda','Rio de Janeiro','22210-010','RJ','editorial@editoraanozero.com.br','11-205-4907');
/*!40000 ALTER TABLE `editoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `liv_codigo` int NOT NULL AUTO_INCREMENT,
  `liv_titulo` varchar(50) DEFAULT NULL,
  `liv_edicao` varchar(10) DEFAULT NULL,
  `liv_isbn` varchar(20) DEFAULT NULL,
  `liv_ano` decimal(10,0) DEFAULT NULL,
  `aut_codigo` int NOT NULL,
  `edt_codigo` int NOT NULL,
  `liv_ativoinativo` char(1) DEFAULT NULL,
  PRIMARY KEY (`liv_codigo`),
  KEY `fk_livros_autores_idx` (`aut_codigo`),
  KEY `fk_livros_editoras_idx` (`edt_codigo`),
  CONSTRAINT `fk_livros_autores` FOREIGN KEY (`aut_codigo`) REFERENCES `autores` (`aut_codigo`),
  CONSTRAINT `fk_livros_editoras` FOREIGN KEY (`edt_codigo`) REFERENCES `editoras` (`edt_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (1,'Dominando o Delphi 7 - A Biblia','1ª Edição','853-46-1408-3',2001,3,1,'A'),(2,'Arquitetura e Organização de Computadores ','8ª Edição','978-85-7605-564-8',2010,2,1,'A'),(3,'Implantando a Governança de TI','4ª Edição','978-85-7452-658-4',2014,1,2,'A'),(4,'dBase III Plus - Master Informática','1ª Edição','84-88094-03-05',1992,4,1,'A'),(5,'Guia Mangá - Microprocessadores','1ª Edição','987-321',2016,2,3,'A'),(6,'O Amigo','23ª Edição','103-8-3762-18',2011,1,3,'I'),(7,'Manual NodeJS','1ª Edição','987-32-1008',2016,2,3,'A'),(8,'Eletrônica Digital','3a Ed','54553334',2008,3,2,'A');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usu_codigo` int NOT NULL AUTO_INCREMENT,
  `usu_nome` varchar(40) DEFAULT NULL,
  `usu_apelido` varchar(15) DEFAULT NULL,
  `usu_password` varchar(20) DEFAULT NULL,
  `usu_usuario` varchar(20) DEFAULT NULL,
  `usu_email` varchar(60) DEFAULT NULL,
  `usu_celular` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`usu_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Antonio','Neto','1234','acneto','acneto.frc@hotmail.com','16999671440'),(2,'Maria Madalena','Maria','123','mariagc','mariamada@hotmail.com','16999671525');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 10:29:01
