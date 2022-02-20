<?php
// http://localhost/autenticacao.php?email=usuario@gmail.com&senha=123456

header("Access-Control-Allow-Origin: *");

$email = $_GET['email'];
$senha = $_GET['senha'];

$status = false;

if($email == 'usuario@gmail.com' && $senha == '123456') {
    $status = true;
}

$arr = array('logado'=>$status);
echo json_encode($arr);
?>