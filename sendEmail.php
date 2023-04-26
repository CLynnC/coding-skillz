<?php


if($_POST["message"]) {


mail("crystal.lynncollins@mail.com", "You Might Have Work!! Here is the subject line",


$_POST["fullName"]["message"]. "From: "+$_POST["email"]);


}


?>