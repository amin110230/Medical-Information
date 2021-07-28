-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 24, 2019 at 09:44 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_geo_code`
--

-- --------------------------------------------------------

--
-- Table structure for table `institutions`
--

create table `institutions` (
	`id` int (11) NOT NULL,
	`name` varchar (450) NOT NULL,
	`acronym` varchar (150) NOT NULL,
	`university` varchar (150) NOT NULL,
	`established` int (50) NOT NULL,
	`started` int (50) NOT NULL,
	`enroll` int (50) NOT NULL,
	`district_id` int (50) NOT NULL,
	`type_id` int(2),
	`url` varchar (150)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institutions`
--

insert  into `institutions`(`id`,`name`,`acronym`,`university`,`established`,`started`,`enroll`,`district_id`,`url`,`type_id`) values
(1,'Bangabandhu Sheikh Mujib Medical University','BSMMU','NA',1965,1965,0,47,'https://bsmmu.edu.bd/',1),
(2,'Chittagong Medical University','CMU','NA',2016,2016,0,8,'https://cmu.edu.bd/',1),
(3,'Rajshahi Medical University','RMU','NA',2017,2017,0,15,'https://www.rmu.edu.bd/',1),
(4,'Sylhet Medical University','SMU','NA',2017,2017,0,36,'https://www.smu.edu.bd/',1),
(5,'Sheikh Hasina Medical University','SHMU','NA',2020,2020,0,27,'\\N',1),
(6,'Dhaka Medical College','DMC','DU',1946,1946,230,47,'http://www.dmc.gov.bd',1),
(7,'Sir Salimullah Medical College','SSMC','DU',1875,1972,230,47,'http://ssmcbd.net',1),
(8,'Shaheed Suhrawardy Medical College','ShSMC','DU',2006,2006,200,47,'\\N',1),
(9,'Mymensingh Medical College','MMC','DU',1924,1962,230,62,'http://mmc.gov.bd',1),
(10,'Chattogram Medical College','CMC','CU',1927,1957,230,8,'http://cmc.gov.bd',1),
(11,'Rajshahi Medical College','RMC','RU',1954,1958,230,15,'http://rmc.gov.bd',1),
(12,'Sylhet MAG Osmani Medical College','SOMC','SUST',1936,1962,230,36,'http://magosmanimedical.com',1),
(13,'Sher-e-Bangla Medical College','SBMC','DU',1964,1968,230,33,'\\N',1),
(14,'Rangpur Medical College','RpMC','RU',1970,1970,230,59,'\\N',1),
(15,'Cumilla Medical College','CuMC','CU',1979,1992,180,1,'\\N',1),
(16,'Khulna Medical College','KMC','RU',1992,1992,180,27,'\\N',1),
(17,'Shaheed Ziaur Rahman Medical College','SZMC','RU',1992,1992,180,14,'\\N',1),
(18,'Bangabandhu Sheikh Mujib Medical College','BSMMC','DU',1992,1992,180,52,'\\N',1),
(19,'M Abdur Rahim Medical College','MARMC','RU',1992,1992,180,54,'\\N',1),
(20,'Pabna Medical College','PMC','RU',2008,2008,70,13,'\\N',1),
(21,'Abdul Malek Ukil Medical College','AMUMC','CU',2008,2008,70,5,'\\N',1),
(22,'Coxs Bazar Medical College','CoxMC','CU',2008,2008,70,9,'\\N',1),
(23,'Jashore Medical College','JMC','RU',2010,2010,70,20,'\\N',1),
(24,'Satkhira Medical College','SMC','RU',2011,2011,65,21,'\\N',1),
(25,'Shahid Syed Nazrul Islam Medical College','SSNIMC','DU',2011,2011,65,45,'\\N',1),
(26,'Kushtia Medical College','KuMC','RU',2011,2011,65,25,'\\N',1),
(27,'Sheikh Sayera Khatun Medical College','SSKMC','DU',2011,2011,65,51,'\\N',1),
(28,'Shaheed Tajuddin Ahmad Medical College','STAMC','DU',2013,2013,72,41,'\\N',1),
(29,'Sheikh Hasina Medical College','SHMCT','DU',2014,2014,65,44,'\\N',1),
(30,'Sheikh Hasina Medical College','SHMCJ','DU',2014,2014,65,63,'\\N',1),
(31,'Colonel Malek Medical College','CMMC','DU',2014,2014,75,46,'\\N',1),
(32,'Shaheed M. Monsur Ali Medical College','SMMAMC','RU',2014,2014,65,12,'\\N',1),
(33,'Patuakhali Medical College','PkMC','DU',2014,2014,51,31,'\\N',1),
(34,'Rangamati Medical College','RmMC','CU',2014,2014,51,4,'\\N',1),
(35,'Mugda Medical College','MuMC','DU',2015,2016,75,47,'\\N',1),
(36,'Sheikh Hasina Medical College, Habiganj','SHMCH','SUST',2018,2018,51,38,'\\N',1),
(37,'Netrokona Medical College, Netrokona','NMC','DU',2018,2018,50,64,'\\N',1),
(38,'Nilphamari Medical College','NpMC','RU',2018,2018,50,56,'\\N',1),
(39,'Magura Medical College','MaMC','RU',2018,2018,50,26,'\\N',1),
(40,'Naogaon Medical College','NaMC','RU',2018,2018,50,19,'\\N',1),
(41,'Chandpur Medical College','ChMC','CU',2018,2018,50,6,'\\N',1),
(42,'Bangabandhu Medical College','BBMC','SUST',2020,2021,50,39,'\\N',1),
(43,'Dhaka Dental College','DDC','DU',1961,1961,97,47,'\\N',1),
(44,'Chittagong Medical College Dental Unit','CMC','CU',1990,1990,60,8,'\\N',1),
(45,'Rajshahi Medical College Dental Unit','RMC','RU',1989,1989,59,15,'\\N',1),
(46,'Shaheed Suhrawardy Medical College Dental Unit','SShMC','DU',2011,2011,56,47,'\\N',1),
(47,'Sir Salimullah Medical College Dental Unit','SSMC','DU',2011,2011,52,47,'\\N',1),
(48,'Mymensingh Medical College Dental Unit','MMC','DU',2011,2011,52,62,'\\N',1),
(49,'MAG Osmani Medical College Dental Unit','SOMC','SUST',2011,2011,52,36,'\\N',1),
(50,'Sher-e-Bangla Medical College Dental Unit','SBMC','DU',2011,2011,52,33,'\\N',1),
(52,'Armed Forces Medical College','AFMC','BUP',1999,1999,125,47,'\\N',2),
(53,'Army Medical College Bogra','AMCB','BUP',2014,2014,50,14,'\\N',2),
(54,'Army Medical College, Chittagong','AMCC','BUP',2014,2014,50,8,'\\N',2),
(55,'Army Medical College Cumilla','AMCCu','BUP',2014,2014,50,1,'\\N',2),
(56,'Army Medical College, Jessore','AMCJ','BUP',2014,2014,50,20,'\\N',2),
(57,'Rangpur Army Medical College','RAMC','BUP',2014,2014,50,59,'\\N',2),
(58,'Dhaka National Medical College','DNMC','DU',1925,1994,130,47,'\\N',3),
(59,'Ibrahim Medical College','IMC','DU',2002,2002,110,47,'\\N',3),
(60,'Bangladesh Medical College','BMCH','DU',1986,1986,120,47,'\\N',3),
(61,'Holy Family Red Crescent Medical College','HFRCMC','DU',2000,2000,130,47,'\\N',3),
(62,'Jahurul Islam Medical College','JIMC','DU',1992,1992,100,45,'\\N',3),
(63,'Uttara Adhunik Medical College','UAMC','DU',2007,2007,90,47,'\\N',3),
(64,'Shaheed Monsur Ali Medical College','SMAMC','DU',1994,1994,140,47,'\\N',3),
(65,'Enam Medical College and Hospital','EMCH','DU',2003,2003,140,47,'\\N',3),
(66,'Community Based Medical College','CBMCB','DU',1995,1995,125,62,'\\N',3),
(67,'Ibn Sina Medical College','ISMC','DU',1995,2005,65,47,'\\N',3),
(68,'Shahabuddin Medical College','SMC','DU',2003,2003,90,47,'\\N',3),
(69,'Medical College for Women & Hospital','MCW','DU',1992,1992,90,47,'\\N',3),
(70,'Z. H. Sikder Women\'s Medical College','ZHSWMC','DU',1992,1992,100,47,'\\N',3),
(71,'Kumudini Womens Medical College','KWMC','DU',2001,2001,120,44,'\\N',3),
(72,'Tairunnessa Memorial Medical College','TMMC','DU',1992,1992,100,41,'\\N',3),
(73,'Ad-din Womens Medical College','AWMC','DU',2008,2008,95,47,'\\N',3),
(74,'International Medical College','IMC','DU',2000,2000,120,41,'\\N',3),
(75,'Central Medical College','CEMEC','CU',2005,2005,75,1,'\\N',3),
(76,'B.G.C Trust Medical College','BGCTMC','CU',2002,2002,100,8,'\\N',3),
(77,'Eastern Medical College','EMC','CU',2005,2005,105,1,'\\N',3),
(78,'Islami Bank Medical College','IBMC','RU',2003,2003,75,15,'\\N',3),
(79,'Khwaja Yunus Ali Medical College','KYAMC','RU',2005,2005,95,47,'\\N',3),
(80,'Jalalabad Ragib-Rabeya Medical College','JRRMC','SUST',1995,1995,175,36,'\\N',3),
(81,'East West Medical College','EWMCH','DU',2000,2000,120,47,'\\N',3),
(82,'North East Medical College','NEMC','SUST',1997,1997,120,36,'\\N',3),
(83,'Institute of Applied Health Sciences','IAHS','University of Science and Technology Chittagong(US',1989,1989,75,8,'\\N',3),
(84,'Gonoshasthaya Samaj Vittik Medical College','GSVMC','DU',1998,1998,50,47,'\\N',3),
(85,'Chattagram Maa-O-Shishu Hospital Medical College','CMOSHMC','CU',2005,2005,110,8,'\\N',3),
(86,'T.M.S.S. Medical College','TMC','RU',2008,2008,150,14,'\\N',3),
(87,'Prime Medical College','PMC','RU',2008,2008,125,59,'\\N',3),
(88,'North Bengal Medical College','NBMC','RU',2000,2000,85,12,'\\N',3),
(89,'Rangpur Community Medical College','RCMC','RU',2001,2008,125,59,'\\N',3),
(90,'Delta Medical College','DLMC','DU',2006,2006,90,47,'\\N',3),
(91,'Southern Medical College','SMCH','CU',2006,2006,95,8,'\\N',3),
(92,'Anwer Khan Modern Medical College','AKMMC','DU',2008,2008,120,47,'\\N',3),
(93,'Ad-din Sakina Medical College','ASMC','RU',2012,2012,65,20,'\\N',3),
(94,'Popular Medical College','PMC','DU',2010,2010,90,47,'\\N',3),
(95,'Green Life Medical College','GMCH','DU',2010,2010,100,47,'\\N',3),
(96,'Dhaka Community Medical College','DCMC','DU',2008,2008,100,47,'\\N',3),
(97,'Northern Private Medical College','NPMC','RU',2001,2001,70,59,'\\N',3),
(98,'Sylhet Womens Medical College','SWMC','SUST',2005,2005,100,36,'\\N',3),
(99,'Monno Medical College','MoMC','DU',2002,2002,80,47,'\\N',3),
(100,'MH Samorita Medical College','MHSMC','DU',2010,2010,110,47,'\\N',3),
(101,'City Medical College','CiMC','DU',2011,2011,80,41,'\\N',3),
(102,'Marks Medical College','MarksMC','DU',2011,2011,70,47,'\\N',3),
(103,'Diabetic Association Medical College','DAMC','DU',2010,2010,80,52,'\\N',3),
(104,'Barind Medical College','BMC','RU',2011,2011,100,15,'\\N',3),
(105,'Gazi Medical College','GMC','RU',2011,2011,90,27,'\\N',3),
(106,'Northern International Medical College','NIMC','DU',2005,2005,75,47,'\\N',3),
(107,'Dhaka Central International Medical College','DCIMC','DU',2011,2011,90,47,'\\N',3),
(108,'Dr. Sirajul Islam Medical College','SIMC','DU',2011,2011,100,47,'\\N',3),
(109,'Mainamoti Medical College','MMCH','CU',2011,2011,100,1,'\\N',3),
(110,'CARe Medical College','CAReMC','DU',2014,2014,50,47,'\\N',3),
(111,'Bikrampur Bhuiyans Medical College','BBMC','DU',2014,2014,50,48,'\\N',3),
(112,'Universal Medical College','UMC','DU',2014,2014,50,47,'\\N',3),
(113,'Ashiyan Medical College','AMC','DU',2012,2012,50,47,'\\N',3),
(114,'US-Bangla Medical College','USBMC','DU',2013,2015,60,47,'\\N',3),
(115,'President Abdul Hamid Medical College','PAHMC','DU',2013,2013,70,45,'\\N',3),
(116,'Brahmanbaria Medical College','BBMC','CU',2010,2013,50,3,'\\N',3),
(117,'Parkview Medical College','PMC','SUST',2013,2013,50,36,'\\N',3),
(118,'Ad-Din Akij Medical College','AAMC','RU',2013,2013,50,27,'\\N',3),
(119,'Shah Mokhdum Medical College(Black list by MOHFW)','SMMC','RU',2012,2012,50,15,'\\N',3),
(120,'Monowara Sikder Medical College','MSMC','DU',2015,2016,50,42,'\\N',3),
(121,'Bashundhara Ad-din Medical College','BAMC','DU',2014,2014,50,47,'\\N',3),
(122,'Aichi Medical College','AIMC','DU',2013,2013,50,47,'\\N',3),
(123,'Marine City Medical College','MCMC','CU',2014,2014,50,8,'\\N',3),
(124,'Khulna City Medical College','KCMC','RU',2013,2016,50,27,'\\N',3),
(125,'Chattagram International Medical College','CIMCH','CU',2013,2013,50,8,'\\N',3),
(126,'Nightingale Medical College (Black list by MOHFW)','NMC','DU',2006,2006,85,47,'\\N',3),
(127,'United Medical College','UnMC','DU',2020,2020,50,47,'\\N',3),
(128,'South Apollo Medical College','SAMC','DU',2018,2021,50,33,'\\N',3),
(129,'Ahsania Mission Medical College','AMMC','DU',2021,2021,50,47,'\\N',3),
(130,'University Dental College','UDC','DU',1995,1995,0,47,'\\N',3),
(131,'City Dental College','CDC','DU',1996,1996,0,47,'\\N',3),
(132,'Pioneer Dental College','PDC','DU',1995,1995,0,47,'\\N',3),
(133,'Sapporo Dental College','SDC','DU',1993,2000,0,47,'\\N',3),
(134,'Bangladesh Dental College','BDC','DU',1986,1996,0,47,'\\N',3),
(135,'Chattagram International Dental College','CIDC','CU',2003,2003,0,8,'\\N',3),
(136,'Rangpur Dental College','RDC','RU',2001,2001,0,59,'\\N',3),
(137,'Update Dental College','UpDC','DU',2008,2008,0,47,'\\N',3),
(138,'Marks Dental College','MDC','DU',2008,2008,0,47,'\\N',3),
(139,'Saphena Womens Dental College','SWDC','DU',2010,2010,0,47,'\\N',3),
(140,'Mandy Dental College','MDC','DU',2008,2008,0,47,'\\N',3),
(141,'Udayan Dental College','UdDC','RU',2008,2009,0,15,'\\N',3),
(142,'TMSS Medical College Dental Unit','TMCDU','RU',2008,2012,0,14,'\\N',3),
(143,'MH Samorita Medical College & Dental Unit','MHSMCDU','DU',2010,2010,0,47,'\\N',3),
(144,'Kumudini Womens Medical College, Dental Unit','KWMCDU','DU',2011,2001,0,47,'\\N',3),
(145,'Holy Family Red Cresect Medical College Dental Unit','HFRCMCDU','DU',2013,2013,0,47,'\\N',3),
(146,'Gonoshasthaya Samajvittik Samaj Vittik Dental College','GSVMCDU','DU',1998,1998,0,47,'\\N',3),
(147,'Ibrahim Medical College, Dental Unit','IMCDU','DU',2015,2015,0,47,'\\N',3),
(148,'Dhaka Community Medical College Hospital And Dental Unit','DCMCDU','DU',2015,2015,0,47,'\\N',3),
(149,'Delta Medical College & Hospital Dental Unit','DLMCDU','DU',2015,2015,0,47,'\\N',3),
(150,'Community Based Medical College, Bangladesh Dental Unit','CBMCDU','DU',2015,2015,0,47,'\\N',3),
(151,'Dhaka National Medical College Dental Unit','DNMCDU','DU',2015,2015,0,47,'\\N',3),
(152,'Islami Bank Medical College Dental Unit','IBMCDU','DU',2015,2015,0,47,'\\N',3),
(153,'Sylhet Central Dental College & General Hospital','SCDC','DU',2015,2015,0,47,'\\N',3),
(154,'Khawja Eunus Ali Medical College Dental Unit','KEAMCDU','DU',2015,2015,0,47,'\\N',3),
(155,'North East Medical College Dental Unit','NEMCDU','DU',2015,2015,0,47,'\\N',3);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `institutions`
--
ALTER TABLE `institutions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_id` (`district_id`);
  ADD KEY `type_id` (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `institutions`
--
ALTER TABLE `institutions`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `institutions`
--
ALTER TABLE `institutions`
  ADD CONSTRAINT `institutions_fk_districts` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `institutions_fk_types` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
