<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	
	<div style="float: left;">
		
		<?php
			$url = 'https://api.binance.com/api/v1/klines?symbol=BNBBTC&interval=4h&limit=200';
			$html = file_get_contents($url);
			$data = json_decode($html,true); 
			//print_r($data);
		?>

				<table class="table table-striped  projects" style="border-style: solid;">
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

			<table class="table table-striped  projects" style="border-style: solid;">
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
					
				if($valor['priceChangePercent'] > 0){

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
</body>
</html>