<?php
    
    require 'database.php';

    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $id = $data->id;
    $name = $data->name;
    $status = $data->status;
    $date= $data->date;

    echo json_encode($request_body);
    if(isset($data)){
        if($name=="" || $status=="" || $date==""){
           console.log();
        }
    $sql = "INSERT INTO tblcm (id, name, status, date)
        VALUES (null,'$name','$status','$date')";
    	$category = mysqli_query($db,$sql);
    }
?>