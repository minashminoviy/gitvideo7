let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick = () =>{ 
		document.getElementById("zapoln").style.display = "none";
		document.getElementById("pokaz").style.display = "block";
		listVideo.forEach(vid => vid.classList.remove('active'));
		video.classList.add('active');
		if(video.classList.contains('active')){
			let src = video.children[0].getAttribute('src');
			mainVideo.src = src;
			let text = video.children[1].innerHTML;
			title.innerHTML	= text;
		};
	};
});

function ubrat(){
	document.getElementById("pokaz").style.display = "none";
	document.getElementById("zapoln").style.display = "block";
}
function vernut(){
	document.getElementById("pokaz").style.display = "block";
	document.getElementById("zapoln").style.display = "none";
}

var a;
function mychfont()
{
if(a==1) { document.getElementById("zapoln").style.fontFamily = "Monomakh";
return a=0; }
else{ document.getElementById("zapoln").style.fontFamily = "Heinrich";
return a=1; }
}

var b;
function mychfont2()
{
var ele = document.getElementsByClassName('svet');
if(b==1) { 
if (ele[0].style.fontFamily == "Skellyman") {
	for (var i = 0; i < ele.length; i++ ) {
		ele[i].style.fontFamily = "AmadeusAP";
        ele[i].style.fontSize = "30px";
	}
} 
return b=0; 
}
else{ 
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.fontFamily = "Skellyman";
        ele[i].style.fontSize = "26px";
    }
return b=1; 
}
}

