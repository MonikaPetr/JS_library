window.onload = function(){
//Kiek paveiksliukų slaideryje
    slideImage();
//Rodyti pirmą paveiksliuką
    slider.getElementsByTagName('li')[0].style.display = "block";
//Paveiksliuko rodymo laikas
}
var slider = document.getElementById('slider');
var i = 0;
function slideImage(){
    var sliderLength =
    slider.getElementsByTagName('li').length - 1;

   var sl = setTimeout(function(){

       if(i == sliderLength){
            i = 0;
            slider.getElementsByTagName('li')[sliderLength].style.display = "none";
        } else {
            slider.getElementsByTagName('li')[i].style.display = "none";
            i++
        }
        slider.getElementsByTagName('li')[i].style.display = "block";

       slideImage();
    }, 1500);
}

function direction(side) {
    
    if(side == "right") {
        if(i == slider.getElementsByTagName("li").length - 1) {
            slider.getElementsByTagName("li")[i].style.display = "none";
            i = 0;
            slider.getElementsByTagName("li")[i].style.display = "block";
        } else {
            slider.getElementsByTagName("li")[i].style.display = "none";
            i++;
            slider.getElementsByTagName("li")[i].style.display = "block";
        }
    }
    if(side == "left") {
        if(i == 0) {
            slider.getElementsByTagName("li")[i].style.display = "none";
            i == slider.getElementsByTagName("li").length - 1
            slider.getElementsByTagName("li")[i].style.display = "block";
        }else {
            slider.getElementsByTagName("li")[i].style.display = "none";
            i--;
            slider.getElementsByTagName("li")[i].style.display = "block";
        }
    }
}