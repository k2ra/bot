$(document).ready(function(){

$('input').on('ifChecked', function(event){
 // alert(event.type + $(this).attr('value'));
});



$('#siguiente').on('click',function(){
//alert($('input:radio[name=iCheck1]:checked').val());
var valida = "siguiente";
	if($('input:radio[name=iCheck1]:checked').val() && $('input:radio[name=iCheck2]:checked').val()){

	
		$.ajax({
					url: "?view=preguntas&mode=list",
					type: "POST",
					data:  $('#preguntas_form').serialize() + "val="+valida ,
					cache: false,
					crossDomain: false,
					//dataType:  	"json",
					success: function(data) {
					
						
								
							
					},
					error: function() {
						// Fail message
					},

				})
	}
	else{
	
			alert('Por favor!, escojer la respuesta que mas se ajusta a su sentir.');
			//$("#msg").html('<div class="alert alert-warning alert-dismissible fade in " role="alert"><b>Por favor!</b> escojer la respuesta que mas se ajusta a su sentir.</div>');
			// $('#siguiente').removeattr("value");

				/*$("#msg").removeAttr("style");
				setTimeout(function() {
					$("#msg").fadeOut(1500);
					},50000);*/
	}

});

$('#enviar').on('click',function(){

	if($('input:radio[name=iCheck1]:checked').val() ){
		/*$.ajax({
					url: "?view=preguntas&mode=list",
					type: "POST",
					data:  "val=final" ,
					cache: false,
					crossDomain: false,
					//dataType:  	"json",
					success: function(data) {
					
						
								
							
					},
					error: function() {
						// Fail message
					},

				})*/
	}else{
		alert('Por favor!, escojer la respuesta que mas se ajusta a su sentir.');
	}
		
});

});