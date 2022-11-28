// Mohammed Khamisani, Aiden Kester, Samuele Scarfone, Chase Normile
// FMS Refiner - November 2022

let menuButton, activity1Button, activity2Button, activity3Button;
let Front;
let numActivity = 0;
let height = 100;
let width = 100;
let completedGames = 0;
let name;
let finishedButton;


function backToMenu(){ // reloads the main menu
  clear();
  background(220);
  numActivity = 0;
  
  // Hide the home page button, show the activity buttons
  menuButton.hide();
  activity1Button.show();
  activity2Button.show();
  activity3Button.show();
  aboutUsButton.show();
  name.show();
  checking.hide();
}

function setup() {
  // image(Front,0,0,800,500); // not working
  createCanvas(800, 400);
  menuButton = createButton('Menu');
  menuButton.position(740, 380);
  menuButton.size(60,20)
  let col = color(14, 127, 240);
  menuButton.style('background-color', col)
  menuButton.mousePressed(backToMenu);
  menuButton.hide();
  
  activity1Button = createButton('Activity 1');
  activity1Button.position(220, 115);
  activity1Button.mousePressed(activity1Setup);
  activity1Button.show();
  
  activity2Button = createButton('Activity 2');
  activity2Button.position(520, 115);
  activity2Button.mousePressed(activity2Setup);
  activity2Button.show();
  
  activity3Button = createButton('Activity 3');
  activity3Button.position(220, 264);
  activity3Button.mousePressed(activity3Setup);
  activity3Button.show();
  
  aboutUsButton = createButton('About Us');
  aboutUsButton.position(520, 264);
  aboutUsButton.mousePressed(aboutUsSetup);
  aboutUsButton.show();
  
  TheBackground = loadImage("output.png")
  Progress = loadImage("progress.png")
  
  name = createInput('');
  name.position(63, 197);
  name.size(65,17)
  
  
  /*let checking = createInput('');
  checking.position(325, 320);
  checking.size(65,17)
  checking.input(myInputEvent)*/
}

function mainMenu() {
  background(220);
  image(TheBackground, 0, 0);// enlarge
  //image(Progress, 20, 20)
  image(Progress, 605, height/1.1, Progress.width/2.5, Progress.height/2.5)
  image(Progress, 0, height/1.1, Progress.width/2.5, Progress.height/2.5)
  // Displays the image at point (0, height/2) at half size
  //image(Front, 0, height / 2, Front.width / 2, Front.height / 2);
  textSize(25)
  fill("red")
  text("Welcome to The FMS Refiner!", 240, 40)
  stroke(24)
  textSize(15)
  fill("black")
  text("An application to help YOU work", 90, 60)
  text("on your motor and cognitive skills.", 90, 77)
  text("more coming soon", 130, 320)
  
  fill("green")
  rect(207,100,95,50);
  
  fill("black")
  rect(507,100,95,50)
  
  fill("red")
  rect(207,250,95,50)
  
  fill("grey")
  rect(507, 250, 95, 50)  
  
  fill("white")
  text("Points",683,184)
  if (completedGames > 100)
  text("  " + completedGames, 680, 207)
  if (completedGames < 100)
  text("     " + completedGames, 680,207)
  
  fill("white")
  text("YOUR NAME", 55, 185)
  
  /*fill("blue")
  rect(70, 60, 85, 85, 20);*/
  
  /*textSize(20)
  fill("white")
  text("Activity",82,97)
  text("One",92,127)
  
  fill("red")
  rect(70, 175, 85, 85, 20);
  
  textSize(20)
  fill("white")
  text("Activity",82,210)
  text("Two",92,240)
  
  fill("green")
  rect(220, 175, 85, 85, 20);
  textSize(20)
  fill("white")
  text("About",235,210)
  text("Us",247,240)
  
  fill("black")
  rect(220,60, 85, 85, 20);
  
  textSize(20)
  fill("white")
  text("Activity",232,97)
  text("Three",237,127)*/
}

function draw() { // switch statement for the different activities
  switch(numActivity){
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
  
function preload(){ // for any images used
  activity1Preload();
  activity2Preload();
  activity3Preload();
  aboutUsPreload();
}
}