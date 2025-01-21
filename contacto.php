<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $consulta = htmlspecialchars($_POST['consulta']);

    // Dirección de correo del administrador
    $adminEmail = "info@vueloslatinos.com";

    // Asunto del correo
    $subjectAdmin = "Nueva consulta desde VuelosLatinos";
    $subjectUser = "Confirmación de tu consulta en VuelosLatinos";

    // Mensaje para el administrador
    $messageAdmin = "Has recibido una nueva consulta:

Nombre: $nombre
Email: $email
Consulta: $consulta

Saludos,
Tu sistema de VuelosLatinos";

    // Mensaje para el usuario
    $messageUser = "Hola $nombre,

Gracias por ponerte en contacto con nosotros. Hemos recibido tu consulta:

\"$consulta\"

Nuestro equipo te responderá a la brevedad. 

Saludos,
El equipo de VuelosLatinos";

    // Cabeceras del correo
    $headers = "From: info@vueloslatinos.com\r\n" .
               "Reply-To: $adminEmail\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar correo al administrador
    mail($adminEmail, $subjectAdmin, $messageAdmin, $headers);

    // Enviar correo al usuario
    mail($email, $subjectUser, $messageUser, $headers);

    // Confirmación al usuario
    echo "<h1>Gracias por tu consulta, $nombre!</h1>";
    echo "<p>Hemos recibido tu mensaje y te responderemos pronto.</p>";
} else {
    echo "<h1>Error</h1>";
    echo "<p>No se ha enviado el formulario correctamente.</p>";
}
?>
