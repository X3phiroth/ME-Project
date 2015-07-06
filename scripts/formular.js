/*
 * Complete Code in jQuery
 */

/**
 * Adding all Event Listeners
 * 
 * @returns {None}
 */
window.onload = function() {
        document.getElementById('create').name.addEventListener('focus', nameCheck);
        document.getElementById('create').name.addEventListener('input', nameCheck);
        document.getElementById('create').name.addEventListener('blur', nameIsCorrect);
        
        document.getElementById('create').adress.addEventListener('focus', adressCheck);
        document.getElementById('create').adress.addEventListener('input', adressCheck);
        document.getElementById('create').adress.addEventListener('blur', adressIsCorrect);
        
        document.getElementById('create').zip.addEventListener('focus', zipCheck);
        document.getElementById('create').zip.addEventListener('input', zipCheck);
        document.getElementById('create').zip.addEventListener('blur', zipIsCorrect);
        
        document.getElementById('create').land.addEventListener('focus', landCheck);
        document.getElementById('create').land.addEventListener('keypress', landCheck);
        document.getElementById('create').land.addEventListener('blur', landIsCorrect);
        
        document.getElementById('create').cuisine.addEventListener('focus', cuisineCheck);
        document.getElementById('create').cuisine.addEventListener('keypress', cuisineCheck);
        document.getElementById('create').cuisine.addEventListener('blur', cuisineIsCorrect);
        
        document.getElementById('create').addEventListener("submit", function(event) {checkFormular(event);});
};

//$(document).ready(function() {
//    $("#create [name]").on({input: nameCheck, focusin: nameCheck, focusout: nameIsCorrect});
//    $("#create [adress]").on({input: nameCheck, focusin: nameCheck, focusout: nameIsCorrect});
//    $("#create [zip]").on({input: nameCheck, focusin: nameCheck, focusout: nameIsCorrect});
//    $("#create [land]").on({input: nameCheck, focusin: nameCheck, focusout: nameIsCorrect});
//    $("#create [cuisine]").on({input: nameCheck, focusin: nameCheck, focusout: nameIsCorrect});
//    $("#create").on("submit", function(event) {checkFormular(event);});
//    
//   $("#create [name]").on("input", nameCheck).on("focus", nameCheck).on("blur", nameIsCorrect);
//   $("#create [adress]").on("input", nameCheck).on("focus", nameCheck).on("blur", nameIsCorrect);
//   $("#create [zip]").on("input", nameCheck).on("focus", nameCheck).on("blur", nameIsCorrect);
//   $("#create [land]").on("input", nameCheck).on("focus", nameCheck).on("blur", nameIsCorrect);
//   $("#create [cuisine]").on("input", nameCheck).on("focus", nameCheck).on("blur", nameIsCorrect);
//   $("#create").on("submit", function(event) {checkFormular(event);});
//});

/**
 * 
 * @param {type} event
 * @returns {Boolean}
 */
function checkFormular(event) {
    event.preventDefault();
    var bol1 = nameIsCorrect();
    var bol2 = adressIsCorrect();
    var bol3 = zipIsCorrect();
    var bol4 = landIsCorrect();
    var bol5 = cuisineIsCorrect();
    return (bol1 && bol2 && bol3 && bol4 && bol5);
}

var green = "#15DE00";
var red = "#FF8E8E";
var orange = "#FF9812";
var grey = "#989898";

/**
 * 
 * @returns {None}
 */
function nameCheck() {
    var inputField = $("#create [name]")[0];
    var textField = $("#form_1")[0];

    if (inputField.value.length < 4) {
        setProps(inputField, orange, textField, grey, "*requires at least 4 characters");
    } else {
        setProps(inputField, green, textField, grey, "*requires at least 4 characters");
    }
}
/**
 * 
 * @returns {Boolean}
 */
function nameIsCorrect() {
    var inputField = $("#create [name]")[0];
    var textField = $("#form_1")[0];
    
    if (inputField.value.length < 4) {
        setProps(inputField, red, textField, red, "Must contain at least 4 characters!");
        return false;
    } else {
        setProps(inputField, green, textField, green, "Correct");
        return true;
    }
}

