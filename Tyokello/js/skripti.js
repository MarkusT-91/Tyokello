function kello() {

	var paiva = new Date($.now());
	var tunnit = paiva.getHours();
	var minuutit = paiva.getMinutes();
	var sekunnit = paiva.getSeconds();
	
	if(tunnit.toString().length == 1 ) {
		
	}

	if(minuutit.toString().length == 1 ) {
		minuutit = "0" + minuutit;
	}
	
	if(sekunnit.toString().length == 1 ) {
		sekunnit = "0" + sekunnit;
	}
	
	var aika = tunnit + ":" + minuutit + " ";
	
	$("#aika").html(aika);
	$("#sekunnit").html(sekunnit);
}
$(document).ready(function(){
   
   
   setInterval('kello()', 1000);
   
   
});