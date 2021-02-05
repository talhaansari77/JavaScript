let pos = 0;

let box = document.getElementById('box');

let t = setInterval(move, 10);

function move(){
	if(pos >= 150){
		clearInterval(t);
	}
	else{
		pos += 1;
		// px = pixels
		box.style.left = pos + "px";
	}
}