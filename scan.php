<?php
			//读取数据目录所有的文件  
	$name = $_GET["url"];
		        function getDirfile($dir){  
			        $filelist;  
			        if (is_dir($dir)) {  
			            if ($dh = opendir($dir)) {  
			                $i = 0;  
			                while (($file = readdir($dh)) != false) {  
			                    if($file != "." && $file != ".."){  
			                        //print "filename: $file : filetype: " . filetype($dir . $file) . "/n";  
			                        $filelist[$i] = $file;  
			                        $i++;  
			                    }  
			                }  
			                closedir($dh);  
			            }  
			            return $filelist;  
			        }  
			    } 
 
   $data = $name;

   $m = getDirfile($data);

   echo  json_encode($m);

?>