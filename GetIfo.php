<?php
$tablename = $_POST["tablename"];
$arr 	   = array();
$i = 0;
$con = mysql_connect("localhost","root","");
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
	mysql_query("SET NAMES UTF8");
mysql_select_db("weiliao", $con);

$result = mysql_query("SELECT * FROM ".$tablename."");

while($row = mysql_fetch_array($result))
  {
  	array_push($arr,$row["name"],$row["contest"],$row["time"]);
  }
echo json_encode($arr);
return;
mysql_close($con);
?>