var wlist = ["imagen","bronquios","malabarista","meta","infeliz","encorvado","hola","podrido",
			"rodilleras","desviar","firma","ecuador","limosna","casamiento","mandar","social",
			"esculpir","pastilla","ecologismo","temperatura","urgente","piso","forma","rey","escribir",
			"batuta","modelar","cubiertos","joven","hijo","estribo","arena","tender","nuca","mamola", 
			"masa","llamada","vigilar","ayudar","nervio","velas","verano","aspirar","india","vino",];

let r_word = Math.floor(Math.random() * (wlist.length) );
var palabra = wlist[r_word];
var letra = "";
var palabra_hid = "";
var list= [];
var size = palabra.length; 
var countBody = 0;
var score = 0;
var audio = new Audio(`./CSS/sound/pd.mp3`);
var hintCounter = 1;

var nombre = "";

function reload(){
	r_word = Math.floor(Math.random() * (wlist.length) );
	palabra = wlist[r_word];
	letra = "";
	palabra_hid = "";
	list= [];
	size = palabra.length; 
	countBody = 0;
	score = 0;
	updateScore();
	hintCounter = 1;

	document.getElementById("letra").style.display = "block";
	document.getElementById("boton").style.display = "block";
	document.getElementById("boton2").style.display = "block";
	document.getElementById("hint").innerHTML = "Pistas: 2";
	document.getElementById("boton_r").style.display = "none";
	document.getElementById("erradas").innerHTML = "";

	document.getElementById("horca").style.display = "block";
	document.getElementById("horca1").style.display = "none";
	document.getElementById("horca2").style.display = "none";
	document.getElementById("horca3").style.display = "none";
	document.getElementById("horca4").style.display = "none";
	document.getElementById("horca5").style.display = "none";
	document.getElementById("horca6").style.display = "none";
}

function wordToList(pal){
	for (var i = 0; i < size; i++){
		list.push(pal[i]); 
	}
}


function hide_word(){ 
	
	for (var i = 0; i < size; i++){
		palabra_hid += "X";
	}
	document.getElementById("pala").innerHTML= palabra_hid;
	wordToList(palabra_hid);
}

function getLet(){
	var letra = document.getElementById("letra").value;
	document.getElementById("letra").value = "";
	checkLet(letra);
}

function checkLet(letra){
	let count = 0;
	let size = palabra.length;
	for (var i = 0; i < size; i++){
		if (palabra[i] == letra){
			showLet(i);
		}
		else{
			count += 1;
		}
	}
	if (count == size){
		
		showBadLet(letra);
		showBody();
	}
}

function showLet(pos) {
	let temp = "";
	list[pos] = palabra[pos];
	document.getElementById("pala").innerHTML= (list.toString()).replace(/,/g,'');
	score += 1;
	updateScore();
	if ((list.toString()).replace(/,/g,'') == palabra){
		win();
	}

}

function showBody(){
	countBody += 1;
	score -= 1;
	updateScore();

	switch(countBody){
		case 1:
			document.getElementById("horca").style.display = "none";
			document.getElementById("horca1").style.display = "block";
			audio.play();
			break;
		case 2:
			document.getElementById("horca1").style.display = "none";
			document.getElementById("horca2").style.display = "block";
			audio.play();
			break;
		case 3:
			document.getElementById("horca2").style.display = "none";
			document.getElementById("horca3").style.display = "block";
			audio.play();
			break;
		case 4:
			document.getElementById("horca3").style.display = "none";
			document.getElementById("horca4").style.display = "block";
			audio.play();
			break;
		case 5:
			document.getElementById("horca4").style.display = "none";
			document.getElementById("horca5").style.display = "block";
			audio.play();
			break;
		case 6:
			document.getElementById("horca5").style.display = "none";
			document.getElementById("horca6").style.display = "block";
			audio.play();
			loose();
			break;
	}
}

function showBadLet(letra){
   	h = document.createElement("H2");
    var t = document.createTextNode(letra); 
    h.appendChild(t); 
    div = document.getElementById("erradas");
    div.appendChild(h);
}

function hint(){
	if (hintCounter >= 0){
		let r_num = Math.floor(Math.random() * (palabra.length) );
		showLet(r_num);
		document.getElementById("hint").innerHTML = "Pistas: " + hintCounter;
	}

	hintCounter -= 1;
}

function updateScore(){
	document.getElementById("score").innerHTML = "Puntaje: " + score;
}

function loose(){
	document.getElementById("letra").style.display = "none";
	document.getElementById("boton").style.display = "none";
	document.getElementById("boton2").style.display = "none";
	document.getElementById("boton_r").style.display = "block";
	document.getElementById("erradas").innerHTML = "";

	h = document.createElement("H1");
	var t = document.createTextNode("PERDISTE"); 
	h.appendChild(t);
	div = document.getElementById("erradas")
    div.appendChild(h)

    h = document.createElement("H1");
	var t = document.createTextNode("La palabra era " + palabra); 
	h.appendChild(t);
	div = document.getElementById("erradas")
    div.appendChild(h)

    var table = document.getElementById("score_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	cell1.innerHTML = nombre;
 	cell2.innerHTML = score;


} 

function win(){
	document.getElementById("letra").style.display = "none";
	document.getElementById("boton").style.display = "none";
	document.getElementById("boton2").style.display = "none";
	document.getElementById("boton_r").style.display = "block";
	document.getElementById("erradas").innerHTML = "";

	h = document.createElement("H1");
	var t = document.createTextNode("GANASTE"); 
	h.appendChild(t);
	div = document.getElementById("erradas")
    div.appendChild(h)

    var table = document.getElementById("score_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	cell1.innerHTML = nombre;
 	cell2.innerHTML = score;


}

function startGame() {

	reload();
	
	nombre = document.getElementById("nombre").value;

	document.getElementById("juego").style.display = "block";
	document.getElementById("ScoreTable").style.display = "none";
    hide_word(palabra);
}

function inicio() {
	document.getElementById("juego").style.display = "none";
	document.getElementById("ScoreTable").style.display = "block";
}	

document.onload = inicio();
