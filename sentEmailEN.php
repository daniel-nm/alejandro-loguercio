<?php
/* Set e-mail recipient */

$myemail  = "aleloguercio@gmail.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['name'], "Please, enter your name.");
$email    = check_input($_POST['email']);
$subject  = check_input($_POST['subject'], "Please, write a subject.");
$comments = check_input($_POST['body'], "Please, write your comments");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid.");
}

/* Let's prepare the message for the e-mail */
$message = "¡Hola Ale!

Se ha enviado una solicitud a través del formulario de contacto de tu página. Los datos son los siguientes:

Nombre: $yourname
E-mail: $email
Asunto: $subject
Mensaje:
$comments
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thank_you.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>