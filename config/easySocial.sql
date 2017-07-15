

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `register` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) ,
  `email` varchar(25) ,
  `password` varchar(40) ,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `subscriber` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


