/* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;
var brick;
var numBricks = NUM_BRICKS_PER_ROW * NUM_ROWS;
var numTries = 3;
var x = BRICK_SPACING;
var y = BRICK_TOP_OFFSET;
/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var centerX = getWidth() / 2;
var centerY = getHeight() / 2;
var ball;
var dx = 5;
var dy = 5;
var BALL_RADIUS = 15;
var paddle;

function start(){
	drawBricks();
	drawBall();
	drawPaddle();
	setTimer(move, 20);
	mouseMoveMethod(movePaddle);
}
//PADDLE
function drawPaddle(){
    paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition(centerX - PADDLE_WIDTH / 2,
    getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    add(paddle);
}

function movePaddle(e){

    
    paddle.setPosition(e.getX() - PADDLE_WIDTH / 2,
    getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    if(paddle.getX() < 0){
        paddle.setPosition(0,
        getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    }
    if(paddle.getX() + PADDLE_WIDTH > getWidth()){
        paddle.setPosition(getWidth() - PADDLE_WIDTH,
        getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    }
}

//BALL
function drawBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(centerX, centerY);
    add(ball);
    bounce;
}

function move(){
    bounce();
    ball.move(dx, dy);
    
    if(ball.getX() - BALL_RADIUS < 0 ||
    ball.getX() + BALL_RADIUS > getWidth()){
        dx = -dx;
    }
    
    if(ball.getY() - BALL_RADIUS < 0){
        dy = -dy;
    }
    if(ball.getY() + BALL_RADIUS > getHeight()){
        ball.setPosition(centerX, centerY);
        stopTimer(move);
        numTries--;
        if(numTries > 0){
        mouseClickMethod(play);
        }
        checkScore();
    }
    if(numBricks == 0){
        ball.setPosition(centerX, centerY);
        stopTimer(move);
        checkScore();
    }
    
}

function play(e){
    if(numTries > 0){
    setTimer(move, 20);
    }
}

function bounce(){
    var ballLeft = ball.getX() - BALL_RADIUS;
    var ballRight = ball.getX() + BALL_RADIUS;
    var ballTop = ball.getY() - BALL_RADIUS;
    var ballBottom = ball.getY() + BALL_RADIUS;
    
    
    var topLeft = getElementAt(ballLeft, ballTop);
    var topRight = getElementAt(ballRight, ballTop);
    var bottomLeft = getElementAt(ballLeft, ballBottom);
    var bottomRight = getElementAt(ballRight, ballBottom);
    //Top
    if(topLeft != null){
        if(topLeft != paddle){
            remove(topLeft);
            numBricks--;
        }
        dy = -dy;
    }
    else if(topRight != null){
        if(topRight != paddle){
            remove(topRight);
            numBricks--;
        }
        dy = -dy;
    }
    //Bottom
    else if(bottomLeft != null){
        if(bottomLeft = paddle){
            dy = -dy;
        }
    }
    else if(bottomRight != null){
        if(bottomRight = paddle){
            dy = -dy;
        }
    }
}


//BRICKS
function drawBrick(color){
    brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        brick.setPosition(x, y);
        brick.setColor(color);
        add(brick);
}

function drawColorRow(color){
    for(var i = 0; i < NUM_BRICKS_PER_ROW; i++){
        drawBrick(color);
        x += BRICK_WIDTH + BRICK_SPACING;
        
    }
    x = BRICK_SPACING;
    y += BRICK_HEIGHT + BRICK_SPACING;
}

function drawBricks(){
    for(var i = 0; i < NUM_ROWS; i++){
        var color;
        if(i == 0 || i == 1){
            color = Color.red;
        }
        if(i == 2 || i == 3){
            color = Color.orange;
        }
        if(i == 4 || i == 5){
            color = Color.green;
        }
        if(i == 6 || i == 7){
           color = Color.blue;
        }
        drawColorRow(color);
    }
}

//OTHER
function text(text){
    var txt = new Text(text);
    txt.setPosition(centerX - txt.getWidth() / 2,
    centerY - txt.getHeight() / 2);
    add(txt);
}
function checkScore(){
    if(numBricks == 0){
        stopTimer(move);
        text("You Win");
    }
    if(numTries == 0){
        text("Game Over");
    }
}