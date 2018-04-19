$(document).ready(function(){


	$('#btnBuscarCo').on('click',function(){

		var company = $('#txtbuscarEmpresa').val();

		listCompany(company);
	});
});

function editCompany(id,empresa,gerente,correo){
	var valida="eliminarCliente";
	var company = $('#txtbuscarEmpresa').val();
	
		$('#txtEmpresa').val(empresa);
		$('#txtGerente').val(gerente);
		$('#txtCorreo').val(correo);
	

	   $("#editCompany").modal();


	  $('#btnEditEmpresa').on('click',function(){
	
  			var connect, form, response, result;

	    	form = $( "#formEditCompany").serialize()+ "&id="+id+"&seccion=Empresa";
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	$("#msg").html("<div class='alert alert-dismissible alert-success'><strong>Exito!</strong> La informacion ha sido actualizada satisfactoriamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>");
					listCompany(company);

			    }
			}

			connect.open('POST','ajax.php?mode=modify',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);

		});		
}

function deleteCompany(id){

	var company = $('#txtbuscarEmpresa').val();

		$("#deleteCompany").modal();

		$('#btnDeletEmpresa').on('click',function(){
	
  			var connect, form, response, result;

	    	form = "id="+id+"&seccion=Empresa";
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	var r = connect.responseText;
		        	console.log(r);
		        	$("#msg").html("<div class='alert alert-dismissible alert-success'><strong>Exito!</strong> Informacion actualizada correctamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button></div>");
					listCompany(company);

			    }
			}

			connect.open('POST','ajax.php?mode=delete',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);

		});	

}


function listCompany(company){
	var connect, form, response, result;

    	form = 'txtbuscarEmpresa=' + company +"&seccion=Empresa";
    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    	connect.onreadystatechange = function() {
	        if(connect.readyState == 4 && connect.status == 200) {
	        	var datos = JSON.parse(connect.responseText);
	       		console.log(datos);
				$("tbody").empty();
				if(datos == 0 ){
					$("#msg").html('<div class="alert alert-warning"><b>Verificar</b> No se encontraron registros con esa descripcion, favor escribir palabra completa para una busqueda mas eficiente. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>');
		       	}
		       	else
		       	{
		       		$.each( datos, function( key, value ) {
		       		
			  			//console.log(value.descripcion + value.colaborador + value.correo );
			  			$("#cuerpo").append("<tr ><td><b>"+value.descripcion+"</b></td><td>"+value.colaborador+"</td><td>"+value.correo+"</td><td><a class='btn btn-primary btn-md' title='Editar' onclick='editCompany("+'"'+value.id_empresa+'",'+'"'+value.descripcion+'",'+'"'+value.colaborador+'",'+'"'+value.correo+'"'+")'><i class='fa fa-pencil'></i></a><a class='btn btn-danger btn-md' title='Borrar' onclick='deleteCompany("+'"'+value.id_empresa+'"'+")'><i class='fa fa-trash-o'> </i></a></td></tr>");
					
					});


		       	}

		    }
		}

		connect.open('POST','ajax.php?mode=search',true);
		connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		connect.send(form);


}