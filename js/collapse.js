var i = elementHeight = document.getElementById("textHolder").offsetHeight;
var open = false;
var show;

function showMore() {
    clearTimeout(show);
    if (open == false){
        document.getElementById("readMore").innerHTML = "Read less";
        } else {
        document.getElementById("readMore").innerHTML = "Read more";
        }
    collapse();
}

function collapse() {
        show = setTimeout(function(){
            if(open == false) {
                i++;
            } else {
                i--;
            }
        document.getElementById('textHolder').style.height = i + 'px';
        if(i == 250) {
            open = true;
            return false;
        }
        else if(i == elementHeight){
            open = false;
            return false;
        }
        collapse();
        showMore();
        }, 2)
}