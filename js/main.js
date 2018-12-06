

function loadSite () { 

		canvas = document.getElementById("thirdEye");
		stage = new createjs.Stage(canvas);
		//stage.enableMouseOver(20);
		
		 var oneBigEye = new createjs.Container();
		 stage.addChild(oneBigEye);

	// PRELOADER SETUP
		borderPadding = 10;
		var barHeight = 20;

		loaderColor = createjs.Graphics.getRGB(247, 247, 247);
		loaderBar = new createjs.Container();

		bar = new createjs.Shape();
		bar.graphics.beginFill(loaderColor).drawRect(0, 0, 1, barHeight).endFill();

		loaderWidth = 300;

		var bgBar = new createjs.Shape();
		var padding = 3
		bgBar.graphics.setStrokeStyle(1).beginStroke(loaderColor).drawRect(-padding / 2, -padding / 2, loaderWidth + padding, barHeight + padding);
		loaderBar.x = 600 - loaderWidth >> 1;
		loaderBar.y = 600 - barHeight >> 1;
		loaderBar.addChild(bar, bgBar);
		stage.addChild(loaderBar);
		
		var preload = new createjs.LoadQueue(true);
		//preload.loadManifest();
		
		preload.on("progress", handleProgress);
		preload.on("complete", buildSite);

		preload.loadManifest([
			{src: "/img/_background.jpg", id: "background"},
			{src: "whitey.png", id: "whitey"},
			{src:"WhiteyRed.png", id: "whiteyRed"},
			{src:"glitchBod.png", id: "glitchBod"},
			{src:"hacker-broke.png", id: "brokeyHack"},
			{src:"hacker_white.png", id: "hacker"},
			{src:"jp_hacker", id:"jpHacker"},
			{src:"pulse0.png", id:"pulse0"},
			{src:"egypt-lips.png", id: "cryptoFace"},
			{src:"miningfan_clean3.png", id:"cryptoFan"},
			{src:"cc-icons.png", id:"payment"},
			{src:"btc.png", id: "btc"},
			{src:"getrich-wh.png", id:"get_rich"},
			{src:"hacker_green.png", id:"logosc2"},
			{src:"jp_buynow_lg.png", id:"jpBlack"},
			{src:"instantwealth_white.png", id:"instant"},
			{src:"sphinx.png", id:"sphinxy"},
			{src:"sphinxGlitch.png", id:"sphinxyCut"},
			{src:"please.png", id:"please"},
			{src:"security_cam.png", id:"secOne"},
			{src:"secrets_white.png", id:"secrets"},
			{src:"jp_buynow.png", id:"jp_buynow"},
			{src:"brokenlink-sm.png", id:"broke"}
		], true, '/img/');
	};


	function handleProgress(event) {
		bar.scaleX = event.loaded * loaderWidth;
	}

	function handleComplete(event) {
		loaderBar.visible = false;
		stage.update();
	}	


function buildSite (){
  		
var background = new createjs.Bitmap(preload.getResult("background"));
background.x = -50;
oneBigEye.addChild(background);

/////////////////////  SCENE 1 //////////
var scene1 = new createjs.Container();

var whitey = new createjs.Bitmap(preload.getResult("whitey"));
whitey.x = 215;
whitey.y = 80;
whitey.alpha = 0;

var whiteyRed = new createjs.Bitmap(preload.getResult("whiteyRed"));
whiteyRed.x = 200;
whiteyRed.y = 180;
whiteyRed.alpha = 0;

var glitchBod = new createjs.Bitmap(preload.getResult("glitchBod"));
glitchBod.x = 185;
glitchBod.y = 80;
glitchBod.alpha = 0;

var glitch = new createjs.Shape();  // SHAPE
var gl = new createjs.Container();     // CONTAINER
gl.addChild(glitch);

  // BITMAP

glitchBod.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE

  glitch.graphics.beginFill('#fff').drawRect(0, 0, 20, 500);
  gl.cache(0,0,20,500);

createjs.Tween.get(glitch, {loop:true})
	.to({x:310}, 2000, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	gl.cache(0,0,310,500); 
      glitchBod.cache(0,0,glitchBod.image.width,glitchBod.image.height);
    });

  glitchBod.filters = [
            new createjs.AlphaMaskFilter(gl.cacheCanvas)
  ];
  glitchBod.cache(0,0,glitchBod.image.width,glitchBod.image.height);
}

