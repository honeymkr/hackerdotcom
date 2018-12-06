
function buildSite (){


var stage = new createjs.Stage("container");




var bg = new createjs.Bitmap("img/mtn-grid-web.jpg");
stage.addChild(bg);


var bgbroke = new createjs.Bitmap("img/mtn-broken.png");
stage.addChild(bgbroke);


var bgtl = new createjs.Timeline(
	createjs.Tween.get(bgbroke).wait(1500)
	.to({alpha:0}, 100).to({alpha:1}, 100)
	.to({alpha:0}, 100).to({alpha:1}, 100)
	.to({alpha:0}, 100),


createjs.Tween.get(bg, {loop:-1})
	.to({x:-300}, 25000)
	.to({x:0}, 25000)
	);



// HACKERDOT.COM link goes to website

var hackerlogo = new createjs.Bitmap("img/hkr-logo@1.5x.png");
stage.addChild(hackerlogo);
hackerlogo.x = 15;
hackerlogo.y = 560;
hackerlogo.alpha = 1;


var hackbrkn = new createjs.Bitmap("img/hacker-broke.png");
stage.addChild(hackbrkn);
hackbrkn.y = 540;




var bcbroke = new createjs.Bitmap("img/bc-broken.png");
stage.addChild(bcbroke);
bcbroke.x = 55;
bcbroke.y = 20;
bcbroke.alpha = 0;

var bc = new createjs.Bitmap("img/bc-cert.png");
stage.addChild(bc);
bc.x = 60;
bc.y = 25;
bc.alpha = 0;


var getrich = new createjs.Bitmap("img/getrichnumber.png");
stage.addChild(getrich);
getrich.x = 30;
getrich.y = 260;
getrich.alpha = 0;

var getrichwh = new createjs.Bitmap("img/getrich-wh.png");
stage.addChild(getrichwh);
getrichwh.x = 30;
getrichwh.y = 300;
getrichwh.alpha = 0;

var secrets = new createjs.Bitmap("img/$E¢R3T$.png");
stage.addChild(secrets);
secrets.x = 50;
secrets.y = 50;
secrets.alpha = 0;

///////////////////////////////////////// Head zzz

var skully = new createjs.Bitmap("img/skully.png");
stage.addChild(skully);
skully.x = 45;
skully.y = 200;
skully.scaleX = 1;
skully.alpha = 0;

var skloader = new createjs.Bitmap("img/skloader.png");
stage.addChild(skloader)
skloader.x = 45;
skloader.y = 200;
skloader.alpha = 0;


//buy now goes to meet-up page
var buynow = new createjs.Bitmap("img/buynow-red.png");
stage.addChild(buynow);
buynow.x = 25;
buynow.y = 25;
buynow.alpha = 0;

buynow.addEventListener("click", callMeetUp);

function callMeetUp(event){
var win = window.open("http://meetup.com/hackerdotcom");
alert(event.target + 'meetp-up.com/hackerdot.com');
}

var buynowbkn = new createjs.Bitmap("img/buy-now-broken.png");
stage.addChild(buynowbkn);
buynowbkn.x = 25;
buynowbkn.y = 25;
buynowbkn.alpha = 0;


var payme = new createjs.Bitmap("img/cc-icons.png");
stage.addChild(payme);
payme.x = 255;
payme.y = 485;
payme.alpha = 0;

var fiverb = new createjs.Bitmap("img/5dollars-brkn.png");
stage.addChild(fiverb);
fiverb.x = 123;
fiverb.y = 108;
fiverb.alpha = 0;

var fiver = new createjs.Bitmap("img/5dollars.png");
stage.addChild(fiver);
fiver.x = 123;
fiver.y = 108;
fiver.alpha = 0;

var cryptocoins = new createjs.Bitmap("img/crypto-temp.png");
stage.addChild(cryptocoins);
cryptocoins.x = 30;
cryptocoins.y = 200;
cryptocoins.alpha = 0;



var message = new createjs.Timeline(

createjs.Tween.get(bcbroke)
.to({alpha:1}, 120).wait(1500).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120)
.to({alpha:1}, 120).to({alpha:0}, 120),

createjs.Tween.get(bc).wait(3300)
.to({alpha:1}).wait(2000).to({alpha:0, x:20}, 500),

createjs.Tween.get(getrichwh).wait(1500)
.to({alpha:1}, 100).wait(3500).to({alpha:0}),

createjs.Tween.get(skloader).wait(4000)
.to({alpha:1}).wait(1000).to({alpha:0}, 120).to({alpha:1}, 90)
.to({alpha:0}, 120).to({alpha:1}, 90)
.to({alpha:0}, 120).to({alpha:1}, 90)
.to({alpha:0}, 120).to({alpha:1}, 190).to({alpha:0}),

createjs.Tween.get(skully).wait(6000)
.to({alpha:1}),

createjs.Tween.get(buynowbkn).wait(6000).to({alpha:1}, 100),
createjs.Tween.get(buynow).wait(6200).to({alpha:1}, 100),
createjs.Tween.get(buynowbkn).wait(6300).to({alpha:0}),

createjs.Tween.get(payme).wait(6500).to({alpha:1}, 100),
createjs.Tween.get(fiverb).wait(6700).to({alpha:1}),
createjs.Tween.get(fiver).wait(7000).to({alpha:1}),
createjs.Tween.get(hackbrkn).wait(7200).to({alpha:0}),
createjs.Tween.get(cryptocoins).wait(6500).to({alpha:1}, 100),





);








//var sktween = new createjs.Timeline();
//sktween.addTween( 

//createjs.Tween.get(skloader, {loop:1})
//.to({alpha:1}, 100).wait(2000)
//.to({ alpha:0}, 300)
//.to({alpha:1}, 200),

//createjs.Tween.get(skully, {loop:1})
//.to({alpha:1}, 100)
//.to({alpha:0}, 200)
//.to({alpha:1}, 200)

//)


var tl = new createjs.Timeline();
tl.addTween( 
	


);




//bitmap.addEventListener("click", handleFunc );
function handleFunc(event) {

	console.log('done tween');

}


createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);

stage.update();
}
