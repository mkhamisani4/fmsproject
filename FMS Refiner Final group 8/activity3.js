// variable declaration
let button;
let answer1 = "BREAK";
let answer2 = "GLAD";
let answer3 = "ROD";
let correction1 = false; // if first word is guessed
let correction2 = false; // if second word is guessed
let correction3 = false; // if third word is guessed
let actual = true; // used later in the if to remove the initial text
let j;
let wordsleft = 3;
let checking;

// setting up everything used in this activity
function activity3Setup() {
  newspaper = loadImage("newspaper.png"); // loading background
  //clear();
  numActivity = 3; // for switch
  // Hide the activity buttons, show the menu button
  menuButton.show();
  activity1Button.hide();
  activity2Button.hide();
  activity3Button.hide();
  aboutUsButton.hide();
  name.hide();

  // input box for user to guess words
  checking = createInput("");
  checking.position(725, 320);
  checking.size(65, 17);
  checking.input(myInputEvent);
}

// the function that checks if the word is correct
function myInputEvent() {
  if (this.value() == "BREAK") {
    console.log("hello"); // for test
    correction1 = true;
  }
  if (this.value() == "GLAD") {
    console.log("hello2"); // for test
    correction2 = true;
  }
  if (this.value() == "ROD") {
    console.log("hello3"); // for test
    correction3 = true;
  }
}

// drawing all the letters and instructions and top of screen text
function activity3Draw() {
  background("pink");
  image(newspaper, 0, 0); // enlarge
  //NAME AND INSTRUCTIONS
  fill("black");
  textSize(20);
  text("Welcome to the Word Search!", 265, 40);

  fill("black");
  textSize(13);
  //text("Find the words and type them!", 68, 60)
  //ROW 1

  /*fill("black")
  textSize(11)
  text("Word List", 335, 100)*/
  textSize(11);
  text("INPUT HERE", 727, 317);

  /*fill("black")
  textSize(13)
  text("BREAK", 340, 120)
  text("GLAD",343, 140)*/
  textSize(13);
  text("Hints Here!", 732, 200);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("R", 415, 125);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("A", 480, 125);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("Q", 545, 125);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("S", 610, 125);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("K", 675, 125);

  //ROW 2

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("M", 415, 190);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("G", 480, 190);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("L", 545, 190);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("A", 610, 190);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("D", 675, 190);

  //ROW 3

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("Y", 415, 255);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("B", 480, 255);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("E", 545, 255);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("D", 610, 255);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("H", 675, 255);

  //ROW 4

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("G", 415, 320);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("R", 480, 320);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("L", 545, 320);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("O", 610, 320);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("D", 675, 320);

  //ROW 5

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("B", 415, 385);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("U", 480, 385);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("V", 545, 385);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("R", 610, 385);

  fill("darkblue");
  stroke("black");
  textSize(70);
  text("E", 675, 385);

  // for hovering over letters -- all the hints here
  if (
    //B
    mouseX > 410 &&
    mouseX < 470 &&
    mouseY > 330 &&
    mouseY < 390
  ) {
    fill("red");
    textSize(13);
    text("Keep going!!", 725, 230);
  }
  if (
    // R
    mouseX > 480 &&
    mouseX < 540 &&
    mouseY > 265 &&
    mouseY < 325
  ) {
    fill("red");
    textSize(13);
    text("Ur almost", 735, 225);
    text("there!", 745, 245);
  }
  if (
    // E
    mouseX > 550 &&
    mouseX < 600 &&
    mouseY > 200 &&
    mouseY < 265
  ) {
    fill("red");
    textSize(13);
    text("Just 2 more", 728, 225);
    text("letters!", 745, 245);
  }
  if (
    // A
    mouseX > 620 &&
    mouseX < 670 &&
    mouseY > 135 &&
    mouseY < 205
  ) {
    fill("red");
    textSize(13);
    text("Just 1 more", 728, 225);
    text("letter!", 745, 245);
  }
  if (
    // R
    mouseX > 620 &&
    mouseX < 670 &&
    mouseY > 330 &&
    mouseY < 390
  ) {
    fill("red");
    textSize(13);
    text("Keep going!!", 725, 230);
  }
  if (
    // O
    mouseX > 620 &&
    mouseX < 670 &&
    mouseY > 265 &&
    mouseY < 325
  ) {
    fill("red");
    textSize(13);
    text("Just 1 more", 728, 225);
    text("letter!", 745, 245);
  }

  if (
    // G
    mouseX > 490 &&
    mouseX < 537 &&
    mouseY > 135 &&
    mouseY < 205
  ) {
    fill("red");
    textSize(13);
    text("Keep going!", 728, 225);
    //text("letters!", 745,245)
  }
  if (
    // L
    mouseX > 540 &&
    mouseX < 590 &&
    mouseY > 135 &&
    mouseY < 205
  ) {
    fill("red");
    textSize(13);
    text("Just 2 more", 728, 225);
    text("letters!", 745, 245);
  }

  // if statement for if the user got one of them, updates words left
  if (correction1 || correction2 || (correction3 && actual)) {
    fill("white");
    textSize(21);
    j = "Congrats, you got one!";
    wordsleft = 2;
  }

  // if statement for if the user got two of them, updates words left
  if (
    (correction1 && correction2) ||
    (correction2 && correction3) ||
    (correction1 && correction3)
  ) {
    fill("white");
    textSize(21);
    j = "You got two of the three!";
    wordsleft = 1;
  }

  //if statement for if user got all, updates words left
  if (correction1 && correction2 && correction3) {
    fill("green");
    textSize(21);
    j = "YOU GOT THEM ALL!";
    wordsleft = 0;
    completedGames++;
  }

  text(j, 290, 60);
  fill("white");
  textSize(15);

  // words to be found block for top right
  {
    fill("white");
    text("Words to be found: ", 630, 40);
    fill("green");
    text(wordsleft, 760, 40);
    stroke("black");
    strokeWeight(1);
  }
  stroke("black");
  strokeWeight(1);
  fill(255, 88);
  rect(621, 17, 155, 40);

  textSize(25);
  fill(255, 128);
  rect(27, 70, 335, 240);
  fill("black");
  //textStroke(3)

  // instructions tab
  text("INSTRUCTIONS", 90, 100);

  textSize(15);
  fill("red");
  text("Use the letter grid to find all the hidden words!", 45, 135);
  text("Hovering over a letter that is part of", 70, 170);
  text("a hidden word will reveal a hint!", 80, 205);
  text("Use the counter in the top right to help you", 50, 240);
  text("figure out if you got a word!", 83, 275);
  stroke("black");
  strokeWeight(1);
}
