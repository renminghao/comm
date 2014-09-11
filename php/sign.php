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
		  	if($row['pass'] == $pass)
		 	 echo json_encode("true");
		 	return;
		 }
	  }
	mysql_close($con);
	echo json_encode("wrong");
?>