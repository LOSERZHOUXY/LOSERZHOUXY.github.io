var myVideo=document.getElementById("video");
var iconbox=document.getElementById("iconbox");
var poster_img=document.getElementById('poster_img');
function onclick(event) {
  playPause();
}

function playPause(){
	if(myVideo.paused){
	myVideo.play();
	poster_img.style.display="none";
	iconbox.style.display="none";
	} else{
	myVideo.pause();
	iconbox.style.display="block";
	}
	
}


