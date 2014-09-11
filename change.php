<?php
	$tablename = $_POST["tablename"];
	$name = $_POST["name"];
	$duifang = $_POST["duifang"];
	$tab = $_POST["tab"];
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("weiliao", $con);

mysql_query("UPDATE ".$duifang." SET state = '".$tablename."' WHERE name = '".$name."'");

mysql_close($con);
?>