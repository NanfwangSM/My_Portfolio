<?php
if ($_POST["message"]) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "nanfwangmangvwat02@gmail.com";
  $subject = "New message from $name";
  $body = "From: $name\nEmail: $email\n\n$message";

  mail($to, $subject, $body);
}
?>
