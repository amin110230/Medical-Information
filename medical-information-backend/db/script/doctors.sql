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
-- Table structure for table `doctors`
--

create table `doctors` (
	`id` int (11)  NOT NULL,
	`name` varchar (100)  NOT NULL,
	`bmdc_no` varchar (100),
	`phone` varchar (100),
	`email` VARCHAR(40),
	`address` TEXT,
	`started` int (4),
    `district_id` int (2),
    `image` LONGBLOB,
    `description` TEXT,
    `active` BIT(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `bmdc_no`, `phone`, `email`, `address`, `started`, `district_id`, `image`, `description`, `active`) VALUES
(1,'Dr x','123456', '01711123456', 'doctor@gmail.com', 'Dhaka', 2000, 1, null, 'Description', '');
-- insert into `doctors` (`id`, `name`, `abbreviation`) values(2,'MD','Doctor of Medicine');
-- insert into `doctors` (`id`, `name`, `abbreviation`) values(3,'MS','Master of Surgery');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `institutions`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_2` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

