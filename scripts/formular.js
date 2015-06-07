// check all
function checkFormular() {
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
 * @returns {none}
 */
function nameCheck() {
    var inputField = document.getElementById("create").name;
    var textField = document.getElementById("form_1");

    if (inputField.value.length < 4) {
        setProps(inputField, orange, textField, grey, "*requires at least 4 characters");
    } else {
        setProps(inputField, green, textField, grey, "*requires at least 4 characters");
    }
}
/**
 * 
 * @returns {boolean}
 */
function nameIsCorrect() {
    var inputField = document.getElementById("create").name;
    var textField = document.getElementById("form_1");
    
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
 * @returns {none}
 */
function adressCheck() {
    var inputField = document.getElementById("create").adress;
    var textField = document.getElementById("form_2");

    if (inputField.value.length < 5) {
        setProps(inputField, orange, textField, grey, "*requires at least 5 characters");
    } else {
        setProps(inputField, green, textField, grey, "*requires at least 5 characters");
    }
}
/**
 * 
 * @returns {boolean}
 */
function adressIsCorrect() {
    var inputField = document.getElementById("create").adress;
    var textField = document.getElementById("form_2");

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
 * @returns {none}
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
 * @returns {boolean}
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
 * @returns {none}
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
 * @returns {boolean}
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
 * @returns {none}
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
 * @returns {boolean}
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
 * @param {inputField} element
 * @param {type} c_border
 * @param {type} text
 * @param {type} c_text
 * @param {type} string
 * @returns {none}
 */
function setProps(element, c_border, text, c_text, string) {
    element.style.borderColor = c_border;
    text.style.color = c_text;
    text.style.fontSize = "12px";
    text.innerHTML = string;
}
