<?php


$TOKEN = "512287569:AAFBv5fdpRAoS5eybueFs1ZGJ3e_Ytpf51Y";
$TELEGRAM = "https://api.telegram.org/bot".$TOKEN; 

$update = file_get_contents('php://input');
$update = json_decode($update,TRUE);

$chatId = $update["message"]["chat"]["id"];
$chatType = $update["message"]["chat"]["type"];
$message = $update ["message"]["text"];
$nombre = $update ["message"]["chat"]["first_name"];
echo $message;
switch ($message) {
	case '/search':
		$response = "esto es el comienzo";
		sendMessage($chatId,$response);
		break;
	case '/hora':

		$response = "hora de hoy";
		sendMessage($chatId,$response);
		break;
	case 'hola':

		$response = "hola como estas ".$nombre;
		sendMessage($chatId,$response);
		break;	
	default:
			//if (getCoin($message)){
				$response = getCoin($message);
				sendMessage($chatId,$response);
			//}else{
				//$response = "uppss.. ".'"'.$message.'" no es un comando valido';
				//sendMessage($chatId,$response);
			//}

		break;
}

function sendMessage($chatId,$response){

	$url = $GLOBALS[TELEGRAM].'/sendMessage?chat_id='.$chatId.'&parse_mode=HTML&text='.urlencode($response);
	echo $url;
	file_get_contents($url);
}

function getCoin($message){
	$moneda = strtolower($message);
	 $html= file_get_contents('https://api.coinmarketcap.com/v1/ticker/'.$moneda);
    $data = json_decode($html,true);

   	if(isset($data[0]['symbol']))
    	return 'Moneda: '.$data[0]['symbol'].'\n<br>Precio_USD: '.$data[0]['price_usd'];
    else
    	return false;
   // print_r($data[0]['symbol']);
}

//echo "funciona";
?>