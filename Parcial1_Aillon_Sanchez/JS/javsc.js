var wlist = ["imagen","bronquios","malabarista","meta","infeliz","encorvado","hola","podrido",
			"rodilleras","desviar","firma","ecuador","limosna","casamiento","mandar","social",
			"esculpir","pastilla","ecologismo","temperatura","urgente","piso","forma","rey","escribir",
			"batuta","modelar","cubiertos","joven","hijo","estribo","arena","tender","nuca","mamola", 
			"masa","llamada","vigilar","ayudar","nervio","velas","verano","aspirar","india","vino",];

let r_word = Math.floor(Math.random() * (wlist.length + 1) );
var palabra = wlist[r_word];
alert(palabra);
var letra = "";
var palabra_hid = "";
var list= [];
var size = palabra.length; 
var countBody = 0;

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
	if ((list.toString()).replace(/,/g,'') == palabra){
		win();
	}

}

function showBody(){
	countBody += 1;

	switch(countBody){
		case 1:
			document.getElementById("horca").style.display = "none";
			document.getElementById("horca1").style.display = "block";
			break;
		case 2:
			document.getElementById("horca1").style.display = "none";
			document.getElementById("horca2").style.display = "block";
			break;
		case 3:
			document.getElementById("horca2").style.display = "none";
			document.getElementById("horca3").style.display = "block";
			break;
		case 4:
			document.getElementById("horca3").style.display = "none";
			document.getElementById("horca4").style.display = "block";
			break;
		case 5:
			document.getElementById("horca4").style.display = "none";
			document.getElementById("horca5").style.display = "block";
			break;
		case 6:
			document.getElementById("horca5").style.display = "none";
			document.getElementById("horca6").style.display = "block";
			loose();
			break;
	}
}

function showBadLet(letra){
   	h = document.createElement("H2");
    var t = document.createTextNode(letra); 
    h.appendChild(t); 
    div = document.getElementById("erradas")
    div.appendChild(h)
}

function loose(){
	document.getElementById("letra").style.display = "none";
	document.getElementById("boton").style.display = "none";
	document.getElementById("boton_r").style.display = "block";
	document.getElementById("erradas").innerHTML = "";

	h = document.createElement("H1");
	var t = document.createTextNode("PERDISTE"); 
	h.appendChild(t);
	div = document.getElementById("erradas")
    div.appendChild(h)

} 

function win(){
	document.getElementById("letra").style.display = "none";
	document.getElementById("boton").style.display = "none";
	document.getElementById("boton_r").style.display = "block";
	document.getElementById("erradas").innerHTML = "";

	h = document.createElement("H1");
	var t = document.createTextNode("GANASTE"); 
	h.appendChild(t);
	div = document.getElementById("erradas")
    div.appendChild(h)
}

function startGame() {
    hide_word(palabra);
}

document.onload = startGame();
