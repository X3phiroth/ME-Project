var zahl = 1;

function bildwechsel_starten()
{
    bildwechselthread = setInterval("bildwechsel()", 1000);
    
}
function bildwechsel()
{
    zufall = ++zahl % 7 + 1;
    document.getElementById("wechselndesbild").src = "images/switcher/" + zufall + ".jpg";
}


