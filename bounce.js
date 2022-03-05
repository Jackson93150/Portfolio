var pac = document.querySelector(".logopac");
var metro = document.querySelector(".logometro");
var retro = document.querySelector(".logoretro");
var port = document.querySelector(".logoport");
var x = 0;
var y = 50;
var xh = 0.8;
var yh = 1;
var metrox = 300;
var metroy = 250;
var metroxh = 0.8;
var metroyh = -0.5;
var retrox = 550;
var retroy = -250;
var retroxh = -0.3;
var retroyh = 0.3;
var portx = 380;
var porty = 100;
var portxh = 0.4;
var portyh = -0.4;

var start = $(".logopac");
var end = $(".logometro");
var start2 = $(".logoretro");
var start3 = $(".logoport");
var line = $(".line");
var line2 = $(".line2");
var line3 = $(".line3");
var line4 = $(".line4");
var line5 = $(".line5");
var line6 = $(".line6");
var linep = $(".linep");
var linep1 = $(".linep1");
var linep2 = $(".linep2");
var linep3 = $(".linep3");
var linep4 = $(".linep4");
var linep5 = $(".linep5");
var linep6 = $(".linep6");
var linep7 = $(".linep7");
var linep8 = $(".linep8");
var linep9 = $(".linep9");
var linep10 = $(".linep10");
var linep11 = $(".linep11");
var linep12 = $(".linep12");
var cube1 = $("#five");
var cube2 = $('#four');
var cube3 = $("#three");
var cube4 = $('#two');
var cube5 = $("#one");
var cube6 = $('#six');
var cube7 = $("#seven");



function drawline(line,start,end,a,b,c,d) {
  var posax = start.position().left - a;
  var posay = start.position().top - b;

  var posbx = end.position().left - c;
  var posby = end.position().top - d;

  var centerx;
  var centery;
  var distance;
  var angle;

  centerx = (posax + posbx) / 2;
  centery = (posay + posby) / 2;

  var angle = (Math.atan2(posay - posby, posax - posbx) * 180) / Math.PI;

  distance = Math.sqrt(Math.pow(posbx - posax, 2) + Math.pow(posby - posay, 2));

  line.css("width", distance + "px");
  line.css("transform", " rotate(" + angle + "deg)");
  line.css("top", centery - line.height() / 2 + start.height() / 2);
  line.css("left", centerx - line.width() / 2 + start.width() / 2);
}

setInterval(function () {
  if(window.innerWidth > 800){
    x += xh;
    y += yh;
    pac.style.top = y + "px";
    pac.style.left = x + "px";
    if (x + xh > 720 || x + xh < -25) {
      xh = -xh;
    }
    if (y + yh > 520 || y + yh < -25) {
      yh = -yh;
    }

    metrox += metroxh;
    metroy += metroyh;
    metro.style.top = metroy + "px";
    metro.style.left = metrox + "px";
    
    if (metrox + metroxh > 710 || metrox + metroxh < -20) {
      metroxh = -metroxh;
    }
    if (metroy + metroyh > 410 || metroy + metroyh < -120) {
      metroyh = -metroyh;
    }

    retrox += retroxh;
    retroy += retroyh;
    retro.style.top = retroy + "px";
    retro.style.left = retrox + "px";
    if (retrox + retroxh > 710 || retrox + retroxh < -10) {
      retroxh = -retroxh;
    }
    if (retroy + retroyh > 200 || retroy + retroyh < -320) {
      retroyh = -retroyh;
    }

    portx += portxh;
    porty += portyh;
    port.style.top = porty + "px";
    port.style.left = portx + "px";
    if (portx + portxh > 710 || portx + portxh < -10) {
      portxh = -portxh;
    }
    if (porty + portyh > 300 || porty + portyh < -220) {
      portyh = -portyh;
    }
  }
  drawline(line,start,end,20,30,20,20);
  drawline(line2,start,start2,20,30,20,20);
  drawline(line3,start2,end,20,30,20,20);
  drawline(line4,start3,end,20,30,20,20);
  drawline(line5,start,start3,20,30,20,20);
  drawline(line6,start2,start3,20,30,20,20);
  drawline(linep,cube1,cube2,0,0,0,10);
  drawline(linep1,cube1,cube4,0,0,0,10);
  drawline(linep2,cube2,cube3,0,0,0,10);
  drawline(linep3,cube7,cube3,0,0,0,30);
  drawline(linep4,cube3,cube5,0,0,0,10);
  drawline(linep5,cube3,cube4,0,0,0,10);
  drawline(linep6,cube1,cube6,0,0,0,10);
  drawline(linep7,cube7,cube6,0,0,0,10);
  drawline(linep8,cube7,cube5,0,0,0,10);
  drawline(linep9,cube2,cube6,0,0,0,0);
  drawline(linep10,cube5,cube6,0,0,0,0);
  drawline(linep11,cube5,cube1,0,0,0,-20);
  drawline(linep12,cube5,cube4,0,5,0,10);
}, 10);
