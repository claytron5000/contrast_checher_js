$(document).ready(function(){

  var forg = [255, 255, 255],
      back = [200, 250, 210],
      para = 4.5; // contrast ratio AA small, 1:4.5
      para = 1 / para;

var items = startElem.getElementsByTagName("*");
for (var i = items.length; i--;) {
  items[i];
}

  test_diff(forg, back, para);

});

function luminance( rgb ) {
  var R = channeler(rgb[0]/255);
  var G = channeler(rgb[1]/255);
  var B = channeler(rgb[2]/255);
  //console.log(R);
  var L = 0.2126*R+0.7152*G+0.0722*B;
  return L;
}

function channeler( color) {
  if (color <= 0.03928) {
    color = color / 12.92;
  } else {
    color = Math.pow(((color + 0.055) / 1.055) , 2.4);
  }
  return color;
}

function test_diff( foreground, background, parameter) {
  var foreground_l = luminance(foreground);
  var background_l = luminance(background);
  var diff = Math.abs(foreground_l - background_l);

  if (diff > parameter) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}