jQuery(document).ready(function(){
	jQuery('nav ul > li:has(ul)').hover(function () {
		jQuery('nav ul ul').css('visibility', 'visible');
		//jQuery('nav ul ul').css('display', 'block');
	},function () {
		jQuery('nav ul ul').css('visibility', 'hidden');
	   }
	);
    //Navigation
        
    // Links kriegen ein zusätzliches Zeichen wenn eine 3te Ebene besteht
    jQuery("nav ul ul li:has(ul)").find("a:first").append(" &raquo; ");
});