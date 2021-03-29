<?php

include_once './MySqlDB.php';

$db = new MySqlDB();
$tablaNeve = "todo";

if (isset($_GET["mind"])) {
    $db->lekerdez($tablaNeve);
} else if ($_GET['nev'] != null) {
    $ertekek = htmlspecialchars($_GET['nev']) + "," + htmlspecialchars($_GET['datum']);
    $oszlopok = "todo, datum";
    $db->ujRekord($tablaNeve, $oszlopok, $ertekek);
}
?>