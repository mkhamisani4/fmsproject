// variable declaration
var fish = [];
var bluefish;
var yellowfish;
var control = 0; // used later for determining when to go to success screen

// setting up everything to be used in activity
function activity2Setup() {
  numActivity = 2; // for the switch
  // Hide the activity buttons, show the menu buttonx
  menuButton.show();
  activity1Button.hide();
  activity2Button.hide();
  activity3Button.hide();
  aboutUsButton.hide();
  name.hide();

  // loading all images to be used
  ocean = loadImage("oceanBack.jpg");
  bluefish = loadImage("bluefish.png");
  yellowfish = loadImage("yellowfish.png");
  goodJob = loadImage("goodjob.jpeg");

  // for loop creating new images
  for (var i = 0; i < 10; i++) {
    fish.push(new Images(bluefish));
  }
}

// drawing the background and moving and showing all the fishes
function activity2Draw() {
  background("blue");
  image(ocean, 0, height / 3000, ocean.width, ocean.height);
  /*image(bluefish,400,height/1.1,bluefish.width/2,bluefish.height/2)*/
  image(
    yellowfish,
    550,
    height / 0.9,
    yellowfish.width / 2,
    yellowfish.height / 2
  );

  // for loop for moving and displaying all 10
  for (let i = 0; i < 10; i++) {
    fish[i].move();
    fish[i].display();
  }

  // instructions tab
  textSize(25);
  fill("white");
  text("INSTRUCTIONS", 100, 120);
  textSize(15);
  fill("yellow");
  text("Click on all the fishes that are blue.", 67, 145);
  text("Your goal is to turn all the blue fishes", 63, 175);
  text("into yellow fishes.", 125, 195);
  text("You will be given a success or fail screen!", 55, 225);

  stroke("white");
  strokeWeight(1);
  fill(255, 8);
  rect(27, 90, 335, 160);

  // top of the screen
  fill("black");
  textSize(20);
  text("Welcome to find the Right Animal!", 255, 40);
  textSize(15);
  text("Click on the blue fishes to turn them yellow!", 260, 65);

  // used for testing delete later
  fill("black");
  textSize(20);
  //text("PRESS ME!", 35, 205)
  //image(zebra, 20, height / 0.65, zebra.width / 2, zebra.height / 1.85);

  fill("red");
  //circle(290,200,120)

  fill("black");
  textSize(20);
  //text("DONT ", 260, 195)
  //text("PRESS ME", 240, 221)

  // if statement for determining when to bring success screen
  if (control > 10) {
    successScreen();
  }
}

// mouse pressed function for when a blue fish is clicked, passes it through the clicked method in the class Images
function mousePressed() {
  for (let j = 0; j < 10; j++) {
    fish[j].clicked(mouseX, mouseY);
  }
}

// new class that helps me keep code organized and push new objects easier
class Images {
  constructor(myImg) {
    // initializes everything to all values
    this.x = random(width + 100) + 500;
    this.y = random(height + 120) + 120;
    this.aspect = random(50, 150);
    this.speed = 1;
    this.img = myImg;
  }

  // clicked method used earlier, passing the through two points as parameters
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.aspect / 2) {
      this.img = yellowfish;
      control++; // incrementing the control to determine when to call success screen
    }
  }

  // movement of the fishes
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  // displaying the fishes
  display() {
    image(this.img, this.x, this.y, this.aspect, this.aspect);
  }
}

// success screen for once all fishes clicked
function successScreen() {
  createCanvas(800, 400);
  image(ocean, 0, height / 3000, ocean.width, ocean.height);
  textSize(30);
  fill("green");
  text("Congrats! You got all the blue fishes!", 200, 100);
  image(goodJob, 230, height / 0.8, goodJob.width / 3, goodJob.height / 3.3);
  completedGames++; // increments points
}
