<?php
	$name = $_POST["name"];
	$pass = $_POST["pass"];
	$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("weiliao", $con);

	$result = mysql_query("SELECT * FROM user");

	while($row = mysql_fetch_array($result))
	  {
		  if($row['username'] == $name ){
		 	 echo json_encode("wrong");
		 	return;
		 }
		 if(($row['photo'] != '')&&($row['username'] == '')){
		 	$id = $row['id'];
		 }
	  }
	mysql_query("SET NAMES UTF8");
	$sq="INSERT INTO user (username, pass, photo)VALUES('$name','$pass','images/none.png')";
	mysql_select_db("weiliao", $con);
	    $query = "CREATE TABLE `".$name."` (
          `id` int(11) NOT NULL auto_increment,
          `name` varchar(50) NOT NULL,
          `photo` varchar(5000000) NOT NULL,
          `state` varchar(30) NOT NULL,
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