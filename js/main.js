
// BASIC HACK_TOGETHER OF COOL_ART OBJECTS 


function buildSite (){

 var stage = new createjs.Stage("thirdeye");
	stage.enableMouseOver(10);


 var oneBigEye = new createjs.Container();
 stage.addChild(oneBigEye);

  

var background = new createjs.Bitmap("img/_super.jpg");
background.x = -50;
oneBigEye.addChild(background);


////////  SCENE 1 //////////


var scene1 = new createjs.Container();


var whitey = new createjs.Bitmap('img/whitey.png');
whitey.x = 215;
whitey.y = 80;
whitey.alpha = 0;

var whiteyRed = new createjs.Bitmap('img/WhiteyRed.png');
whiteyRed.x = 200;
whiteyRed.y = 80;
whiteyRed.alpha = 0;

var glitchBod = new createjs.Bitmap('img/glitchBod.png');
glitchBod.x = 202;
glitchBod.y = 80;
glitchBod.alpha = 0;



var graphics = new createjs.Graphics().beginFill("#000").drawRect(150,200,300,37);
var btn1 = new createjs.Shape(graphics);
btn1.alpha = 1;
btn1.scaleX = 0.1;
btn1.cursor = 'pointer';

var hacker = new createjs.Bitmap('img/hacker_white.png');
hacker.x = 130;
hacker.y = 202;
hacker.alpha = 0;

var jpHacker = new createjs.Bitmap('img/jp_hacker.png');
jpHacker.x = -180;
jpHacker.y = -100;
jpHacker.alpha = 0;


var pulse0 = new createjs.Bitmap('img/pulse0.png');
pulse0.y = 168;
pulse0.x = 150;
pulse0.alpha = 0;


btn1.addEventListener('click', callSceneOne);

// ADD TIMEOUT HERE =>

var timeOut1 =  setTimeout(callSceneOne, 5000);


/////////////////////  STAGE ADDITIONS //////////////////////////

oneBigEye.addChild(scene1);

scene1.addChild(  whitey, whiteyRed, glitchBod);
scene1.addChild(jpHacker);
scene1.addChild(btn1, hacker, pulse0);



var sc1TL = new TimelineMax(); // USING GREEN SOCK >> REMEMBER Property settings difference
	sc1TL
	.to(whiteyRed, 0.5, {alpha:1})
	.to(whiteyRed, 0.1, {alpha:0})
	.to(whiteyRed, 0.1, {alpha:1})
	.to(whiteyRed, 0.1, {alpha:0})
	.to(whiteyRed, 0.1, {alpha:1})
	.to(btn1, 0.5, {width:"200px", scaleX:1.3, x:-70}, "+=1.1")
	.to(hacker, 0.5, {alpha:1})
	.to(whitey, 2, {alpha:1, x:200})
	.to(whitey, 3, {x:240, alpha:0.5})
	.to(whitey, 2, {x:200, alpha:1}, "+=2")
	.to(pulse0, 1, {alpha:1, x:125, y:168}, "-=8")
	.to(jpHacker, 0.5, {alpha:1}, "-=10")
	.to(glitchBod, 0.5, {alpha:1}).to(glitchBod, 0.3, {alpha:0.5}).to(glitchBod, 0.5, {alpha:1})
	.to(whitey, 0.3, {alpha:0.5}, "-=1.1")
	
;


function onStart(){}

function onChange() {}

function onComplete(){console.log('logo revealed'); }

//var sc1 = new createjs.Timeline({loop:-1, paused:false, bounce:true },createjs.Tween.get(whiteyRed)
//.wait(500).to({alpha:0}, 100).wait(1500).to({alpha:1}, 100).to({alpha:0}, 100).to({alpha:1}, 100).to({alpha:0}, 100)
//.to({alpha:1}, 100),

//createjs.Tween.get(whitey).to({x:200, alpha:1}, 3000).to({x:240, alpha:0.5}, 3000).to({x:200, alpha:1}, 3000),

//createjs.Tween.get(pulse0).wait(2000).to({alpha:1}));

////////  SCENE 2 ASSETS    //////////

var scene2 = new createjs.Container();


var cryptoFace = new createjs.Bitmap('img/egypt-lips.png');
cryptoFace.scaleX = 1;   cryptoFace.scaleY = 1;
cryptoFace.x = 160;   cryptoFace.y = 180;
//cryptoFace.alpha = 0;


var cryptoMask = new createjs.Shape();  // SHAPE
var mskC = new createjs.Container();     // CONTAINER
mskC.addChild(cryptoMask);

/// EITHER BREAK THE FACE INTO TWO PIECES AND ANIMATE SIMPLE 
//OR FIGURE OUT CUSTOM MASK SHAPE

cryptoFace.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE

  cryptoMask.graphics.beginFill('#fff').drawRect(0, 0, 466, 30);
  mskC.cache(0,0,466,30);

createjs.Tween.get(cryptoMask, {loop:true}).to({y:300}, 1000, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	mskC.cache(0,0,300,276); 
      cryptoFace.cache(0,0,cryptoFace.image.width,cryptoFace.image.height);

    });

  cryptoFace.filters = [
            new createjs.AlphaMaskFilter(mskC.cacheCanvas)
          ];

  cryptoFace.cache(0,0,cryptoFace.image.width,cryptoFace.image.height);

}



