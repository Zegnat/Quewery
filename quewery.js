/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, w ){
	w.Quewery = function( selector ) {
		return selector.match(/#[^(.|\s|\[)]+$/) ? [ document.getElementById( selector.substring(1) ) ] :
			document.querySelectorAll( selector );  
	}
})( document, window);