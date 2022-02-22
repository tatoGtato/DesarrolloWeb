var proceso = "";
var suma = "";
var suma2 = "";
var count = 0;

function uno(){
	document.getElementById("textos").innerHTML = proceso + 1;
	proceso += 1;
	suma += 1;
}

function dos(){
	document.getElementById("textos").innerHTML = proceso + 2;
	proceso += 2;
	suma += 2;
}

function tres(){
	document.getElementById("textos").innerHTML = proceso + 3;
	proceso += 3;
	suma += 3;
}

function cuatro(){
	document.getElementById("textos").innerHTML = proceso + 4;
	proceso += 4;
	suma += 4;
}

function cinco(){
	document.getElementById("textos").innerHTML = proceso + 5;
	proceso += 5;
	suma += 5;
}

function seis(){
	document.getElementById("textos").innerHTML = proceso + 6;
	proceso += 6;
	suma += 6;
}

function siete(){
	document.getElementById("textos").innerHTML = proceso + 7;
	proceso += 7;
	suma += 7;
}

function ocho(){
	document.getElementById("textos").innerHTML = proceso + 8;
	proceso += 8;
	suma += 8;
}

function nueve(){
	document.getElementById("textos").innerHTML = proceso + 9;
	proceso += 9;
	suma += 9;
}

function cero(){
	document.getElementById("textos").innerHTML = proceso + 0;
	proceso += 0;
	suma += 0;
}

function mas(){
	document.getElementById("textos").innerHTML = proceso + '+';
	proceso += '+';
	suma2 = parseFloat(suma);
	suma = "";
	count = 0;

}

function resta(){
	document.getElementById("textos").innerHTML = proceso + '-';
	proceso += '-';
	suma2 = parseFloat(suma);
	suma = "";
	suma += '-';
	count = 0;
}

function punto(){
	if (count != 0){
		alert('Un decimal no puede tener mas de un punto')
	}
	else{
		document.getElementById("textos").innerHTML = proceso + '.';
		proceso += '.';
		suma += '.';
		count += 1;
	}
}

function iwal(){
	if (proceso == "" && suma == "" && suma2 == "")
		document.getElementById("textos").innerHTML = "";
	
	 else if (suma != "" && suma2 == "")
		document.getElementById("textos").innerHTML = suma;
	
	else
		suma = parseFloat(suma2) + parseFloat(suma);
		document.getElementById("textos").innerHTML = suma;

}	

function ac(){
	document.getElementById("textos").innerHTML = "";
	proceso = "";
	suma = "";
	suma2 = "";
	count = 0;
}



