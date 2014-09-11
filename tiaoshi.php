<?php
	$name = $_POST["name"];
	$duifang = $_POST["duifang"];
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("weiliao", $con);

$result = mysql_query("SELECT * FROM ".$name."");
while($row = mysql_fetch_array($result))
  {
	if($row["name"] == $duifang){
		$mm = $row["state"];
		echo json_encode($mm);
		return;
	}

  }

mysql_close($con);
?>