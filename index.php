<?php


$TOKEN = "512287569:AAFBv5fdpRAoS5eybueFs1ZGJ3e_Ytpf51Y";
$TELEGRAM = "https://api.telegram.org:443/bot$TOKEN"; 

if (checkToken()) 
{
  $request = receiveRequest();
  $chatId = $request->message->chat->id;
  $text = $request->message->text;
  sendMessage($chatId, $text);
}

function checkToken() 
{
  global $TOKEN;
  $pathInfo = ltrim($_SERVER['PATH_INFO'] ? '', '/');
  return $pathInfo == $TOKEN;
}

function receiveRequest() 
{
  $json = file_get_contents("php://input");
  $request = json_decode($json, $assoc=false);
  return $request;
}

function sendMessage($chatId, $text) 
{
  global $TELEGRAM;	

  $query = http_build_query([
    'chat_id'=> $chatId,
    'text'=> $text,
    'parse_mode'=> "Markdown", 
  ]);

  $response = file_get_contents("$TELEGRAM/sendMessage?$query");
  return $response;
}
?>