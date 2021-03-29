<?php

include_once './MySqlDB.php';

$db = new MySqlDB();
$tablaNeve = "todo";
$ertekek = htmlspecialchars($_GET['nev'])+","+htmlspecialchars($_GET['datum']);
$oszlopok = "todo, datum";

$db->ujRekord($tablaNeve, $oszlopok, $ertekek);
?>