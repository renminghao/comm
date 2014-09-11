<?php
	$name = $_POST["name"];
	$photo = $_POST["photo"];
	$fri = $_POST['fri'];
	$con = mysql_connect("localhost","root","");
	if (!$con){
	  die('Could not connect: ' . mysql_error());
	  }
	mysql_select_db("weiliao", $con);
	mysql_query("SET NAMES UTF8");
	$sq="INSERT INTO ".$name." (name, photo,state)VALUES('$fri','$photo','0')";
	if (!mysql_query($sq,$con)){
	  die('Error: ' . mysql_error());
	}
	else{
		echo json_encode("true");
		return;
	}
	mysql_close($con);
?>