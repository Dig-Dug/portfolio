function upDate(previewPic){
    var imgURL = previewPic.src;

  //  document.getElementById("preview").style.backgroundColor = "rgb(255 157 104)";
    document.getElementById("preview").style.backgroundImage = "url("+imgURL+")";
  document.getElementById("preview").style.backgroundSize = "cover";
  document.getElementById("preview2").style.backgroundImage = "url("+imgURL+")";
  document.getElementById("preview2").style.backgroundSize = "cover";
  
}

function unDo(){
  //  document.getElementById("preview").style.backgroundColor = "#8e68ff"
   // document.getElementById("preview").innerHTML = "Preview";
    document.getElementById("preview"||"preview2").innerHTML = "";
    document.getElementById("preview"||"preview2").style.backgroundImage="none";
}
/////&&&&&&&&&&&&&&/////////
function upShow(previewPic){
  var imgURL = previewPic.src;

//  document.getElementById("preview").style.backgroundColor = "rgb(255 157 104)";
  document.getElementById("preshow").style.display = imgURL;

}
function unShow(){
  //  document.getElementById("preview").style.backgroundColor = "#8e68ff"
   // document.getElementById("preview").innerHTML = "Preview";
    document.getElementById("preshow").innerHTML = "";
    document.getElementById("preshow").style.display="none";
}

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

var beepThree = $("#beep-three")[0];
$("#nav-three a")
	.mouseenter(function() {
		beepThree.pause();
		beepThree.play();
    });


function openLoginForm() {
    document.body.classList.add("showLoginForm");
}
function closeLoginForm() {
    document.body.classList.remove("showLoginForm");
}


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////




window.onload = function () {
    'use strict';
    
    var progreeBar = document.getElementsByClassName("progress");
        
       progreeBar[0].style.width = "59%";
        progreeBar[1].style.width = "59%";
        progreeBar[2].style.width = "70%";
        progreeBar[3].style.width = "70%";
        progreeBar[4].style.width = "63%";
        progreeBar[5].style.width = "59%";
        progreeBar[6].style.width = "59%";
        progreeBar[7].style.width = "70%";
        progreeBar[8].style.width = "70%";
        progreeBar[9].style.width = "70%";
    
};




///////GSAP
