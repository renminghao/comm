<?php
header("Content-Type: text/html; charset=utf-8"); 
	$photo = $_POST["num"];
	$name = $_POST["name"];
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_query("SET NAMES UTF8");
mysql_select_db("weiliao", $con);

mysql_query("UPDATE user SET photo = '$photo' WHERE username = '$name'");

mysql_close($con);
?>