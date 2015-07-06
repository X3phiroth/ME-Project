$(function () {
    $.ajaxSetup({
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connected.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        }
    });
// register dialogue: ///////////////////////////////////////////////
    $("button#reg_insert").click(function () {
        $.ajax({
            type: "POST",
            url: "crud.php",
            data: {action: "register",
                firstname: $("#reg_firstname_in").val(),
                secondname: $("#reg_secondname_in").val(),
                phone: $("#reg_phone_in").val(),
                mobile: $("#reg_mobile_in").val(),
                address: $("#reg_address_in").val(),
                email: $("#reg_email_in").val(),
                password: $("#reg_password_in").val()
            },
            success: function (msg) {
                var obj = $.parseJSON(msg);
                if (obj.message) {
                    $("#footerfeedback").text(obj.message);
                } else {
                    var outstr = '';
                    if (obj.firstnameError) {
                        outstr += obj.firstnameError;
                        outstr += ' / ';
                    }
                    if (obj.secondnameError) {
                        outstr += obj.secondnameError;
                        outstr += ' / ';
                    }
                    if (obj.passwordError) {
                        outstr += obj.passwordError;
                        outstr += ' / ';
                    }
                    if (obj.emailError) {
                        outstr += obj.emailError;
                    }
                    $("#footerfeedback").text(outstr);
                }
            }
        });
    });
    $("button#reg_reset").click(function () {
        $("#reg_firstname_in").val("");
        $("#reg_secondname_in").val("");
        $("#reg_phone_in").val("");
        $("#reg_mobile_in").val("");
        $("#reg_address_in").val("");
        $("#reg_email_in").val("");
        $("#reg_password_in").val("");
    });
// dialogue add, find, update, delete, reset: //////////////////////////
    $("button#insert").click(function () {
        $.ajax({
            type: "POST",
            url: "crud.php",
            data: {action: "insert",
                firstname: $("#firstname_in").val(),
                secondname: $("#secondname_in").val(),
                phone: $("#phone_in").val(),
                mobile: $("#mobile_in").val(),
                address: $("#address_in").val(),
                email: $("#email_in").val(),
                password: $("#password_in").val()
            },
            success: function (msg) {
                var obj = $.parseJSON(msg);
                if (obj.message) {
                    $("#footerfeedback").text(obj.message);
                } else {
                    var outstr = '';
                    if (obj.firstnameError) {
                        outstr += obj.firstnameError;
                        outstr += ' / ';
                    }
                    if (obj.secondnameError) {
                        outstr += obj.secondnameError;
                        outstr += ' / ';
                    }
                    if (obj.emailError) {
                        outstr += obj.emailError;
                    }
                    $("#footerfeedback").text(outstr);
                }
            }
        });
    });
    $("button#update").click(function () {
        $.ajax({
            type: "POST",
            url: "crud.php",
            data: {action: "update",
                id: $("#id_in").val(),
                firstname: $("#firstname_in").val(),
                secondname: $("#secondname_in").val(),
                phone: $("#phone_in").val(),
                mobile: $("#mobile_in").val(),
                address: $("#address_in").val(),
                email: $("#email_in").val()
            },
            success: function (msg) {
//alert(msg);
                var obj = $.parseJSON(msg);
                if (obj.message) {
                    $("#footerfeedback").text(obj.message); // -> main view
                    $("#db_operations_modal #feedback").text(obj.message); // -> dialogue
                } else {
                    $("#footerfeedback").text(obj.databaseError);
                    $("#db_operations_modal #feedback").text(obj.message);
                }
            }
        });
    });
    $("button#delete").click(function () {
        $.ajax({
            type: "POST",
            url: "crud.php",
            data: {action: "delete",
                id: $("#id_in").val()
            },
            success: function (msg) {
                var obj = $.parseJSON(msg);
                if (obj.message) {
                    $("#footerfeedback").text(obj.message);
                } else {
                    $("#footerfeedback").text(obj.databaseError);
                }
            }
        });
    });
    $("button#reset").click(function () {
        $("#id_in").val("");
        $("#firstname_in").val("");
        $("#secondname_in").val("");
        $("#phone_in").val("");
        $("#mobile_in").val("");
        $("#address_in").val("");
        $("#email_in").val("");
        $("#password_in").val("");
    });
    $("button#find").click(function () {
        $.ajax({
            type: "GET",
            url: "crud.php",
            data: {action: "find", secondname: $("#secondname_in").val()},
//beforeSend: function () {
//$('#ajax-panel').html('<div class="loading"><img src="/himages/loading.gif"
//alt="Loading..."/></div>');
//},
            dataType: "text",
            success: function (msg) {
                var obj = $.parseJSON(msg);
                if (obj.databaseError) {
                    $("#footerfeedback").text(obj.databaseError);
                } else {
                    $("#id_in").val(obj.id);
                    $("#firstname_in").val(obj.firstname);
                    $("#secondname_in").val(obj.secondname);
                    $("#phone_in").val(obj.phone);
                    $("#mobile_in").val(obj.mobile);
                    $("#address_in").val(obj.address);
                    $("#email_in").val(obj.email);
                    $("#password_in").val(obj.password);
                    $("#footerfeedback").text(obj.message);
                }
            }
        })
    });
// menue: show all //////////////////////////////////////////////////////////
    $("a#show_all").click(function () {
        $.getJSON('crud.php', {action: "getall"}, function (data) {
            var table = '<table class="table table-bordered table-hover">';
            table += '<tr><th>Firstname</th><th>Lastname</th></tr>';
            $.each(data, function (index, item) {
                table += '<tr><td>' + item.firstname + '</td><td>' + item.secondname + '</td></tr>';
            });
            table += '</table>';
            $("#content").html(table);
            $("#footerfeedback").text("show all done...");
        }).fail(function (xhr) {
            $("#footerfeedback").text("show all failure");
            console.log(xhr.status);
            console.log(xhr.response);
            console.log(xhr.responseText);
            console.log(xhr.statusText);
        });
    });
});
$("button#login").click(function () {
    $.ajax({
        type: "POST",
        url: "crud.php",
        cache: false,
//data: $('#loginform').serialize(),
        data: {action: "login",
            email: $("#loginform_email").val(),
            password: $("#loginform_password").val()
        },
        success: function (msg) {
// ajax performed well, but here we get php and sql messages:
            $("#footerfeedback").html(msg);
        }
    });
});