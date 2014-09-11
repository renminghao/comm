<?php
	$tablename = $_POST["tablename"];
	$name 	   = $_POST["name"];
	$context   = $_POST["contest"];
	$time	   = $_POST["time"];
	$con = mysql_connect("localhost","root","");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("weiliao", $con);

	mysql_query("SET NAMES UTF8");

	$sq="INSERT INTO ".$tablename." (name, contest, time)VALUES('$name','$context','$time')";

	if (!mysql_query($sq,$con)){

	  die('Error: ' . mysql_error());

	}

	mysql_close($con);
?>