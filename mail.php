<?php 

require_once('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user__name'];
$phone = $_POST['user__phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  			        // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'testskillbox5@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Modultest222!'; // Ваш пароль от почты с которой будут отправляться письма

$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('testskillbox5@gmail.com', 'Художественная галерея Blanchard'); // от кого будет уходить письмо?
$mail->addAddress('alekseytim@mail.ru');     // Кому будет уходить письмо 
$mail->addAddress('alekseytim@mail.ru');               // Name is optional            // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Пользователь <b>' . $name . '</b> оставил заявку. <br> Его телефон <b>' .$phone. '</b>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Ok';
}
?>