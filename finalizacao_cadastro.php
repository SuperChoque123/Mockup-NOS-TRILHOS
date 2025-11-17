<?php
include 'db.php';
session_start();
if(!isset($_SESSION['id'])){
  header("location: loginfaca.php");
  exit();
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro Efetuado </title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>

    <div class="topo2">
      NOS TRILHOS   
      </div>

      <div class="mensagem_sucesso">
        <h2>Cadastro realizado com sucesso!</h2>
        <p>Seu cadastro foi efetuado com sucesso. Agora o usuario pode fazer login na plataforma.</p>
        <a href="dashboard.php" class="botao_login">Ir ao Dashboard</a>
      </div>
    
    <style>
        .botao_login{
  background-color: #003366;
  color: white;
  padding: 12px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 20%;
  text-decoration: transparent;
}
    </style>
      
</body>
</html>
