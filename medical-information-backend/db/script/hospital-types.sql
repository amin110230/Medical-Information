SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medical_information`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital-types`
--

CREATE TABLE `hospital-types` (
  `id` int(2) NOT NULL,
  `name` varchar(25) NOT NULL,
  `bn_name` varchar(25) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospital-types`
--

insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('1','Chest Disease','বক্ষব্যাধি','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('2','College','কলেজ','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('3','District','জেলা','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('4','Specialized','বিশেষায়িত','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('5','Trauma','ট্রমা','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('6','University','বিশ্ববিদ্যালয়','description needed');
insert into `hospital-types` (`id`, `name`, `bn_name`, `description`) values('7','Upazila','উপজেলা','description needed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospital-types`
--
ALTER TABLE `hospital-types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospital-types`
--
ALTER TABLE `hospital-types`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
