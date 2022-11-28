// Mohammed Khamisani, Aiden Kester, Samuele Scarfone, Chase Normile
// FMS Refiner - November 2022

// variable declarations
let menuButton, activity1Button, activity2Button, activity3Button;
let Front;
let numActivity = 0; // setting the number of the activity to the default
let height = 100;
let width = 100;
let completedGames = 0; // the number that will appear under the points tab for the menu
let name;
let finishedButton;

function backToMenu() {
  // reloads the main menu
  clear();
  background(220);
  numActivity = 0;

  // Hide the home page button, show the activity buttons in the main menu
  menuButton.hide();
  activity1Button.show();
  activity2Button.show();
  activity3Button.show();
  aboutUsButton.show();
  name.show();
  checking.hide();
}

// creation of the canvas, background and all the buttons
function setup() {
  createCanvas(800, 400);
  menuButton = createButton("Menu");
  menuButton.position(740, 380);
  menuButton.size(60, 20);
  let col = color(14, 127, 240);
  menuButton.style("background-color", col);
  menuButton.mousePressed(backToMenu);
  menuButton.hide();

  activity1Button = createButton("Activity 1");
  activity1Button.position(220, 115);
  activity1Button.mousePressed(activity1Setup);
  activity1Button.show();

  activity2Button = createButton("Activity 2");
  activity2Button.position(520, 115);
  activity2Button.mousePressed(activity2Setup);
  activity2Button.show();

  activity3Button = createButton("Activity 3");
  activity3Button.position(220, 264);
  activity3Button.mousePressed(activity3Setup);
  activity3Button.show();

  aboutUsButton = createButton("About Us");
  aboutUsButton.position(520, 264);
  aboutUsButton.mousePressed(aboutUsSetup);
  aboutUsButton.show();

  TheBackground = loadImage("output.png");
  Progress = loadImage("progress.png");

  name = createInput("");
  name.position(63, 197);
  name.size(65, 17);
}

// all the images and text that is on the main menu
function mainMenu() {
  // all images on main menu
  background(220);
  image(TheBackground, 0, 0); // enlarge
  image(
    Progress,
    605,
    height / 1.1,
    Progress.width / 2.5,
    Progress.height / 2.5
  );
  image(Progress, 0, height / 1.1, Progress.width / 2.5, Progress.height / 2.5);

  // all the text, and the inclusion of the points and name parts
  textSize(25);
  fill("red");
  text("Welcome to The FMS Refiner!", 240, 40);
  stroke(24);
  textSize(15);
  fill("black");
  text("An application to help YOU work", 90, 60);
  text("on your motor and cognitive skills.", 90, 77);
  text("more coming soon", 130, 320);

  fill("green");
  rect(207, 100, 95, 50);

  fill("black");
  rect(507, 100, 95, 50);

  fill("red");
  rect(207, 250, 95, 50);

  fill("grey");
  rect(507, 250, 95, 50);

  fill("white");
  text("Points", 683, 184);
  if (completedGames > 100) text("  " + completedGames, 680, 207);
  if (completedGames < 100) text("     " + completedGames, 680, 207);

  fill("white");
  text("YOUR NAME", 55, 185);
}

function draw() {
  // switch statement for the different activities
  switch (numActivity) {
    case 0:
      mainMenu();
      break;
    case 1:
      activity1Draw();
      break;
    case 2:
      activity2Draw();
      break;
    case 3:
      activity3Draw();
      break;
    case 4:
      aboutUsDraw();
      break;
  }

  function preload() {
    // for any images used *DIDNT USE IN FINAL*
    activity1Preload();
    activity2Preload();
    activity3Preload();
    aboutUsPreload();
  }
}
