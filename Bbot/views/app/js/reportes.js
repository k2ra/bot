$(document).ready(function(){
	$("#tipo").change(function(){
		//alert('correcto');
		var seleccionado =$("#tipo").val(); 
		 	var connect, form, response, result;

	    	form = $( "#reportesForm").serialize()+ "&seccion="+$("#tipo").val();
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	console.log($("#tipo").val());
		        	var datos = JSON.parse(connect.responseText);
		        	console.log(datos);
		        	$("#nombre").empty();
		        	$.each( datos, function( key, value ) {
		       		
			  			if(seleccionado =="Empresa"){

			  			$("#nombre").append("<option value ='"+value.id_empresa+"'>"+value.descripcion+"</option>");
			  			}
			  			else if (seleccionado =="Unidad"){
			  				$("#nombre").append("<option value ='"+value.id_unidad+"'>"+value.empresa+" - "+value.descripcion+"</option>");
			  			}
			  			else if(seleccionado =="Departamento"){
			  				$("#nombre").append("<option value ='"+value.id_departamento+"'>"+value.empresa+" - "+value.unidad+" - "+value.descripcion+"</option>");
			  			}
					
					});
			    }
			}

			connect.open('POST','ajax.php?mode=reporte',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);
	});


	$("#btnGeneraReporte").on('click',function(){

		//alert($("#tipo").val() +" "+ $("#nombre").val()+" "+ $( "#reportesForm").serialize());

		 	var connect, form, response, result;

	    	form = $( "#reportesForm").serialize()+ "&seccion="+$("#tipo").val()+"&generar=true";
	    	connect = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    	connect.onreadystatechange = function() {
		        if(connect.readyState == 4 && connect.status == 200) {
		        	console.log($("#tipo").val());
		        	var datos = JSON.parse(connect.responseText);
		        	console.log(datos);
		        	if(datos != false){
		        		
			        	$promedio = datos[0]['cantidad'];
			        	//$("#nombre").empty();
			        	$('#viewReport').empty();

			        	$('#viewReport').append("reporte de "+ $("#tipo").val());
			        	$('#viewReport').html(datos[1][0].primer_resultado+datos[1][0].segundo_resultado+ datos[2]['pregunta'] +datos[1][0].cuarto_resultado);
			        	
		        	}
			    }
			}

			connect.open('POST','ajax.php?mode=reporte',true);
			connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			connect.send(form);

	});

});