var brokyHack = new createjs.Bitmap(preload.getResult("brokeyHack"));
brokyHack.x = 135;
brokyHack.y = 182;

var graphics = new createjs.Graphics().beginFill("#000").drawRect(150,200,300,37);
var btn1 = new createjs.Shape(graphics);
btn1.alpha = 1;
btn1.scaleX = 0.1;
btn1.cursor = 'pointer';
btn1.x=-100;

var hacker = new createjs.Bitmap(preload.getResult("hacker_green"));
hacker.x = 130;
hacker.y = 200;

var jpHacker = new createjs.Bitmap(preload.getResult("jpHacker"));
jpHacker.x = -180;
jpHacker.y = -100;
jpHacker.alpha = 0;

var pulse0 = new createjs.Bitmap(preload.getResult("pulse0"));
pulse0.y = 168;
pulse0.x = 150;
pulse0.alpha = 0;



////////////////////  SCENE 2    //////////
var scene2 = new createjs.Container();

var cryptoFace = new createjs.Bitmap(preload.getResult("cryptoFace"));
cryptoFace.scaleX = 1;   cryptoFace.scaleY = 1;
cryptoFace.x = 150;   cryptoFace.y = 210;
cryptoFace.alpha = 0;

var cryptoMask = new createjs.Shape();  // SHAPE
var mskC = new createjs.Container();     // CONTAINER
mskC.addChild(cryptoMask);

cryptoFace.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE
  cryptoMask.graphics.beginFill('#fff').drawRect(0, 0, 466, 30);
  mskC.cache(0,0,466,30);

createjs.Tween.get(cryptoMask, {loop:false}).to({ scaleY:20}, 2000, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	mskC.cache(0,0,300,276); 
      cryptoFace.cache(0,0,cryptoFace.image.width,cryptoFace.image.height);

    });

  cryptoFace.filters = [
            new createjs.AlphaMaskFilter(mskC.cacheCanvas)
          ];
  cryptoFace.cache(0,0,cryptoFace.image.width,cryptoFace.image.height);
}

var cryptoFan = new createjs.Bitmap(preload.getResult("cryptoFan"));
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

var payment = new createjs.Bitmap(preload.getResult("payment"));
payment.x = 490;
payment.y = 125;
payment.alpha = 0;

var btc = new createjs.Bitmap(preload.getResult("btc"));
btc.x = 490;
btc.y = 80;
btc.scaleY = 0.3;
btc.scaleX = 0.3;
btc.alpha = 0;

var get_rich = new createjs.Bitmap(preload.getResult("get_rich"));
get_rich.x = 180;
get_rich.y = 490;
get_rich.alpha = 0;

var graphics2 = new createjs.Graphics().beginFill("#000").drawRect(135,182,400,37);
var btn2 = new createjs.Shape(graphics2);
btn2.addEventListener('click', callSceneTwo);
btn2.cursor = 'pointer';

btn2.on('mouseover', function(){
	this.alpha= 0.5;
});
btn2.on('mouseout', function(){
this.alpha = 1;
});


var logosc2 = new createjs.Bitmap(preload.getResult("hacker_gold"))
logosc2.x = 135;
logosc2.y = 182;
logosc2.alpha = 0;

var jpBlack = new createjs.Bitmap(preload.getResult("jp_buynow"));
jpBlack.x = 100;
jpBlack.y = 500;
jpBlack.alpha = 0;

//////////  INSTANT WEALTH ///////////////////////

var imgSheen = new createjs.Shape();  // SHAPE
var c = new createjs.Container();     // CONTAINER
c.addChild(imgSheen);

var instant = new createjs.Bitmap(preload.getResult("instant")); 
instant.x = 200;
instant.y = 100;
  // BITMAP

instant.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE

  imgSheen.graphics.beginFill('#fff').drawRect(0, 0, 466, 30);
  c.cache(0,0,466,30);

createjs.Tween.get(imgSheen, 
	{loop:true}).to({y:300}, 1500, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	c.cache(0,0,209,468); 
      instant.cache(0,0,instant.image.width,instant.image.height);
});

  instant.filters = [
            new createjs.AlphaMaskFilter(c.cacheCanvas)
          ];
  instant.cache(0,0,instant.image.width,instant.image.height);
}


////////////////////  SCENE 3 //////////
var scene3 = new createjs.Container();

 var sphinxy = new createjs.Bitmap(preload.getResult("sphinxy"));
 sphinxy.x = 150;
 sphinxy.y = 195;
 sphinxy.alpha = 1;