var cryptoFan = new createjs.Bitmap('img/miningfan_clean3.png');
cryptoFan.x = 160;
cryptoFan.y = 200;
cryptoFan.regX = 78;
cryptoFan.regY = 78;
cryptoFan.scaleX = 0.7;
cryptoFan.scaleY = 0.7;
cryptoFan.alpha = 1;



var cryptoFan2 = cryptoFan.clone();
cryptoFan2.x = 270;
cryptoFan2.y = 200;

var cryptoFan3 = cryptoFan.clone();
cryptoFan3.x = 380;
cryptoFan3.y = 200;


var panic = new createjs.Timeline(
createjs.Tween.get(cryptoFan, {loop:-1 })
.to({rotation:-360}, 500));

var panic2 = new createjs.Timeline(
createjs.Tween.get(cryptoFan2, {loop:-1 })
.to({rotation:-360}, 700));

var panic3 = new createjs.Timeline(
createjs.Tween.get(cryptoFan3, {loop:-1 })
.to({rotation:-360}, 900));






var payment = new createjs.Bitmap('img/cc-icons.png');
payment.x = 490;
payment.y = 125;

var get_rich = new createjs.Bitmap('img/getrich-wh.png');
get_rich.x = 200;
get_rich.y = 474;

var graphics2 = new createjs.Graphics().beginFill("#000")
.drawRect(135,182,400,37);
var btn2 = new createjs.Shape(graphics2);
///////////////// BUTTON CALLS
btn2.addEventListener('click', callSceneTwo);


var logosc2 = hacker.clone();
logosc2.x = 135;
logosc2.y = 182;
logosc2.alpha = 0;
//var wealthClip = new createjs.MovieClip({loop:-1});

//////////  INSTANT WEALTH ///////////////////////

var imgSheen = new createjs.Shape();  // SHAPE
var c = new createjs.Container();     // CONTAINER
c.addChild(imgSheen);

var instant = new createjs.Bitmap("img/instantwealth_white.png"); 
instant.x = 200;
instant.y = 100;
  // BITMAP

instant.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE

  imgSheen.graphics.beginFill('#fff').drawRect(0, 0, 466, 30);
  c.cache(0,0,466,30);

createjs.Tween.get(imgSheen, {loop:true}).to({y:300}, 1500, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	c.cache(0,0,209,468); 
      instant.cache(0,0,instant.image.width,instant.image.height);

    });

  instant.filters = [
            new createjs.AlphaMaskFilter(c.cacheCanvas)
          ];

  instant.cache(0,0,instant.image.width,instant.image.height);

  //scene2.addChild(instant);

}

//////////// ANT MINER


var miner = new createjs.Bitmap('img/antminer.png');
miner.x = 440;
miner.y = 80;


//var instantWealth = new createjs.Bitmap('img/instantwealth.png');
// think the fan needs its own tween to add to sc2TL

var sc2TL = new TimelineMax({ paused:true, loop:-1 });

sc2TL
	.to(cryptoFace, 0.5, {alpha:1})
	//.to(instantWealth, 1, {alpha:1})
	.to(cryptoFan, 0.5, {rotation:360})
	.to(logosc2, 0.5, {alpha:1})
	.to(miner, 0.3, {rotation:360}, '-=1.5')
	;

//////////////////// STAGE ADDITIONS  //////////////////////////////

oneBigEye.addChild(scene2);
scene2.addChild(cryptoFace);
scene2.addChild(cryptoFan, cryptoFan2, cryptoFan3);
scene2.addChild(payment, get_rich, miner, instant);

scene2.addChild(btn2, logosc2);

////////  SCENE 3 //////////


var scene3 = new createjs.Container();



 var sphinxy = new createjs.Bitmap('img/sphinx.png');
 sphinxy.x = 160;
 sphinxy.y = 210;
 sphinxy.scaleX = 0.9;
 sphinxy.scaleY = 0.9;
 sphinxy.alpha = 1;


var sphMask = new createjs.Shape();  // SHAPE
var sphC = new createjs.Container();     // CONTAINER
sphC.addChild(sphMask);


sphinxy.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE

  sphMask.graphics.beginFill('#fff').drawRect(0, 0, 427, 30);
  sphC.cache(0,0,427,30);


