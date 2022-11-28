// variable declaration
let suggest;

//setting up the menu button to be shown
function aboutUsSetup(){
  numActivity = 4;
  // Hide the activity buttons, show the menu button
  menuButton.show();
  activity1Button.hide();
  activity2Button.hide();
  activity3Button.hide();
  aboutUsButton.hide();
  name.hide();
  TheBackground = loadImage("output.png");
  
  /*suggest = createInput('');
  suggest.position(444, 292);
  suggest.size(305,60)*/
}

// all the text and rectangles that are on the about us page
function aboutUsDraw() {
  background(200);
  image(TheBackground,0,0)
   fill("white")
  textSize(20)
  text("Thank you for using FMS Refiner!", 250, 46)
  fill(255,148)
  rect(21,77,355,200);
  textSize(17)
  fill("white")
  
  // creators of app
  text("This app was designed by:", 95, 120)
  text("Mohammed Khamisani, Aiden Kester,", 60, 150)
  text("Chase Normile, and Samuele Scarfone", 60, 180)
  text("Our goal is to help YOU refine your cognitive", 30 , 220)
  text("and motor skills!", 140, 245)
  fill(255,148)
  rect(421,77,355,160);
  fill("red")
  
  // description of what aspect of FMS each activity will target
  text("Activity 1 engages cognitive and motor skills.", 430, 115)
  textSize(11)
  text("- Patterns, Hand eye coordination, Decision Making", 465, 135)
  textSize(17)
  text("Activity 2 is focused on motor skills.", 465, 165)
  textSize(11)
  text("- Hand eye coordination, Color vision testing, Reaction Time", 450,182)
  textSize(17)
  text("Activity 3 is focused on cognitive skills.", 455 , 205)
  textSize(11)
  text("- Patterns, Visual Scanning", 515,225)
  
  fill("cyan")
  text("Suggestions, Complaints, Bugs", 525, 270)
  fill(255,148)
  rect(421,277,355,100);
  
}
