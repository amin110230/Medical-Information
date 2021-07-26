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

insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('1','Dhaka Medical College','DMC','DU','1946','1946','230','47',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('2','Sir Salimullah Medical College','SSMC','DU','1875','1972','230','47',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('3','Shaheed Suhrawardy Medical College','ShSMC','DU','2006','2006','200','47',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('4','Mymensingh Medical College','MMC','DU','1924','1962','230','62',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('5','Chattogram Medical College','CMC','CU','1927','1957','230','8',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('6','Rajshahi Medical College','RMC','RU','1954','1958','230','15',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('7','Sylhet MAG Osmani Medical College','SOMC','SUST','1936','1962','230','36',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('8','Sher-e-Bangla Medical College','SBMC','DU','1964','1968','230','33',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('9','Rangpur Medical College','RpMC','RU','1970','1970','230','59',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('10','Cumilla Medical College','CuMC','CU','1979','1992','180','1',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('11','Khulna Medical College','KMC','RU','1992','1992','180','27',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('12','Shaheed Ziaur Rahman Medical College','SZMC','RU','1992','1992','180','14',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('13','Bangabandhu Sheikh Mujib Medical College','BSMMC','DU','1992','1992','180','52',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('14','M Abdur Rahim Medical College','MARMC','RU','1992','1992','180','54',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('15','Pabna Medical College','PMC','RU','2008','2008','70','13',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('16','Abdul Malek Ukil Medical College','AMUMC','CU','2008','2008','70','5',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('17','Coxs Bazar Medical College','CoxMC','CU','2008','2008','70','9',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('18','Jashore Medical College','JMC','RU','2010','2010','70','20',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('19','Satkhira Medical College','SMC','RU','2011','2011','65','21',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('20','Shahid Syed Nazrul Islam Medical College','SSNIMC','DU','2011','2011','65','45',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('21','Kushtia Medical College','KuMC','RU','2011','2011','65','25',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('22','Sheikh Sayera Khatun Medical College','SSKMC','DU','2011','2011','65','51',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('23','Shaheed Tajuddin Ahmad Medical College','STAMC','DU','2013','2013','72','41',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('24','Sheikh Hasina Medical College','SHMCT','DU','2014','2014','65','44',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('25','Sheikh Hasina Medical College','SHMCJ','DU','2014','2014','65','63',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('26','Colonel Malek Medical College','CMMC','DU','2014','2014','75','46',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('27','Shaheed M. Monsur Ali Medical College','SMMAMC','RU','2014','2014','65','12',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('28','Patuakhali Medical College','PkMC','DU','2014','2014','51','31',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('29','Rangamati Medical College','RmMC','CU','2014','2014','51','4',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('30','Mugda Medical College','MuMC','DU','2015','2016','75','47',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('31','Sheikh Hasina Medical College, Habiganj','SHMCH','SUST','2018','2018','51','38',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('32','Netrokona Medical College, Netrokona','NMC','DU','2018','2018','50','64',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('33','Nilphamari Medical College','NpMC','RU','2018','2018','50','56',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('34','Magura Medical College','MaMC','RU','2018','2018','50','26',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('35','Naogaon Medical College','NaMC','RU','2018','2018','50','19',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('36','Chandpur Medical College','ChMC','CU','2018','2018','50','6',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('37','Bangabandhu Medical College','BBMC','SUST','2020','2021','50','39',NULL,'1');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('38','Armed Forces Medical College','AFMC','BUP','1999','1999','125','47',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('39','Army Medical College Bogra','AMCB','BUP','2014','2014','50','14',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('40','Army Medical College, Chittagong','AMCC','BUP','2014','2014','50','8',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('41','Army Medical College Cumilla','AMCCu','BUP','2014','2014','50','1',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('42','Army Medical College, Jessore','AMCJ','BUP','2014','2014','50','20',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('43','Rangpur Army Medical College','RAMC','BUP','2014','2014','50','59',NULL,'2');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('44','Dhaka National Medical College','DNMC','DU','1925','1994','130','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('45','Ibrahim Medical College','IMC','DU','2002','2002','110','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('46','Bangladesh Medical College','BMCH','DU','1986','1986','120','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('47','Holy Family Red Crescent Medical College','HFRCMC','DU','2000','2000','130','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('48','Jahurul Islam Medical College','JIMC','DU','1992','1992','100','45',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('49','Uttara Adhunik Medical College','UAMC','DU','2007','2007','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('50','Shaheed Monsur Ali Medical College','SMAMC','DU','1994','1994','140','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('51','Enam Medical College and Hospital','EMCH','DU','2003','2003','140','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('52','Community Based Medical College','CBMCB','DU','1995','1995','125','62',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('53','Ibn Sina Medical College','ISMC','DU','1995','2005','65','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('54','Shahabuddin Medical College','SMC','DU','2003','2003','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('55','Medical College for Women & Hospital','MCW','DU','1992','1992','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('56','Z. H. Sikder Womens Medical College','ZHSWMC','DU','1992','1992','100','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('57','Kumudini Womens Medical College','KWMC','DU','2001','2001','120','44',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('58','Tairunnessa Memorial Medical College','TMMC','DU','1992','1992','100','41',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('59','Ad-din Womens Medical College','AWMC','DU','2008','2008','95','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('60','International Medical College','IMC','DU','2000','2000','120','41',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('61','Central Medical College','CEMEC','CU','2005','2005','75','1',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('62','B.G.C Trust Medical College','BGCTMC','CU','2002','2002','100','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('63','Eastern Medical College','EMC','CU','2005','2005','105','1',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('64','Islami Bank Medical College','IBMC','RU','2003','2003','75','15',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('65','Khwaja Yunus Ali Medical College','KYAMC','RU','2005','2005','95','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('66','Jalalabad Ragib-Rabeya Medical College','JRRMC','SUST','1995','1995','175','36',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('67','East West Medical College','EWMCH','DU','2000','2000','120','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('68','North East Medical College','NEMC','SUST','1997','1997','120','36',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('69','Institute of Applied Health Sciences','IAHS','University of Science and Technology Chittagong(US','1989','1989','75','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('70','Gonoshasthaya Samaj Vittik Medical College','GSVMC','DU','1998','1998','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('71','Chattagram Maa-O-Shishu Hospital Medical College','CMOSHMC','CU','2005','2005','110','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('72','T.M.S.S. Medical College','TMC','RU','2008','2008','150','14',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('73','Prime Medical College','PMC','RU','2008','2008','125','59',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('74','North Bengal Medical College','NBMC','RU','2000','2000','85','12',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('75','Rangpur Community Medical College','RCMC','RU','2001','2008','125','59',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('76','Delta Medical College','DLMC','DU','2006','2006','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('77','Southern Medical College','SMCH','CU','2006','2006','95','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('78','Anwer Khan Modern Medical College','AKMMC','DU','2008','2008','120','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('79','Ad-din Sakina Medical College','ASMC','RU','2012','2012','65','20',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('80','Popular Medical College','PMC','DU','2010','2010','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('81','Green Life Medical College','GMCH','DU','2010','2010','100','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('82','Dhaka Community Medical College','DCMC','DU','2008','2008','100','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('83','Northern Private Medical College','NPMC','RU','2001','2001','70','59',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('84','Sylhet Womens Medical College','SWMC','SUST','2005','2005','100','36',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('85','Monno Medical College','MoMC','DU','2002','2002','80','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('86','MH Samorita Medical College','MHSMC','DU','2010','2010','110','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('87','City Medical College','CiMC','DU','2011','2011','80','41',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('88','Marks Medical College','MarksMC','DU','2011','2011','70','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('89','Diabetic Association Medical College','DAMC','DU','2010','2010','80','52',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('90','Barind Medical College','BMC','RU','2011','2011','100','15',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('91','Gazi Medical College','GMC','RU','2011','2011','90','27',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('92','Northern International Medical College','NIMC','DU','2005','2005','75','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('93','Dhaka Central International Medical College','DCIMC','DU','2011','2011','90','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('94','Dr. Sirajul Islam Medical College','SIMC','DU','2011','2011','100','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('95','Mainamoti Medical College','MMCH','CU','2011','2011','100','1',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('96','CARe Medical College','CAReMC','DU','2014','2014','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('97','Bikrampur Bhuiyans Medical College','BBMC','DU','2014','2014','50','48',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('98','Universal Medical College','UMC','DU','2014','2014','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('99','Ashiyan Medical College','AMC','DU','2012','2012','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('100','US-Bangla Medical College','USBMC','DU','2013','2015','60','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('101','President Abdul Hamid Medical College','PAHMC','DU','2013','2013','70','45',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('102','Brahmanbaria Medical College','BBMC','CU','2010','2013','50','3',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('103','Parkview Medical College','PMC','SUST','2013','2013','50','36',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('104','Ad-Din Akij Medical College','AAMC','RU','2013','2013','50','27',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('105','Shah Mokhdum Medical College(Black list by MOHFW)','SMMC','RU','2012','2012','50','15',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('106','Monowara Sikder Medical College','MSMC','DU','2015','2016','50','42',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('107','Bashundhara Ad-din Medical College','BAMC','DU','2014','2014','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('108','Aichi Medical College','AIMC','DU','2013','2013','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('109','Marine City Medical College','MCMC','CU','2014','2014','50','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('110','Khulna City Medical College','KCMC','RU','2013','2016','50','27',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('111','Chattagram International Medical College','CIMCH','CU','2013','2013','50','8',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('112','Nightingale Medical College (Black list by MOHFW)','NMC','DU','2006','2006','85','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('113','United Medical College','UnMC','DU','2020','2020','50','47',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('114','South Apollo Medical College','SAMC','DU','2018','2021','50','33',NULL,'3');
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`, `type_id`) values('115','Ahsania Mission Medical College','AMMC','DU','2021','2021','50','47',NULL,'3');


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
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `institutions`
--
ALTER TABLE `institutions`
  ADD CONSTRAINT `institutions_ibfk_2` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `institutions_fk_types` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
