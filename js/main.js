
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


	//createjs.Tween.get(hacker).to({alpha:1}, 0.5),
	//createjs.Tween.get(pulse0).to({alpha:1}, 0.2)

//hacker_logo.alpha = 0.5;
//hacker_logo.play();
hacker_logo.addEventListener('click', callSceneOne);


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

//// CREATE INDIVIDUAL TWEENS TO ADD

 //var wRed = TweenMax.to(whiteyRed, 1, {alpha:1}, ease:Power0.easeIn ).to(whiteyRed, 1, {alpha:0});
//
//sc1TL.add(wRed ); 


//sc1TL.add( TweenMax.to(whitey, 3, {x:200, opacity:1} ).to(whitey, 3, {x:240, opacity:0.5}).to(whitey, 3, {opacity:1, x:200}));

//sc1TL.add( TweenMax.wait(2000).to(pulse0, 0.3, { opacity:1}));




//var sc1 = new createjs.Timeline({loop:-1, paused:false, bounce:true },createjs.Tween.get(whiteyRed)
//.wait(500).to({alpha:0}, 100).wait(1500).to({alpha:1}, 100).to({alpha:0}, 100).to({alpha:1}, 100).to({alpha:0}, 100)
//.to({alpha:1}, 100),

//createjs.Tween.get(whitey).to({x:200, alpha:1}, 3000).to({x:240, alpha:0.5}, 3000).to({x:200, alpha:1}, 3000),

//createjs.Tween.get(pulse0).wait(2000).to({alpha:1}));

////////  SCENE 2 ASSETS    //////////

var scene2 = new createjs.Container();



//var lipsMask = new createjs.Shape();
//lipsMask.graphics.beginFill('#333').drawCircle(200,200,100);
//lipsMask.cache(0,0,lipsMask.width, lipsMask.height);

var cryptoFace = new createjs.Bitmap('img/egypt-lips.png');
cryptoFace.scaleX = 1;
cryptoFace.scaleY = 1;
cryptoFace.x = 200;
cryptoFace.y = 200;
cryptoFace.alpha = 0;
//cryptoFace.mask = lipsMask;

//cryptoFace.filters = [ new createjs.AlphaMaskFilter(lipsMask.cacheCanvas) ];
//cryptoFace.cache(0,0,cryptoFace.width, cryptoFace.height);

//maskFilter = new createjs.AlphaMaskFilter(lipsMask.cacheCanvas);
//	cryptoFace.filters = [maskFilter];	
	// example  -->bitmap.cache(0, 0, image.width, image.height);


var cryptoFan = new createjs.Bitmap('img/miningfan_clean3.png');
cryptoFan.x = 200;
cryptoFan.y = 200;
cryptoFan.regX = 78;
cryptoFan.regY = 78;
cryptoFan.alpha = 0;



var graphics2 = new createjs.Graphics().beginFill("#000").drawRect(150,200,300,37);
var btn2 = new createjs.Shape(graphics2);
///////////////// BUTTON CALLS
btn2.addEventListener('click', callSceneTwo);


var logosc2 = hacker.clone();
logosc2.x = 50;
logosc2.y = 50;
logosc2.alpha = 0;



//var wealthClip = new createjs.MovieClip({loop:-1});

 var mc = new createjs.MovieClip();
 stage.addChild(mc);



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
//createjs.Tween.get(btn1).to({alpha:0}, 500), createjs.Tween.get(whitey).to({alpha:0}, 1000),
//createjs.Tween.get(whiteyRed).to({alpha:0}, 800), createjs.Tween.get(logo).to({alpha:0}, 600),
//createjs.Tween.get(pulse0).to({alpha:0}, 700),

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
