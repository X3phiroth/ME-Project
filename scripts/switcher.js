var zahl = 1;

function bildwechsel_starten()
{
    bildwechselthread = setInterval("bildwechsel()", 3000);
    
}
function bildwechsel()
{
    zufall = ++zahl % 7 + 1;
    document.getElementById("wechselndesbild").src = "images/switcher/" + zufall + ".jpg";
}


