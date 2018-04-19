$(document).ready(function(){

	$('#btncreacorreos').on('click',function(){

		if ($('#txtnumEncuestados').val() < 1){
			alert("Favor ingresar el numero de personas que participaran en este estudio");
		}
		else{
			var numtextbox = $('#txtnumEncuestados').val();

			for (var i = 0; i < numtextbox; i++) {
				$('#conttext').append('<div class="col-md-7 form-group"><input class ="autogenered form-control" type="email" name="correo'+i+'" placeholder ="Introducir Email" required><input class ="autogenered form-control" type="text" name="nombre'+i+'" placeholder ="Introducir Nombre" required></div><br>');
			}

			$('#contbutton').append('<div class="form-group"><button name="enviarCorreos" value="enviarCorreos" class="btn btn-success">Aceptar</button></div>');
		}
	});

});