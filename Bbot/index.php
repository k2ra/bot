<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Encuesta </title>

    <!-- Bootstrap -->
    <link href="views/assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="views/assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="views/assets/vendors/iCheck/skins/flat/green.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    
    <link href="views/css/progress/progresion.css" rel="stylesheet">
	<link href="views/assets/build/css/custom.min.css" rel="stylesheet">
    <link href="views/app/css/encuesta.css" rel="stylesheet">
	

</head>
<body style="background: white;">
	
	<div style="float: left;">
		
		<?php
			$url = 'https://api.binance.com/api/v1/klines?symbol=BNBBTC&interval=4h&limit=200';
			$html = file_get_contents($url);
			$data = json_decode($html,true); 
			//print_r($data);
		?>

				<table class="table table-bordered  projects" style="border-style: solid;">
			        <thead>
			          <th>OpenTime</th>
			          <th>Open</th>
			          <th>high</th>
			          <th>low</th>
			          <th>close</th>
			          <th>volumen</th>
			          <th>SMA</th>
			        </thead>
			          <tbody>



			                   
			<?php
				$sesiones=1;
				$a=0;
				foreach ($data as $value) {
					
					$a =($a+$value[4]);
					$media = $a/$sesiones;
				  echo '<tr><td><b>'.date('d/m/Y H:i',substr($value[0],0,10)).'</b></td>';
				  echo '<td>'.$value[1 ].'</td>';
				  echo '<td>'.$value[2].'</td>';
				  echo '<td>'.$value[3].'</td>';
				  echo '<td>'.$value[4].'</td>';
				  echo '<td>'.$value[5].'</td>';
				  echo '<td>'.number_format($media, 8).'</td>';
					$sesiones+=1;
				}

			?>
			      </tbody>
			 </table>  
		
	</div>

	<!--API 24h-->
	<div style="float: left; display: block; margin-top: 0px;">
		
		<?php
			$api24h = 'https://api.binance.com/api/v1/ticker/24hr';
			$html2 = file_get_contents($api24h);
			$data24h = json_decode($html2,true); 
		?>

			<table class="table table-bordered  projects" style="border-style: solid;">
			        <thead>
			          <th>symbol</th>
			          <th>priceChange</th>
			          <th>changePercent</th>
			          <th>prevClosePrice</th>
			          <th>lastPrice</th>
			          <th>quoteVolume</th>
			          
			        </thead>
			          <tbody>
		<?php

			foreach ($data24h as $valor) {
				//	echo (substr($valor['symbol'], strlen($valor['symbol'])-3,strlen($valor['symbol'])));
				if($valor['priceChangePercent'] > 0 && substr($valor['symbol'], strlen($valor['symbol'])-3,strlen($valor['symbol']))=="BTC"){

				  echo '<tr><td><b>'.$valor['symbol'].'</b></td>';
				  echo '<td>'.$valor['priceChange'].'</td>';
				  echo '<td>'.$valor['priceChangePercent'].'</td>';
				  echo '<td>'.$valor['prevClosePrice'].'</td>';
				  echo '<td>'.$valor['lastPrice'].'</td>';
				  echo '<td>'.round($valor['quoteVolume']).'</td>';
				
				}
			}

		?>
		 		</tbody>
			</table>  
		

	</div>
<!-- jQuery -->
    <script src="views/assets/vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="views/assets/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="views/assets/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="views/assets/vendors/nprogress/nprogress.js"></script>
    <!-- bootstrap-progressbar -->
    <script src="views/assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
     
    <!-- Custom Theme Scripts -->
    <script src="views/assets/build/js/custom.min.js"></script>

      <script src="views/assets/vendors/iCheck/icheck.min.js"></script>
      <script src="views/assets/vendors/progressbar/dist/progressbar.min.js"></script>
	  <script src="views/app/js/encuesta.js"></script>
      <!--<script src="views/js/progress/progresion.js"></script> -->
</body>

</html>