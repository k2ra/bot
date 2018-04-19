$(document).ready(function(){


	$('#btnBuscarUn').on('click',function(){

		var unity = $('#txtbuscarUnidad').val();

		listUnity(unity);
	});
});

function editUnity(id,unidad,jefe,correo,empresa,nombremp){
	var unity = $('#txtbuscarUnidad').val();
	
		$('#txtUnidad').val(unidad);
		$('#txtJefe').val(jefe);
		$('#txtCorreo').val(correo);
		$('#empresaActual').attr("value",""+empresa+"");
$('#empresaActual').text(nombremp);

	   $("#editUnity").modal();
//console.log(nombremp);
	  $('#btnEditUnidad').on('click',function(){
	
  			var connect, form, response, result;

	    	form = $( "#formEditUnity").serialize()+ "&id="+id+"&seccion=Unidad";
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	$("#msg").html("<div class='alert alert-dismissible alert-success'><strong>Exito!</strong> La informacion ha sido actualizada satisfactoriamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>");
					listUnity(unity);

			    }
			}

			connect.open('POST','ajax.php?mode=modify',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);

		});		
}

function deleteUnity(id){

	var unity = $('#txtbuscarUnidad').val();

		$("#deleteUnity").modal();

		$('#btnDeleteUnity').on('click',function(){
	
  			var connect, form, response, result;

	    	form = "id="+id+"&seccion=Unidad";
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	var r = connect.responseText;
		        	console.log(r);
		        	$("#msg").html("<div class='alert alert-dismissible alert-success'><strong>Exito!</strong> Informacion actualizada correctamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>");
					listUnity(unity);

			    }
			}

			connect.open('POST','ajax.php?mode=delete',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);

		});	

}


function listUnity(unity){
	var connect, form, response, result;

    	form = 'txtbuscarUnidad=' + unity +"&seccion=Unidad";
    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    	connect.onreadystatechange = function() {
	        if(connect.readyState == 4 && connect.status == 200) {
	        	var datos = JSON.parse(connect.responseText);
	       		//console.log(datos);
				$("tbody").empty();
				$("#msg").empty();
				if(datos == 0 ){
					$("#msg").html('<div class="alert alert-warning"><b>Verificar</b> No se encontraron registros con esa descripcion, favor escribir palabra completa para una busqueda mas eficiente. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>');
		       	}
		       	else
		       	{
		       		$.each( datos, function( key, value ) {
		       		
			  			console.log("editCompany("+'"'+value.id_empresa+'",'+'"'+value.descripcion+'",'+'"'+value.colaborador+'",'+'"'+value.correo+'",'+value.colaborador+'",'+value.empresa+'",'+")");
			  			$("#cuerpo").append("<tr ><td><b>"+value.descripcion+"</b></td><td>"+value.colaborador+"</td><td>"+value.correo+"</td><td>"+value.empresa+"</td><td><a class='btn btn-primary btn-md' title='Editar' onclick='editUnity("+'"'+value.id_unidad+'",'+'"'+value.descripcion+'",'+'"'+value.colaborador+'",'+'"'+value.correo+'",'+'"'+value.fk_empresa+'",'+'"'+value.empresa+'"'+")'><i class='fa fa-pencil'></i></a><a class='btn btn-danger btn-md' title='Borrar' onclick='deleteUnity("+'"'+value.id_unidad+'"'+")'><i class='fa fa-trash-o'></i></a></td></tr>");
					
					});


		       	}

		    }
		}

		connect.open('POST','ajax.php?mode=search',true);
		connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		connect.send(form);


}