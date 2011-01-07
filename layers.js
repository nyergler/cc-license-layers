/**
 *
 * License Layers Demo Javascript
 * 
 * copyright 2010, Creative Commons, Nathan Yergler, Alex Roberts
 * licensed to the public under CC BY 3.0 Unported
 * <http://creativecommons.org/licenses/by/3.0/>.
 *
 * Relies on jquery (tested with 1.4.4).
 * 
 **/

$(document).ready(function() {

    $(".layer").click(function(e) {
	
	if ($(this).hasClass("focused")) {
	    // the element was previously focused, return to the stack
            $(this).removeClass("focused");
	    $("#" + $(this).attr("id") + "Desc").removeClass("focusedtext");
	    
	    $("#intro").addClass("focusedtext");
	    
	} else if ($(this).hasClass("exploded")) {

	    // do not process events for the #cc layer after exploding
	    if ($(this).attr("id") == "cc") return;

	    // focus on this layer
	    
	    // -- first unfocus other layers
            $(".layer").removeClass("focused");
            $(".description").removeClass("focusedtext");
	    
	    // -- focus on the layer and show the description
            $(this).addClass("focused");
	    $("#" + $(this).attr("id") + "Desc").addClass("focusedtext");
	} else  {
	    // layers are still stacked
            $(".layer").addClass("exploded");
	    
	    // after a delay (for transition), hide the CC layer
	    window.setTimeout(function() {
		$("#cc").hide();
	    }, 1000);

	}
    }); // on layer click    
    
    $(".layer").hover(
	function(e) {	
	    $(".layer[id!='" + $(this).attr("id") + "']").toggleClass("dimmed");
	    $(this).toggleClass("hover");
	});

    $("#getstarted").click(function(e) {
	$("#cc").click();
	e.preventDefault();
    });
});
