<!DOCTYPE html>
<html>
    <head>
        <title>Todo - Barsi Péter</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="stilus.css" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="feldolgoz.js" type="text/javascript"></script>
    </head>
    <body>
        <main>
            <div id="cim">Teendők</div>
            <div id="lista">
                <div id="alcim">TODO lista</div>
                <button id="btnBetolt">Betolt</button>
                <div id="input">
                    <input type="text" id="todonev" name="todonev" placeholder="Teendő neve">
                    <input type="date" id="vegIdo" name="vegIdo">
                    <input type="submit" value="add" id="add" name="add">
                </div>
                <ul id="elemlista">
                </ul>
                <div id="sajatnev">Barsi Péter</div>
            </div>
        </main>
    </body>
</html>
