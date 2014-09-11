<?php
$arr = array();
$i = 0;
$name = $_POST["user"];
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
	mysql_query("SET NAMES UTF8");
mysql_select_db("weiliao", $con);

$result = mysql_query("SELECT * FROM ".$name."");

while($row = mysql_fetch_array($result))
  {
  	$arr[$i] = $row['name'];
  	$i++;
  	$arr[$i] = $row['photo'];
  	$i++;
  	$arr[$i] = $row['state'];
  	$i++;
  }
echo json_encode($arr);
return;
mysql_close($con);
?>