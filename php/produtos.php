<?php
    $servidor = "localhost";
    $usuario = "root";  
    $senha = "";
    $bancodados= "fullstackeletro";

	$conexao = mysqli_connect($servidor, $usuario, $senha, $bancodados);

?>


<?php

	$result = $conexao->query("SELECT * FROM produto");
	// $produto = array();

	while($rows = $result->fetch_assoc()){
		// $produto[] = $rows;

		echo json_encode($rows);
	}
	
	header("Access-Control-Allow-Origin:*");
	// echo json_encode($result->fetch_assoc());

?>
