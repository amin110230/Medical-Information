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
-- Table structure for table `hospitals`
--

create table `hospitals` (
	`id` int (11),
	`name` varchar (135),
	`number_of_bed` int (11),
	`district_id` int(2),
	`type_id` int(2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitals`
--

insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('1','Dhaka Medical College Hospital','1700','47','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('2','Chittagong Medical College Hospital','1010','8','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('3','MAG Osmani Medical College Hospital','900','36','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('4','Mymensingh Medical College Hospital','800','62','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('5','Sher-e-Bangla Medical College Hospital','600','33','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('6','Sir Salimullh Medical College Hospital','600','47','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('7','Rajshahi Medical College Hospital','550','15','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('8','Rangpur Medical College Hospital','1000','59','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('9','Bogra Medical College Hospital','500','14','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('10','Shahid Sohorawardi medical college & hospital','375','47','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('11','Comilla Medical College Hospital','500','1','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('12','Faridpur Medical College Hospital','250','52','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('13','Khulna Medical College Hospital','500','27','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('14','Dinajpur Medical College Hospital','250','54','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('15','Bagerhat Sadar hospital','100','28','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('16','Bandarban Sadar hospital','100','11','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('17','Barguna Sadar hospital','100','35','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('18','General Hospital','100','33','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('19','Bhola Sadar hospital','100','34','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('20','250 bed Mohammad Ali Hospital, Bogra','250','14','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('21','Brahmanbaria Sadar Hospital','250','3','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('22','Chandpur Sadar hospital','200','6','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('23','Chapai Nowabganj Sadar hospital','100','18','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('24','Chittagong General Hospital','150','8','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('25','Chuadanga Sadar hospital','100','24','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('26','General Hospital','100','1','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('27','Adhunic Sadar Hospital, Coxs Bazar','250','9','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('28','Dinajpur Sadar Hospital','250','54','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('29','General Hospital','100','52','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('30','Feni Sadar Hospital','250','2','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('31','Gaibanda Sadar hospital','100','57','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('32','Gazipur Sadar Hospital','100','41','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('33','Gopalganj Sadar Hospital','250','51','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('34','Hobiganj Sadar hospital','100','38','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('35','Jamalpur Sadar Hospital','250','63','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('36','Jessore Sadar hospital','250','20','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('37','Jhalokhati Sadar hospital','100','30','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('38','Jhenaidah Sadar hospital','100','29','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('39','Joypurhat Sadar hospital','100','17','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('40','Adhunic Zilla Sadar hospital, Khagrachari','100','10','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('41','Khulna General Hospital','150','27','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('42','Kishoreganj Sadar Hospital','250','45','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('43','Kurigram Sadar hospital','100','60','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('44','Kushtia Sadar hospital','250','25','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('45','Lalmonirhat Sadar hospital','100','55','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('46','Laxmipur Sadar Hospital','100','7','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('47','Madaripur Sadar Hospital','100','50','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('48','Magura Sadar hospital','100','26','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('49','Manikganj Sadar Hospital','100','46','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('50','Meherpur Sadar hospital','100','22','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('51','Moulovi Bazar Sadar hospital','250','37','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('52','Munshiganj Sadar Hospital','100','48','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('53','Naogaon Sadar hospital','100','19','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('54','Narail Sadar hospital','100','23','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('55','Narayanganj General Hospital','200','43','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('56','Narayanganj Sadar Hospitall','100','43','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('57','Narshindi Zilla Hospital','100','40','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('58','Narshindi Sadar Hospital','100','40','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('59','Natore Sadar hospital','100','16','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('60','Netrokona Sadar Hospital','100','64','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('61','Nilphamari Sadar hospital','100','56','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('62','Noakhali General Hospital','250','5','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('63','Pabna Sadar hospital','250','13','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('64','Panchagar Sadar hospital','100','53','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('65','Patuakhali Sadar hospital','250','31','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('66','Pirojpur Sadar hospital','100','32','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('67','Rajbari Sadar Hospital','100','49','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('68','Rangamati General Hospital','100','4','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('69','Satkhira Sadar hospital','100','21','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('70','Shariatpur Sadar Hospital','100','42','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('71','Sherpur Sadar Hospital','100','61','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('72','Serajgonj General Hospital','100','12','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('73','Sunamganj Sadar hospital','250','39','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('74','Sylhet Sadar Hospital','100','36','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('75','Tangail Sadar Hospital','250','44','1');
insert into `hospitals` (`id`, `name`, `number_of_bed`, `district_id`, `type_id`) values('76','Thakorgaon Sadar hospital','100','58','1');



--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_id` (`district_id`);
  ADD KEY `type_id` (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD CONSTRAINT `hospitals_fk_districts` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `hospitals_fk_types` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
