<?php

include_once './MySqlDB.php';

$db = new MySqlDB();
$tablaNeve = "todo";
$szuro = "todo ="+$_GET["nev"];

$db ->torol($tablaNeve, $szuro);
?>