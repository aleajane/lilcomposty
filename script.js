var j = 0;
var txt = 'Drag & drop the items to feed Composty!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (j < txt.length) {
		document.getElementById("intro").innerHTML += txt.charAt(j);
		j++;
		setTimeout(typeWriter, speed);
	}
}

window.onload = function () {
	typeWriter();

}

// COMPOSTY
let counts = 0;
let trials = 0;
let selectedItem = "";
let placeable = false;

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev, item) {
	ev.dataTransfer.setData("text", ev.target.id);
	selectedItem = item;
	placeable = true;
}

function drop(ev) {
	ev.preventDefault();
	if (placeable) {
		if (selectedItem != "bottles" && selectedItem != "bones" && selectedItem != "candles") {
			var data = ev.dataTransfer.getData("text");
			ev.target.appendChild(document.getElementById(data));
			confirm(`Yummy! Composty loves ${selectedItem} and you 🥰❤️`);
			
			var emotion = document.getElementById("divBin");
			emotion.style.backgroundImage = "url('composty/compostyHappy.PNG')";
			counts += 1;
 			document.getElementById("count").innerHTML = counts;

			trials += 1;
			console.log(trials)
			console.log(counts)
			// if trials === 2 {
			// 	document.getElementById("finish").innerHTML = `Thanks for feeding Composty!`;
			// }
			// else {
			// 	continue;
			// }
		} 

		else {
			confirm(`Oh no! Composty can't eat ${selectedItem}! He is going to get sick! 🤧😭`);
			trials += 1;
			var emotion = document.getElementById("divBin");
			emotion.style.backgroundImage = "url('composty/compostySad.PNG')";
			counts -= 1;
 			document.getElementById("count").innerHTML = counts;
		}
	}
}

