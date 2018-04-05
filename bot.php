<?php


$TOKEN = "512287569:AAFBv5fdpRAoS5eybueFs1ZGJ3e_Ytpf51Y";
$TELEGRAM = "https://api.telegram.org/bot".$TOKEN; 

$update = file_get_contents('php://input');
$update = json_decode($update,TRUE);

$chatId = $update["message"]["chat"]["id"];
$chatType = $update["message"]["chat"]["type"];
$message = $update ["message"]["text"];
echo $message;
switch ($message) {
	case '/search':
		$response = "esto es el comienzo";
		sendMessage($chatId,$response);
		break;
	case '/hora':

		$response = date();
		sendMessage($chatId,$response);
		break;
	
	default:
		# code...
		break;
}

function sendMessage($chatId,$response){

	$url = $GLOBALS[TELEGRAM].'/sendMessage?chat_id='.$chatId.'&parse_mode=HTML&text='.urlencode($response);
	echo $url;
	file_get_contents($url);
}

//echo "funciona";
?>