function checkFormular() {
    var bol = true;
    var info = "";
    
    if (document.getElementById("create").name.value.length < 4) {
        info += "name must contain at least 4 characters\n\n";
        document.getElementById("create").name.focus();
        bol = false;
    }
    
    if (document.getElementById("create").adress.value.length < 5) {
        info += "adress must contain at least 5 characters\n\n";
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
        info += "Only numbers for zip code allowed\n\n";
        document.getElementById("create").zip.focus();
        bol = false;
    }
    
    if (document.getElementById("create").land.selectedIndex === 0){
        info += "Choose a country\n\n";
        bol = false;
    }
    
    if (document.getElementById("create").cuisine.selectedIndex === 0){
        info += "Choose a cuisine\n\n";
        bol = false;
    }
    
    if (info.length !== 0) {
        alert(info);
    }
    return bol;
}