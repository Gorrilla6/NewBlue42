<?php
//Enable error reporting for debugging
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");


//Beginning of PHP mail submit
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
if(isset($_POST['submit'])) {
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];




$email_from = 'olj@live.co.uk';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $message".

$to = "olj@live.co.uk";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../index.html');
}
?>
