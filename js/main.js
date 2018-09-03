
// BASIC HACK_TOGETHER OF COOL_ART OBJECTS 


function buildSite (){

 var stage = new createjs.Stage("thirdeye");

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
glitchBod.x = 215;
glitchBod.y = 80;



var graphics = new createjs.Graphics().beginFill("#000").drawRect(150,200,300,37);
var btn1 = new createjs.Shape(graphics);
btn1.alpha = 0;

var hacker = new createjs.Bitmap('img/hacker_white.png');
hacker.x = 130;
hacker.y = 202;
hacker.alpha = 0;

var jpHacker = new createjs.Bitmap('img/jp_hacker.png');
jpHacker.x = -150;
jpHacker.y = -100;

var pulse0 = new createjs.Bitmap('img/pulse0.png');
pulse0.y = 168;
pulse0.x = 130;
pulse0.alpha = 0;


/////// HACKER LOGO MOVIECLIP
var hacker_logo = new createjs.MovieClip();
hacker_logo.timeline.addTween(createjs.Tween.get(pulse0).to({alpha:1}, 10));
hacker_logo.timeline.addTween(createjs.Tween.get(hacker).wait(25).to({alpha:1}, 10));
hacker_logo.timeline.addTween(createjs.Tween.get(btn1).to({alpha:1, scaleX:1.3, x:-70}, 10));

btn1.addEventListener('click', callSceneOne);

//var helper = new createjs.ButtonHelper(hacker_logo, false, hacker_logo);
 //hacker_logo.addEventListener("click", callSceneOne);
 

/////////////////////  STAGE ADDITIONS //////////////////////////

oneBigEye.addChild(scene1);
scene1.addChild(hacker_logo  );
scene1.addChild(whitey, whiteyRed, glitchBod);
scene1.addChild( jpHacker);



var sc1TL = new TimelineMax(); // USING GREEN SOCK >> REMEMBER Property settings difference
	sc1TL
	.to(whiteyRed, 0.5, {alpha:1})
	.to(whiteyRed, 0.1, {alpha:0})
	.to(whiteyRed, 0.1, {alpha:1})
	.to(whiteyRed, 0.1, {alpha:0})
	.to(whiteyRed, 0.1, {alpha:1})
	.to(btn1, 1, {width:"200px"})
	.to(whitey, 3, {alpha:1, x:200})
	.to(whitey, 3, {x:240, alpha:0.5})
	.to(whitey, 3, {x:200, alpha:1})
	
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
cryptoFace.scaleX = 1;
cryptoFace.scaleY = 1;
cryptoFace.x = 200;
cryptoFace.y = 200;
cryptoFace.alpha = 0;


var cryptoFan = new createjs.Bitmap('img/miningfan_clean3.png');
cryptoFan.x = 200;
cryptoFan.y = 200;
cryptoFan.regX = 78;
cryptoFan.regY = 78;
cryptoFan.scaleX = 0.7;
cryptoFan.scaleY = 0.7;
cryptoFan.alpha = 1;

var cryptoFan2 = cryptoFan.clone();
cryptoFan2.x = 300;
cryptoFan2.y = 200;

var cryptoFan3 = cryptoFan.clone();
cryptoFan3.x = 400;
cryptoFan3.y = 200;

var payment = new createjs.Bitmap('img/cc-icons.png');
payment.x = 505;
payment.y = 260;

var get_rich = new createjs.Bitmap('img/getrich-wh.png');
get_rich.x = 200;
get_rich.y = 450;

var jp_buynow = new createjs.Bitmap('img/jp_buynow.png');
jp_buynow.x = 220;
jp_buynow.y = 105;


var graphics2 = new createjs.Graphics().beginFill("#000")
.drawRect(150,220,400,37);
var btn2 = new createjs.Shape(graphics2);
///////////////// BUTTON CALLS
btn2.addEventListener('click', callSceneTwo);


var logosc2 = hacker.clone();
logosc2.x = 150;
logosc2.y = 220;
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
miner.x = 400;
miner.y = 470;


//var instantWealth = new createjs.Bitmap('img/instantwealth.png');
// think the fan needs its own tween to add to sc2TL

var sc2TL = new TimelineMax({ paused:true });

sc2TL
	.to(cryptoFace, 1, {alpha:1})
	//.to(instantWealth, 1, {alpha:1})
	.to(cryptoFan, 1, {rotation:360})
	.to(logosc2, 1, {alpha:1})
	;

//////////////////// STAGE ADDITIONS  //////////////////////////////

oneBigEye.addChild(scene2);
scene2.addChild(cryptoFace, cryptoFan);
scene2.addChild(cryptoFan, cryptoFan2, cryptoFan3);
scene2.addChild(payment, get_rich, jp_buynow, miner, instant);

scene2.addChild(btn2, logosc2);
//scene2.addChild(mc);




////////  SCENE 3 //////////


var scene3 = new createjs.Container();

 var graphics3 = new createjs.Graphics().beginFill("#ff00ff").drawCircle(0,0,50);
 var btn3 = new createjs.Shape(graphics3);
 	btn3.addEventListener('click', callSceneThree); 



 var sphinxy = new createjs.Bitmap('img/sphinx.png');
 sphinxy.x = 70;
 sphinxy.y = 170;
 sphinxy.alpha = 0.5;

 var buyNow = new createjs.Bitmap('img/buynow-red.png');
 var buyBroken = new createjs.Bitmap('img/buy-now-broken.png');
buyNow.x = 100;
buyNow.y = 100;

buyBroken.x = 180;
buyBroken.y = 180;

 oneBigEye.addChild(scene3)
 scene3.addChild(btn3);
 scene3.addChild(sphinxy);
 scene3.addChild(buyNow, buyBroken);


/////////////////////   CONTROLS FOR SCENES _ SWITCHING BETWEEN



 //var mc = new createjs.MovieClip({loop:-1, labels:{myLabel:20}});
 //stage.addChild(mc);


function callSceneOne(){
sc1TL.reverse();
createjs.Tween.get(oneBigEye).to({x:-900 }, 2500, createjs.Ease.cubicInOut).call(runSceneTwo); 

}; ///// END CALL SCENE 1



function runSceneTwo(){  sc2TL.play(); console.log('scene 2 called');  };


function callSceneTwo(event){

	createjs.Tween.get(oneBigEye).to({x:-1800 }, 2500, createjs.Ease.cubicInOut).call(runSceneThree);
};

function runSceneThree( ) {

var sc3 = new createjs.Timeline(

	createjs.Tween.get(sphinxy).to({alpha:1}, 2000),

 );
 }; 


function callSceneThree(event){

	createjs.Tween.get(oneBigEye).to({x:0 }, 2500, createjs.Ease.cubicInOut).call(runSceneOne);

};

function runSceneOne ( )  {
	sc1TL.play();
console.log("start first anime ");

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
