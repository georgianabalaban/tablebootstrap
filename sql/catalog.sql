SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `intrariDB`
--
CREATE DATABASE `intrariDB` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `intrariDB`;

-- --------------------------------------------------------

--
-- Table structure for table `intrari`
--

CREATE TABLE IF NOT EXISTS `intraris` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `nr_intrare` varchar(30) DEFAULT NULL,
  `data_intrare` date,
  `furnizori` varchar(100) DEFAULT NULL,
  `nr_factura` varchar(100) DEFAULT NULL,
  `data_factura` date,
  `model_document` varchar(100) DEFAULT NULL,
  `data_scadenta` date,
  `valoare_totala` varchar(100) DEFAULT NULL,
  `stare_factura` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE = MYISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;




