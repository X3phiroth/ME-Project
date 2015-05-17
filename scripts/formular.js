function checkFormular() {
    var bol = true;
    var info = "";
    
    if (document.getElementById("create").name.value.length < 4) {
        info += "name must contain at least 4 characters\n";
        document.getElementById("create").name.focus();
        bol = false;
    }
    
    if (document.getElementById("create").adress.value.length < 5) {
        info += "adress must contain at least 5 characters\n";
        document.getElementById("create").adress.focus();
        bol = false;
    }
    
    var check = 0;
    for (i = 0; i < document.getElementById("create").zip.value.length; ++i) {
        if (document.getElementById("create").zip.value.charAt(i) < "0" || document.getElementById("create").zip.value.charAt(i) > "9") {
            check = 1;
            break;
        }
    }
    if (check === 1) {
        alert("Only numbers for zip code allowed");
        document.getElementById("create").zip.focus();
        bol = false;
    }
    return bol;
}