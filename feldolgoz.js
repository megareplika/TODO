$(document).ready(function () {
    $("#add").click(bezur);
});


function bezur() {
    var ido = $("#vegIdo").val();
    var cim = $("#todonev").val();
    listaba(cim, ido);
    adatbazisba(cim, ido);
}


function listaba(cim, datum) {
    var HtmlLista = "<li>"
    HtmlLista+= "<div>"+cim+"</div><div>"+datum+"</div><div><input type=\"image\" src = \"kuka.jpg\" alt=\"kuka\"> <input type=\"image\" src = \"pipa.jpg\" alt=\" pipa\"></div>";
    HtmlLista+="</li>";
    $("#elemlista").append(HtmlLista);
}

function adatbazisba(cim, datum) {
    $.ajax();
    
}