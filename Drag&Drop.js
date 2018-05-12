var NUM_CIRCLES = 3;
var RADIUS = 30;
var circle;
function start(){
	drawCircles();
    mouseDownMethod(down);
    mouseDragMethod(drag);
    mouseUpMethod(up);
}

function drawCircles() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var circle = new Circle(RADIUS);
		var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
		var y = Randomizer.nextInt(RADIUS, getHeight() - RADIUS);
		circle.setPosition(x, y);
		circle.setColor(Randomizer.nextColor());
		add(circle);
	}
}

function down(e){
    circle = getElementAt(e.getX(), e.getY());
}

function drag(e){
    if(circle != null){
    circle.setPosition(e.getX(), e.getY());
    }
}

function up(e){
    if(circle != null){
    circle.setPosition(e.getX(), e.getY());
    }
}
