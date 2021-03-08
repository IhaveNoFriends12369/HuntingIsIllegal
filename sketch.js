


//1. PC
var play1,play1Dmg,play1Idle
var play2,play2Idle;
var CowGroup,CowPic,Hurt;
var cowHealth = 10;
var CowHealBar;
//2. sound effect
var stepVeg,stepVeg2
//3. View
var Moosic;
var Money = 0;
var groundGrass
var gameState = "play";
var bg;
function preload()
{

	play1Dmg = loadAnimation("pics/Oooh0.png","pics/Oooh1.png");
	play1Idle = loadAnimation("pics/Oooh0.png");
	// stepVeg = loadSound("sound/gravel1.mp3");
	play2Idle= loadImage("pics/sprite_0.png");
	stepVeg2 = loadSound("sound/Welker.mp3");
bg = loadImage("pics/GhassJ.jpeg");
	Hurt=loadSound("sound/hurt1e.mp3");
	//Moosic=load
	//Change the play1 image to huntvibe later
	
CowPic = loadImage("pics/YesCow.png")
}

function setup() {
	createCanvas(800, 700);

	//player1
	 play1=createSprite(200,600,10,10);
	 play1.addAnimation("Idle",play1Idle);
	 play1.addAnimation("walk",play1Dmg);
	//player2 following player1
    
	play2=createSprite(play1.x - 40,600,10,10);
	play2.addImage("Idle2",play2Idle);

	GroundGrass=createSprite(200,620,800,10);
	GroundGrass.shapeColor = 'green';
	
	

	cowGroup = new Group();


	// CowHealBar = createSprite(cowGroup.x,cowGroup.y - 5,10,cowHealth);

}


function draw() {
  rectMode(CENTER);
  background(bg);

  textSize(32)
  fill(0)
  text("money " + Money,100,100)

  console.log(cowHealth)

  if(gameState==="play"){
	spawnAnimals();
	if(keyDown("d")){
		play1.x = play1.x + 2;
	//  stepVeg.play();
	play1.changeAnimation("walk",play1Dmg);
	} else {
		play1.changeAnimation("Idle",play1Idle);
	}
	if(keyDown("a")){
		play1.x = play1.x - 2;
	//  stepVeg.play();
	}
	if(keyWentDown("d") || keyWentDown("a")){
		 stepVeg2.play();
	} else {
		stepVeg2.stop();

	}
	for(var i = 0;i<cowGroup.length;i++){
		if(mousePressedOver(cowGroup[i])){
cowHealth = cowHealth - 1;
Hurt.play();
		}
	}
 	if(cowHealth === 0){
 cowGroup.destroyEach();
 Money = Money + 1;
 cowHealth = 10;
 	}
	

	cowGroup.setVelocityYEach(2);
cowGroup.collide(GroundGrass);

	play2.x = play1.x - 40;


	 //if(cowGroup){
	// 	gameState= "end";
	// }
	
  } else if(gameState==="end"){
	  
  }


  
  
  drawSprites();
 
}



function spawnAnimals(){
	if(frameCount%100===0){
		var Cow = createSprite(Math.round(random(0,400)),180,20,20);
	Cow.addImage(CowPic);

		Cow.shapeColor='brown';
		Cow.scale = 0.05;
		//Cow.lifetime = 250;
		

		
		cowGroup.add(Cow);
	
	}	//if(mousePressedOver(Cow)){ 
						//&& mouseWentDown(leftButton)){
				//cowHealth = cowHealth - 1;
	
		
		//}
		//if(cowHealth === 0){
			//cow.destroy();
			//Money = Money + 1;
			//cowHealth = 10;
				//}
}

	