var sphinxyCut = new createjs.Bitmap(preload.getResult("sphinxyCut"));
sphinxyCut.x = 150;
sphinxyCut.y = 195;

var sphMask = new createjs.Shape();  // SHAPE
var sphC = new createjs.Container();     // CONTAINER
sphC.addChild(sphMask);

sphinxyCut.image.onload = function() {   // LOAD, TWEEN, MASK UPDATE
  sphMask.graphics.beginFill('#fff').drawRect(0, 0, 427, 30);
  sphC.cache(0,0,427,30);
createjs.Tween.get(sphMask, {loop:true, bounce:true}).to({y:500}, 2000, createjs.Ease.quadOutIn)
  	.on("change", function() { 
    	sphC.cache(0,0,427,358); 
      sphinxyCut.cache(0,0,sphinxyCut.image.width,sphinxyCut.image.height);
    });
  sphinxyCut.filters = [
            new createjs.AlphaMaskFilter(sphC.cacheCanvas)
          ];
  sphinxyCut.cache(0,0,sphinxy.image.width,sphinxy.image.height);
}

// spritesheet data
var buyImage = {
        images: ["img/buy_now_glitch.png"],
        frames: {width:302, height:132, count:3, regX:0, regY:0, spacing:0, margin:0},
        animations: { over:0, down:1, out:2  },
    };



 var spriteSheet = new createjs.SpriteSheet(buyImage);
 var buyMe = new createjs.Sprite(spriteSheet, "out" );
 buyMe.x = 125;
 buyMe.y = 125;
 buyMe.alpha = 0;

spriteSheet.on("complete", function(event) {	console.log("Complete", event);		});
spriteSheet.on("error", function(event) {	console.log("Error", event);		});

 var buyMore = new createjs.ButtonHelper(buyMe, "out", "over", "down", false, null, "hit"); 
 buyMe.addEventListener("click", callPlease);
 
 
 var please = new createjs.Bitmap('img/please.png');
 please.x = 475;
 please.y = -100;
 please.scaleX = 0.5;
 please.scaleY = 0.5;
 please.alpha = 0;

 function callPlease(event) {
	createjs.Tween.get(please).to({alpha:1, y:10 }, 100);
	buyMe.removeEventListener("click", callPlease );
 }

var secOne = new createjs.Bitmap(preload.getResult("secOne"));
secOne.x = 6;
secOne.y = -40
secOne.scaleX = 0.8;
secOne.scaleY = 0.8;
secOne.alpha = 0;

var secrets = new createjs.Bitmap(preload.getResult("secrets"));
secrets.y = 260;
secrets.x = 770;

var jp_buynow = new createjs.Bitmap(preload.getResult("jp_buynow"));
jp_buynow.x = 220;
jp_buynow.y = 505;
jp_buynow.alpha = 0;



var broke = new createjs.Bitmap(preload.getResult("broke"));
broke.x = 280; //300;
broke.y = 455; //475;
broke.alpha = 0;
//broke.scaleX = 0.6;
//broke.scaleY = 0.6;

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

//var please = new createjs.Bitmap("img/please.png");

 var graphics3 = new createjs.Graphics().beginFill("#000").drawRect(0,0,400, 37 );
 var btn3 = new createjs.Shape(graphics3);
 btn3.addEventListener('click', callSceneThree);
btn3.cursor = "pointer";

btn3.on('mouseover', function(){
	this.alpha = 0.5;
});

btn3.on('mouseout', function(){
	this.alpha=1;
});

 var logosc3 = hacker.clone();
 logosc3.x = 0;
 logosc3.y = 0;
 logosc3.alpha = 0;

 btn3.alpha = 1;
 btn3.x = 0;
 btn3.y = -100;


//////// SCENE ASSET ADDITIONS

oneBigEye.addChild(scene1);
scene1.addChild(  whitey, whiteyRed, glitchBod);
scene1.addChild(jpHacker);
scene1.addChild(   btn1, hacker, brokyHack, pulse0);

oneBigEye.addChild(scene2);
scene2.addChild(cryptoFace);
scene2.addChild(cryptoFan, cryptoFan2, cryptoFan3);
scene2.addChild(btc, payment, jpBlack, get_rich, instant);
scene2.addChild(btn2, logosc2);


oneBigEye.addChild(scene3)

scene3.addChild(please, sphinxy, sphinxyCut);
scene3.addChild(buyMe);
scene3.addChild( btn3, logosc3, broke, broke2, broke3, jp_buynow );
scene3.addChild(secrets, secOne);

