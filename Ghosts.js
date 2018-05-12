// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 
var HALF_LENGTH = (HEAD_RADIUS + BODY_HEIGHT + FOOT_RADIUS) / 2;

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

/* Write a comment here about your overall program */
function start(){
	var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    var randomX = Randomizer.nextInt(HEAD_RADIUS, getWidth() - HEAD_RADIUS);
    var randomY = Randomizer.nextInt(HALF_LENGTH, getHeight() - HALF_LENGTH);
    var randomColor = Randomizer.nextColor();
    drawGhost(centerX, centerY, Color.red);
    drawGhost(randomX, randomY, randomColor);
    drawGhost(100,100, Color.green);
    drawGhost(300, 200, Color.black);
    drawGhost(40, 300, Color.orange);
    drawGhost(300, 50, Color.yellow);
}

function drawGhost(centerX, centerY, color){

    drawHead(centerX, centerY, color);
    drawBody(centerX, centerY, color);
    drawFeet(centerX, centerY, color);
    drawEyes(centerX, centerY, color);
}

function drawHead(centerX, centerY, color){
     //Head
    //Center is location of circle/head/top/thing
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(centerX, centerY);
    head.setColor(color);
    add(head);
}

function drawBody(centerX, centerY, color){
    //Body
    var body = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    body.setPosition(centerX - HEAD_RADIUS, centerY);
    body.setColor(color);
    add(body);
}

function drawFeet(centerX, centerY, color){
    //Feet
    var x = centerX - HEAD_RADIUS + FOOT_RADIUS;
    for(var i = 0; i < NUM_FEET; i++){
        var foot = new Circle(FOOT_RADIUS);
        foot.setPosition(x, centerY + BODY_HEIGHT);
        foot.setColor(color);
        add(foot);
        x = x + FOOT_RADIUS * 2;
    }  
}

function drawEyes(centerX, centerY, color){
    //Left Eye
    var leftEye = new Circle(EYE_RADIUS);
    leftEye.setPosition(centerX - EYE_OFFSET, centerY);
    leftEye.setColor(Color.white);
    add(leftEye);
    
    var leftPupil = new Circle(PUPIL_RADIUS);
    leftPupil.setPosition(centerX - PUPIL_LEFT_OFFSET, centerY);
    leftPupil.setColor(Color.blue);
    add(leftPupil);
    
    //Right Eye
    var rightEye = new Circle(EYE_RADIUS);
    rightEye.setPosition(centerX + EYE_OFFSET, centerY);
    rightEye.setColor(Color.white);
    add(rightEye);
    
    var rightPupil = new Circle(PUPIL_RADIUS);
    rightPupil.setPosition(centerX + PUPIL_RIGHT_OFFSET, centerY);
    rightPupil.setColor(Color.blue);
    add(rightPupil);
    
}
