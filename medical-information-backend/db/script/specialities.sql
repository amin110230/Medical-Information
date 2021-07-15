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
-- Table structure for table `specialties`
--

create table `specialties` (
	`id` int (11)  NOT NULL,
	`name` varchar (150)  NOT NULL,
	`description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `specialties`
--

insert into `specialties` (`id`, `name`, `description`) values('1','Allergy and immunology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('2','Anesthesiology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('3','Dermatology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('4','Diagnostic radiology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('5','Emergency medicine',NULL);
insert into `specialties` (`id`, `name`, `description`) values('6','Family medicine',NULL);
insert into `specialties` (`id`, `name`, `description`) values('7','Internal medicine',NULL);
insert into `specialties` (`id`, `name`, `description`) values('8','Medical genetics',NULL);
insert into `specialties` (`id`, `name`, `description`) values('9','Neurology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('10','Nuclear medicine',NULL);
insert into `specialties` (`id`, `name`, `description`) values('11','Obstetrics and gynecology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('12','Ophthalmology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('13','Pathology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('14','Pediatrics',NULL);
insert into `specialties` (`id`, `name`, `description`) values('15','Physical medicine and rehabilitation',NULL);
insert into `specialties` (`id`, `name`, `description`) values('16','Preventive medicine',NULL);
insert into `specialties` (`id`, `name`, `description`) values('17','Psychiatry',NULL);
insert into `specialties` (`id`, `name`, `description`) values('18','Radiation oncology',NULL);
insert into `specialties` (`id`, `name`, `description`) values('19','Surgery',NULL);
insert into `specialties` (`id`, `name`, `description`) values('20','Urology',NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `specialties`
--
ALTER TABLE `specialties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `specialties`
--
ALTER TABLE `specialties`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `institutions`
--

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

