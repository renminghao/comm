<?php
header("Content-Type: text/html; charset=utf-8"); 
	$name = $_POST["friendname"];
	$information = Array();
	$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("weiliao", $con);

	mysql_query("SET NAMES UTF8");
	$result = mysql_query("SELECT * FROM user");

	while($row = mysql_fetch_array($result))
	  {
		  if($row['username'] == $name ){
		  	$information[0] = $name;
		  	$information[1] = $row['photo'];
		 	 echo json_encode($information);
		 	return;
		 }
	  }
	echo json_encode("false");
	return;
	mysql_close($con);
?>