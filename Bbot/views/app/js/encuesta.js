$(window).load(function(){
   var h = $(window).height();
   var c = $('#content').height();
	//alert(h);
    //alert(c);
   var r=h-c;
   var calculatecontsize =0
   if(c<h){
      if(r<80){
		calculatecontsize = h - (h-c);
	  }else{
	    calculatecontsize = h - 80;
	  }
     //alert(calculatecontsize);
     $('#content').css({"height":calculatecontsize + "px"} );
   }
});