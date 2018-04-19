$(document).ready(function(){
	 $("#form").submit(function(e) {
		result=false;
		$('input[name^="iCheck"]').each(function (index) {
			var name = this.name;
			
			if(!$("input[name="+name+"]:checked").val()) {
				result=true;
			}
		});
		
		if(result){
			alert('Por favor!, escojer la respuesta que mas se ajusta a su sentir.');
			return false;
		}
		
	 });

});