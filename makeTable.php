<?php
header("Content-Type: text/html; charset=utf-8"); 
	$tablename = $_POST['tablename'];
$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("weiliao", $con);

	$result = mysql_query("SELECT * FROM user");
	mysql_query("SET NAMES UTF8");
	mysql_select_db("weiliao", $con);
	    $query = "CREATE TABLE `".$tablename."` (
          `id` int(11) NOT NULL auto_increment,
          `name` varchar(50) NOT NULL,
          `contest` varchar(5000000) NOT NULL,
          `time` varchar(50000) NOT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=gb2312 AUTO_INCREMENT=75";
	mysql_query($query,$con);
	if (!mysql_query($sq,$con)){
	  die('Error: ' . mysql_error());
	}
	else{
		echo json_encode("true");
		return;
	}
	mysql_close($con);
?>