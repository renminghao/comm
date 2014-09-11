<?php
header("Content-Type: text/html; charset=utf-8"); 
$name = $_POST["url"];
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
	  	$sss = $row['photo'];
	  	echo json_encode($sss);
	  	return;
	  }
  }

mysql_close($con);
?>