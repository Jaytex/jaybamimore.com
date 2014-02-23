function getBrowserWidth(){
		if (window.innerWidth){
			return window.innerWidth;}	
		else if (document.documentElement && document.documentElement.clientWidth != 0){
			return document.documentElement.clientWidth;	}
		else if (document.body){return document.body.clientWidth;}		
			return 0;
	}


function dynamicLayout(){
	var browserWidth = getBrowserWidth();

	if (browserWidth < 366) {
		changeLayout("slim");

	}
	if (browserWidth < 700){
		changeLayout("thin");
	}

	if ((browserWidth >= 800) && (browserWidth <= 950)){
		changeLayout("wide");
	}

	if (browserWidth > 950){
		changeLayout("wider");
	}
}


function changeLayout(nl){
   document.body.className = nl;
}

	function addEvent( obj, type, fn ){ 
	   if (obj.addEventListener){ 
	      obj.addEventListener( type, fn, false );
	   }
	   else if (obj.attachEvent){ 
	      obj["e"+type+fn] = fn; 
	      obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
	      obj.attachEvent( "on"+type, obj[type+fn] ); 
	   } 
	} 
	
	addEvent(window, 'load', dynamicLayout);
	addEvent(window, 'resize', dynamicLayout);

