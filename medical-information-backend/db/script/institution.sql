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
	`id` int (3) NOT NULL,
	`name` varchar (450) NOT NULL,
	`acronym` varchar (150) NOT NULL,
	`university` varchar (150) NOT NULL,
	`established` int (50) NOT NULL,
	`started` int (50) NOT NULL,
	`enroll` int (50) NOT NULL,
	`district_id` int (50) NOT NULL,
	`url` varchar (150)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institutions`
--

insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('1','Dhaka Medical College[5]','DMC','DU','1946','1946','230','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('2','Sir Salimullah Medical College[6]','SSMC','DU','1875','1972','230','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('3','Shaheed Suhrawardy Medical College[7]','ShSMC','DU','2006','2006','200','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('4','Mymensingh Medical College[8]','MMC','DU','1924','1962','230','62',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('5','Chattogram Medical College[9]','CMC','CU','1927','1957','230','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('6','Rajshahi Medical College[10]','RMC','RU','1954','1958','230','15',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('7','Sylhet MAG Osmani Medical College[11]','SOMC','SUST','1936','1962','230','36',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('8','Sher-e-Bangla Medical College[12]','SBMC','DU','1964','1968','230','33',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('9','Rangpur Medical College[13]','RpMC','RU','1970','1970','230','59',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('10','Cumilla Medical College[14]','CuMC','CU','1979','1992','180','1',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('11','Khulna Medical College[15]','KMC','RU','1992','1992','180','27',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('12','Shaheed Ziaur Rahman Medical College[16]','SZMC','RU','1992','1992','180','14',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('13','Bangabandhu Sheikh Mujib Medical College[17]','BSMMC','DU','1992','1992','180','52',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('14','M Abdur Rahim Medical College[18]','MARMC','RU','1992','1992','180','54',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('15','Pabna Medical College[19]','PMC','RU','2008','2008','70','13',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('16','Abdul Malek Ukil Medical College[20]','AMUMC','CU','2008','2008','70','5',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('17','Cox\'s Bazar Medical College[21]','CoxMC','CU','2008','2008','70','9',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('18','Jashore Medical College[22]','JMC','RU','2010','2010','70','20',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('19','Satkhira Medical College[23]','SMC','RU','2011','2011','65','21',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('20','Shahid Syed Nazrul Islam Medical College[24]','SSNIMC','DU','2011','2011','65','45',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('21','Kushtia Medical College[25]','KuMC','RU','2011','2011','65','25',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('22','Sheikh Sayera Khatun Medical College[26]','SSKMC','DU','2011','2011','65','51',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('23','Shaheed Tajuddin Ahmad Medical College[27]','STAMC','DU','2013','2013','72','41',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('24','Sheikh Hasina Medical College[28]','SHMCT','DU','2014','2014','65','44',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('25','Sheikh Hasina Medical College[29]','SHMCJ','DU','2014','2014','65','63',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('26','Colonel Malek Medical College[30]','CMMC','DU','2014','2014','75','46',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('27','Shaheed M. Monsur Ali Medical College[31]','SMMAMC','RU','2014','2014','65','12',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('28','Patuakhali Medical College[32]','PkMC','DU','2014','2014','51','31',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('29','Rangamati Medical College[33]','RmMC','CU','2014','2014','51','4',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('30','Mugda Medical College[34]','MuMC','DU','2015','2016','75','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('31','Sheikh Hasina Medical College, Habiganj[35]','SHMCH','SUST','2018','2018','51','38',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('32','Netrokona Medical College, Netrokona[36]','NMC','DU','2018','2018','50','64',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('33','Nilphamari Medical College[37]','NpMC','RU','2018','2018','50','56',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('34','Magura Medical College[38]','MaMC','RU','2018','2018','50','26',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('35','Naogaon Medical College[39]','NaMC','RU','2018','2018','50','19',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('36','Chandpur Medical College[40]','ChMC','CU','2018','2018','50','6',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('37','Bangabandhu Medical College','BBMC','SUST','2020','2021','50','39',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('38','Armed Forces Medical College[41]','AFMC','BUP','1999','1999','125','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('39','Army Medical College Bogra','AMCB','BUP','2014','2014','50','14',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('40','Army Medical College, Chittagong','AMCC','BUP','2014','2014','50','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('41','Army Medical College Cumilla','AMCCu','BUP','2014','2014','50','1',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('42','Army Medical College, Jessore','AMCJ','BUP','2014','2014','50','20',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('43','Rangpur Army Medical College','RAMC','BUP','2014','2014','50','59',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('44','Dhaka National Medical College[42]','DNMC','DU','1925','1994','130','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('45','Ibrahim Medical College[43]','IMC','DU','2002','2002','110','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('46','Bangladesh Medical College[44]','BMCH','DU','1986','1986','120','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('47','Holy Family Red Crescent Medical College[45]','HFRCMC','DU','2000','2000','130','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('48','Jahurul Islam Medical College[46]','JIMC','DU','1992','1992','100','45',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('49','Uttara Adhunik Medical College[47]','UAMC','DU','2007','2007','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('50','Shaheed Monsur Ali Medical College[48]','SMAMC','DU','1994','1994','140','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('51','Enam Medical College and Hospital[49]','EMCH','DU','2003','2003','140','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('52','Community Based Medical College[50]','CBMCB','DU','1995','1995','125','62',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('53','Ibn Sina Medical College[51]','ISMC','DU','1995','2005','65','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('54','Shahabuddin Medical College[52]','SMC','DU','2003','2003','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('55','Medical College for Women & Hospital[53]','MCW','DU','1992','1992','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('56','Z. H. Sikder Women\'s Medical College[54]','ZHSWMC','DU','1992','1992','100','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('57','Kumudini Women\'s Medical College[55]','KWMC','DU','2001','2001','120','44',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('58','Tairunnessa Memorial Medical College[56]','TMMC','DU','1992','1992','100','41',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('59','Ad-din Women\'s Medical College[57]','AWMC','DU','2008','2008','95','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('60','International Medical College[58]','IMC','DU','2000','2000','120','41',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('61','Central Medical College[59]','CEMEC','CU','2005','2005','75','1',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('62','B.G.C Trust Medical College[60]','BGCTMC','CU','2002','2002','100','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('63','Eastern Medical College[61]','EMC','CU','2005','2005','105','1',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('64','Islami Bank Medical College[62]','IBMC','RU','2003','2003','75','15',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('65','Khwaja Yunus Ali Medical College[63]','KYAMC','RU','2005','2005','95','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('66','Jalalabad Ragib-Rabeya Medical College[64]','JRRMC','SUST','1995','1995','175','36',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('67','East West Medical College[65]','EWMCH','DU','2000','2000','120','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('68','North East Medical College[66]','NEMC','SUST','1997','1997','120','36',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('69','Institute of Applied Health Sciences[67]','IAHS','University of Science and Technology Chittagong(US','1989','1989','75','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('70','Gonoshasthaya Samaj Vittik Medical College[68]','GSVMC','DU','1998','1998','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('71','Chattagram Maa-O-Shishu Hospital Medical College[6','CMOSHMC','CU','2005','2005','110','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('72','T.M.S.S. Medical College[70]','TMC','RU','2008','2008','150','14',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('73','Prime Medical College[71]','PMC','RU','2008','2008','125','59',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('74','North Bengal Medical College[72]','NBMC','RU','2000','2000','85','12',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('75','Rangpur Community Medical College[73]','RCMC','RU','2001','2008','125','59',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('76','Delta Medical College[74]','DLMC','DU','2006','2006','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('77','Southern Medical College[75]','SMCH','CU','2006','2006','95','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('78','Anwer Khan Modern Medical College[76]','AKMMC','DU','2008','2008','120','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('79','Ad-din Sakina Medical College[77]','ASMC','RU','2012','2012','65','20',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('80','Popular Medical College[78]','PMC','DU','2010','2010','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('81','Green Life Medical College[79]','GMCH','DU','2010','2010','100','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('82','Dhaka Community Medical College[80]','DCMC','DU','2008','2008','100','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('83','Northern Private Medical College[81]','NPMC','RU','2001','2001','70','59',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('84','Sylhet Women\'s Medical College[82]','SWMC','SUST','2005','2005','100','36',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('85','Monno Medical College[83]','MoMC','DU','2002','2002','80','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('86','MH Samorita Medical College[84]','MHSMC','DU','2010','2010','110','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('87','City Medical College[85]','CiMC','DU','2011','2011','80','41',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('88','Marks Medical College[86]','MarksMC','DU','2011','2011','70','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('89','Diabetic Association Medical College[87]','DAMC','DU','2010','2010','80','52',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('90','Barind Medical College[88]','BMC','RU','2011','2011','100','15',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('91','Gazi Medical College[89]','GMC','RU','2011','2011','90','27',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('92','Northern International Medical College[90]','NIMC','DU','2005','2005','75','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('93','Dhaka Central International Medical College[91]','DCIMC','DU','2011','2011','90','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('94','Dr. Sirajul Islam Medical College[92]','SIMC','DU','2011','2011','100','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('95','Mainamoti Medical College[93]','MMCH','CU','2011','2011','100','1',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('96','CARe Medical College[94]','CAReMC','DU','2014','2014','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('97','Bikrampur Bhuiyans Medical College[95]','BBMC','DU','2014','2014','50','48',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('98','Universal Medical College[95]','UMC','DU','2014','2014','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('99','Ashiyan Medical College[96]','AMC','DU','2012','2012','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('100','US-Bangla Medical College[97]','USBMC','DU','2013','2015','60','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('101','President Abdul Hamid Medical College','PAHMC','DU','2013','2013','70','45',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('102','Brahmanbaria Medical College[98]','BBMC','CU','2010','2013','50','3',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('103','Parkview Medical College','PMC','SUST','2013','2013','50','36',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('104','Ad-Din Akij Medical College','AAMC','RU','2013','2013','50','27',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('105','Shah Mokhdum Medical College(Black list by MOHFW)','SMMC','RU','2012','2012','50','15',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('106','Monowara Sikder Medical College','MSMC','DU','2015','2016','50','42',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('107','Bashundhara Ad-din Medical College','BAMC','DU','2014','2014','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('108','Aichi Medical College','AIMC','DU','2013','2013','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('109','Marine City Medical College','MCMC','CU','2014','2014','50','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('110','Khulna City Medical College','KCMC','RU','2013','2016','50','27',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('111','Chattagram International Medical College','CIMCH','CU','2013','2013','50','8',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('112','Nightingale Medical College (Black list by MOHFW)','NMC','DU','2006','2006','85','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('113','United Medical College','UnMC','DU','2020','2020','50','47',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('114','South Apollo Medical College','SAMC','DU','2018','2021','50','33',NULL);
insert into `institutions` (`id`, `name`, `acronym`, `university`, `established`, `started`, `enroll`, `district_id`, `url`) values('115','Ahsania Mission Medical College','AMMC','DU','2021','2021','50','47',NULL);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `institutions`
--
ALTER TABLE `institutions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_id_id` (`district_id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
