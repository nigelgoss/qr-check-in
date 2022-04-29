<?php

require_once('env.php');

try {
	
	$conn = new PDO('sqlsrv:server='.DB_HOST.'; Database='.DB_DATABASE, DB_USERNAME, DB_PASSWORD);  
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
	
} catch(Exception $e) {
	
	die( print_r( $e->getMessage() ) );
	
}

?>