/////////////////////  STAGE ADDITIONS //////////////////////////
////////  SCENE LAYOUT SETTINGS //////////

scene1.x = 0;
scene2.y = 0;

scene2.x = 900;
scene2.y = 0;

scene3.x = 1800;
scene3.y = 0;

function callSceneOne(){
sc1TL.reverse();
createjs.Tween.get(oneBigEye).wait(1500)
.to({x:-900 }, 1000, createjs.Ease.cubicInOut).call(runSceneTwo); 

}; ///// END CALL SCENE 1

function runSceneTwo(){  
sc2TL.play(); 
//var timeOut2 =  setTimeout(callSceneTwo, 5000);

};

function callSceneTwo(event){
sc2TL.reverse();
createjs.Tween.get(oneBigEye).to({x:-1800 }, 1500, createjs.Ease.cubicInOut)
.call(runSceneThree);
};

function runSceneThree( ) {
sc3TL.play();
//var timeOut3 =  setTimeout(callSceneThree, 10000);

}; 


function callSceneThree(event){
sc3TL.reverse();
createjs.Tween.get(please).to({y:-100});
buyMe.addEventListener("click", callPlease);

createjs.Tween.get(oneBigEye).to({x:0 }, 2000, createjs.Ease.cubicInOut).call(runSceneOne);

};

function runSceneOne ( )  {
sc1TL.play();
console.log("scene1 called ");

};

// SCENE TWEENS      => USING GREEN SOCK 
var sc1TL = new TimelineMax(); 
sc1TL
.to(whiteyRed, 0.5, {alpha:1, y:80})
.set(brokyHack, {alpha:0})
.to(whiteyRed, 0.1, {alpha:0})
.to(whiteyRed, 0.1, {alpha:1})
.to(whiteyRed, 0.1, {alpha:0})

.to(whiteyRed, 0.1, {alpha:1})
.to(btn1, 0.5, {width:"200px", scaleX:1.3, x:-70}, "+=1.1")
.to(hacker, 0.5, {alpha:1})
.to(glitchBod, 0.5, {alpha:1})
.to(glitchBod, 0.3, {alpha:0.5})
.to(glitchBod, 0.5, {alpha:1})
.to(whitey, 2, {alpha:1, x:200})
.to(whitey, 3, {x:240, alpha:0.5})
.to(whitey, 2, {x:200, alpha:1}, "+=2")
.to(pulse0, 1, {alpha:1, x:125, y:168}, "-=8")
.to(jpHacker, 0.5, {alpha:1}, "-=10")
.to(whitey, 0.3, {alpha:0.5}, "-=1.1")
;

var sc2TL = new TimelineMax({ paused:true });

sc2TL
.to(get_rich, 0.1, {alpha:1}).to(get_rich, 0.1, {alpha:0})
.to(get_rich, 0.1, {alpha:1}).to(get_rich, 0.1, {alpha:1}).to(get_rich, 0.1, {alpha:0})
.to(get_rich, 0.1, {alpha:1}).to(get_rich, 0.1, {alpha:1}).to(get_rich, 0.1, {alpha:0})
.to(get_rich, 0.1, {alpha:1})
.to(jpBlack, 0.4, {alpha:1})
.to(cryptoFace, 0.5, {alpha:1})
//.to(instantWealth, 1, {alpha:1})
.to(cryptoFan, 0.5, {alpha:1, rotation:360})
.to(logosc2, 0.5, {alpha:1}).to(payment, 0.3, {alpha:1})
.to(btc, 0.3, {alpha:1})
;

var sc3TL = new TimelineMax({ paused:true });
sc3TL
.to(btn3, 1, {y:0})
.to(logosc3, 0.3, {alpha:1})
.to(broke, 0.4, {alpha:1, x:300, y:475, scaleX:1, scaleY:1})
.to(broke2, 0.4, {alpha:1, x:370, y:475, scaleX:1, scaleY:1})
.to(broke3, 0.4, {alpha:1, x:440, y:475, scaleX:1, scaleY:1})
.to(jp_buynow, 0.2, {alpha:1})
.to(secOne, 0.3, {alpha:1, y:40})
.to(buyMe, 0.5, {alpha:1}).to(secrets, 1, {x:70})
  ; 
  
  /// END TIMELINES

createjs.Ticker.addEventListener("tick", stage);
stage.update();

};  /// end BuildSite


