<?php

$frm_name  = "Заявка с сайта пфл-100.рф";
$recepient = "pfl-100@mail.ru";
$sitename  = "пфл-100";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);


$message = "
Имя: $name <br>
Телефон: $phone <br>
Комментарий: $comment
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