/**
 * 
 * @returns {None}
 */
function adressCheck() {
    var inputField = $("#create [adress]")[0];
    var textField = $("#form_2")[0];

    if (inputField.value.length < 5) {
        setProps(inputField, orange, textField, grey, "*requires at least 5 characters");
    } else {
        setProps(inputField, green, textField, grey, "*requires at least 5 characters");
    }
}
/**
 * 
 * @returns {Boolean}
 */
function adressIsCorrect() {
    var inputField = $("#create [adress]")[0];
    var textField = $("#form_2")[0];

    if (inputField.value.length < 5) {
        setProps(inputField, red, textField, red, "Must contain at least 5 characters!");
        return false;
    } else {
        setProps(inputField, green, textField, green, "Correct");
        return true;
    }
}

/**
 * 
 * @returns {None}
 */
function zipCheck() {
    var inputField = document.getElementById("create").zip;
    var textField = document.getElementById("form_3");
    var check = 0;

    for (i = 0; i < inputField.value.length; ++i) {
        if (inputField.value.charAt(i) < "0" || 
                inputField.value.charAt(i) > "9") {
            check = 1;
            break;
        }
    }

    if (inputField.value.length !== 5 || check === 1) {
        setProps(inputField, orange, textField, grey, "*requires a 5 digit number");
    } else {
        setProps(inputField, green, textField, grey, "*requires a 5 digit number");
    }
}
/**
 * 
 * @returns {Boolean}
 */
function zipIsCorrect() {
    var inputField = document.getElementById("create").zip;
    var textField = document.getElementById("form_3");
    var check = 0;

    for (i = 0; i < inputField.value.length; ++i) {
        if (inputField.value.charAt(i) < "0" || 
                inputField.value.charAt(i) > "9") {
            check = 1;
            break;
        }
    }

    if (inputField.value.length !== 5 || check === 1) {
        setProps(inputField, red, textField, red, "Must contain exactly 5 digits!");
        return false;
    } else {
        setProps(inputField, green, textField, green, "Correct");
        return true;
    }
}

/**
 * 
 * @returns {None}
 */
function landCheck() {
    var inputField = document.getElementById("create").land;
    var textField = document.getElementById("form_4");

    if (inputField.selectedIndex === 0) {
        setProps(inputField, orange, textField, grey, "*select a country");
    } else {
        setProps(inputField, green, textField, grey, "*select a country");
    }
}
/**
 * 
 * @returns {Boolean}
 */
function landIsCorrect() {
    var inputField = document.getElementById("create").land;
    var textField = document.getElementById("form_4");

    if (inputField.selectedIndex === 0) {
        setProps(inputField, red, textField, red, "Must select a country!");
        return false;
    } else {
        setProps(inputField, green, textField, green, "Correct");
        return true;
    }
}

/**
 * 
 * @returns {None}
 */
function cuisineCheck() {
    var inputField = document.getElementById("create").cuisine;
    var textField = document.getElementById("form_5");

    if (inputField.selectedIndex === 0) {
        setProps(inputField, orange, textField, grey, "*select a cuisine");
    } else {
        setProps(inputField, green, textField, grey, "*select a cuisine");
    }
}
/**
 * 
 * @returns {Boolean}
 */
function cuisineIsCorrect() {
    var inputField = document.getElementById("create").cuisine;
    var textField = document.getElementById("form_5");

    if (inputField.selectedIndex === 0) {
        setProps(inputField, red, textField, red, "Must select a cuisine!");
        return false;
    } else {
        setProps(inputField, green, textField, green, "Correct");
        return true;
    }
}

/**
 * 
 * @param {HTMLElement} element
 * @param {ColorAsString} c_border
 * @param {HTMLElement} text
 * @param {ColorAsString} c_text
 * @param {String} string
 * @returns {None}
 */
function setProps(element, c_border, text, c_text, string) {
    element.style.borderColor = c_border;
    text.style.color = c_text;
    text.style.fontSize = "12px";
    text.innerHTML = string;
}