createjs.Tween.get(sphMask, {loop:true}).to({scaleY:20}, 1500, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	sphC.cache(0,0,427,358); 
      sphinxy.cache(0,0,sphinxy.image.width,sphinxy.image.height);

    });

  sphinxy.filters = [
            new createjs.AlphaMaskFilter(sphC.cacheCanvas)
          ];

  sphinxy.cache(0,0,sphinxy.image.width,sphinxy.image.height);

}





 var buyNow = new createjs.Bitmap('img/buynow-red.png');
buyNow.x = 190;
buyNow.y = 80;
buyNow.alpha = 0;

//var buyBroken = new createjs.Bitmap('img/buy-now-broken.png');
//buyBroken.x = 180;
//buyBroken.y = 180;

var secrets = new createjs.Bitmap('img/$E¢R3T$_white.png');
secrets.y = 248;
secrets.x = 340;

var moMoney = get_rich.clone();
moMoney.x = 70;
moMoney.y = 200;

var newAlgo = new createjs.Bitmap('img/new_algos.png');
newAlgo.x = 15;
newAlgo.y = 270;

var babyFace = new createjs.Bitmap('img/babyface.png');
babyFace.x = 300;
babyFace.y = 212;
babyFace.alpha = 0.5;

var jp_buynow = new createjs.Bitmap('img/jp_buynow.png');
jp_buynow.x = 220;
jp_buynow.y = 505;
jp_buynow.alpha = 0;

var broke = new createjs.Bitmap('img/brokenlink-sm.png');
broke.x = 280; //300;
broke.y = 455; //475;
broke.alpha = 0;
broke.scaleX = 0.6;
broke.scaleY = 0.6;

var broke2 = broke.clone();
broke2.x = 350;
broke2.y = 455;
broke2.alpha = 0;
broke2.scaleX = 0.6;
broke2.scaleY = 0.6;

var broke3 = broke.clone();
broke3.x = 420;
broke3.y = 455;
broke3.alpha = 0;
broke3.scaleX = 0.6;
broke3.scaleY = 0.6;




 var graphics3 = new createjs.Graphics().beginFill("#000").drawRect(160,340,400, 37 );
 var btn3 = new createjs.Shape(graphics3);

 var logosc3 = hacker.clone();
 logosc3.x = 160;
 logosc3.y = 340;
 logosc3.alpha = 0;

 btn3.addEventListener('click', callSceneThree); 
 btn3.alpha = 0.3;



var sc3TL = new TimelineMax({ paused:true });

sc3TL
	//.to(sphinxy, 1, {alpha:1})
	.to(buyNow, 1, {alpha:1})
	//.to(logosc3, 1, {alpha:1})
	.to(broke, 0.4, {alpha:1, x:300, y:475, scaleX:1, scaleY:1})
	.to(broke2, 0.4, {alpha:1, x:370, y:475, scaleX:1, scaleY:1})
	.to(broke3, 0.4, {alpha:1, x:440, y:475, scaleX:1, scaleY:1})
	.to(jp_buynow, 0.2, {alpha:1})


	  ; /// END TL






 oneBigEye.addChild(scene3)

 scene3.addChild(sphinxy, babyFace);
 scene3.addChild(btn3, logosc3,  broke, broke2, broke3, jp_buynow );
 scene3.addChild(secrets, moMoney, buyNow, newAlgo);


/////////////////////   CONTROLS FOR SCENES _ SWITCHING BETWEEN



 //var mc = new createjs.MovieClip({loop:-1, labels:{myLabel:20}});
 //stage.addChild(mc);


function callSceneOne(){
sc1TL.reverse();
createjs.Tween.get(oneBigEye).wait(2000)
.to({x:-900 }, 2500, createjs.Ease.cubicInOut).call(runSceneTwo); 

}; ///// END CALL SCENE 1



function runSceneTwo(){  
	sc2TL.play(); 

var timeOut2 =  setTimeout(callSceneTwo, 5000);

};


function callSceneTwo(event){

	createjs.Tween.get(oneBigEye).to({x:-1800 }, 2500, createjs.Ease.cubicInOut).call(runSceneThree);
};

function runSceneThree( ) {
	sc3TL.play();
	var timeOut3 =  setTimeout(callSceneThree, 5000);

 }; 


function callSceneThree(event){

	createjs.Tween.get(oneBigEye).to({x:0 }, 2500, createjs.Ease.cubicInOut).call(runSceneOne);

};

function runSceneOne ( )  {
	sc1TL.play();
console.log("scene1 called ");

 };



////////  SETTINGS //////////

	scene1.x = 0;
	scene2.y = 0;

	scene2.x = 900;
	scene2.y = 0;

	scene3.x = 1800;
	scene3.y = 0;
 	



/// DIVE MORE INTO TICKER< HUH?


//createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);

stage.update();


}
