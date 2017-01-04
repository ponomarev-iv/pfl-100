/**
 * Created by Pompo on 04.01.2017.
 */

function sendForm() {
    $("#form-1").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#form-1").trigger("reset");
        });
        return false;
    });

    $("#form-2").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#form-2").trigger("reset");
        });
        return false;
    });
}

$(document).ready(function () {
    sendForm();
})