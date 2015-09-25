// Launches firework at cursor when mouse is clicked and released
$(document).click(function(e){
	
	// calculate mouse coordinates in percentage of window
    var xPercent = e.offsetX/ $(this).width() * 100;
	var yPercent = e.offsetY/ $(this).height() * 100;
	
	// launch firework (blastRadius, particles, circles, burstType, startX, startY, explodeX, explodeY)
	createFirework(15,100, 6,null,50,null,xPercent,yPercent,true,true);
});

// Prevents mouse from changing into highlighter cursor
$(document).mousedown(function(event){
    event.preventDefault();
});