// variable declaration, some not used in the end
let pokerImage;
let image1 = false;
let image2 = false;
let image3 = false;
let image4 = false;
let y1, y2, y3, y4;

// all the variables for the activity itself
var x;
var y;
var timer;
var score;
var get; // clicked
var Ypicked = {}; // y value randomization for picking a random circle to color yellow
Ypicked[0] = 125;
Ypicked[1] = 190;
Ypicked[2] = 255;
Ypicked[3] = 320;
var Xpicked = {}; // x value randomization for picking a random circle to color yellow
Xpicked[0] = 465;
Xpicked[1] = 555;
Xpicked[2] = 645;
Xpicked[3] = 735;
var fullC; // a variable used later to compare against the frames

// setting up everything to be used in the activity
function activity1Setup() {
  clear();
  numActivity = 1; // for the switch in the main
  // hide all activity buttons, show menu
  menuButton.show();
  activity1Button.hide();
  activity2Button.hide();
  activity3Button.hide();
  aboutUsButton.hide();
  name.hide();
  //checking.hide();
  Activity1Back = loadImage("activity1back.jpeg");

  fullC = 15 + 2 * (10 - 3);

  // randomizing the x and y to be used later for circle selection
  x = Xpicked[Math.floor(Math.random() * 4)];
  y = Ypicked[Math.floor(Math.random() * 4)];
  score = 0;
  timer = 10;

  wellDone = loadImage("welldone.jpeg");
}

// all the text and all the circles in this activity
function activity1Draw() {
  background("green");
  image(Activity1Back, 0, 0);

  fill("white");
  textSize(20);
  text("Welcome to Press Four!", 295, 40);
  text("Your Score: " + score, 155, 260); // score
  text(" Time left:  " + timer, 155, 290); // time left
  fill("red");
  textSize(14);
  //text("Click on the circle right when they turn yellow color!",243,65)

  //row 1
  stroke(66);
  fill("blue");
  circle(735, 125, 50);

  fill("green");
  circle(645, 125, 50);

  fill("black");
  circle(555, 125, 50);

  fill("orange");
  circle(465, 125, 50);

  //row 2
  fill("blue");
  circle(465, 190, 50);

  fill("green");
  circle(555, 190, 50);

  fill("purple");
  circle(645, 190, 50);

  fill("aquamarine");
  circle(735, 190, 50);

  //row 3
  fill("red");
  circle(465, 255, 50);

  fill("red");
  circle(555, 255, 50);

  fill("black");
  circle(645, 255, 50);

  fill("lightgreen");
  circle(735, 255, 50);

  //row 4
  fill("green");
  circle(735, 320, 50);

  fill("black");
  circle(645, 320, 50);

  fill("lightgreen");
  circle(555, 320, 50);

  fill("cyan");
  circle(465, 320, 50);

  // NOT USED
  //image(pokerImage,50,50);
  //if ((mouseX > 0) && (mouseX < 280) && (mouseY > 0) && (mouseY < 280))
  {
    //textSize(20)
    //text("glad", 100, 100)
  }

  // Instructions tab
  textSize(25);
  fill("white");
  text("INSTRUCTIONS", 110, 110);
  textSize(15);
  fill("white");
  text("Click on the circle right when it turns yellow!", 67, 145);
  text("If you clicked on it in time, the score will update!", 55, 175);
  text("You will have four tries! Good luck.", 85, 205);

  stroke("white");
  strokeWeight(1);
  fill(255, 8);
  rect(47, 70, 335, 160);

  // game functions here
  if (frameCount % 70 == 0) {
    x = Xpicked[Math.floor(Math.random() * 4)];
    y = Ypicked[Math.floor(Math.random() * 4)];
    get = false;
  }
  if (frameCount % 70 >= 0 && frameCount % 70 <= fullC) {
    fill("yellow");
    circle(x, y, 50);
  }

  // incrementation of score based on mouse
  if (
    mouseX > x - 45 &&
    mouseX < x + 45 &&
    mouseY > y - 45 &&
    mouseY < y + 45 &&
    frameCount % 70 <= fullC &&
    get == false
  ) {
    score++;
    get = true;
  }

  // timer decrement here
  if (frameCount % 60 == 0) {
    timer--;
  }

  // for when the time runs out
  if (timer <= 0) {
    endGame();
  }

  // if they get above 4 their points go up hence "press four"
  if (score > 4) {
    completedGames = completedGames + 2;
  }
}

// the end game scenario telling the player their final score
function endGame() {
  createCanvas(800, 400);
  image(Activity1Back, 0, 0);
  textSize(25);
  text("Your final score is: " + score, 280, 100);
  image(
    wellDone,
    200,
    height / 0.6,
    wellDone.width / 1.5,
    wellDone.height / 1.7
  );
}
