$(document).ready(function () {
    $("#add").click(bezur);
    $("#elemlista").delegate("li .torol", torol);
    $("#elemlista").delegate("li .kesz", torol);
});


function bezur() {
    var ido = $("#vegIdo").val();
    var cim = $("#todonev").val();
    listaba(cim, ido);
    adatbazisba(cim, ido);
}


function listaba(cim, datum) {
    var HtmlLista = "<li>"
    HtmlLista += "<div>" + cim + "</div><div>" + datum + "</div><div><input class =\"torol\" type=\"image\" src = \"kuka.jpg\" alt=\"kuka\"> <input class =\"kesz\" type=\"image\" src = \"pipa.jpg\" alt=\" pipa\"></div>";
    HtmlLista += "</li>";
    $("#elemlista").append(HtmlLista);
}

function adatbazisba(cim, datum) {
    $.ajax({
        type: 'GET',
        url: "feldolgoz.php?nev=" + cim + "datum=" + datum,
        success: function (result) {
            alert("sikeres beszuras");
        },
        error: function () {
            alert("Nemsikerült felvinni");
        }
    });
}

function torol() {
    let cim = $("#todonev").val();
    $.ajax({
        type: 'GET',
        url: "feldolgoz.php?nev=" + cim,
        success: function (result) {
            alert("sikeres törlés");
        },
        error: function () {
            alert("Nemsikerült a törlés");
        }
    });
}