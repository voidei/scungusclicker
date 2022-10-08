/*------------------------ base declarations ------------------------*/

/*---------------------- variable declarations ----------------------*/

var scungusobtainus = 0;	// total number of scungus
var scunguses = 0;			// number of scungus
var scungusclicks = 0;		// number of scungus clicked
var scungusbought = 0;		// number of scungus bought
var scunguscost = 10;		// cost of scungus

/*---------------------- multiplicative scungi ----------------------*/

/*---------------------------- functions ----------------------------*/

function clickScungus() {
	var scungusmultiplicative = 1+(Math.floor(scungusbought*1.5));
	scunguses += scungusmultiplicative;
	scungusclicks += 1;
	scungusobtainus =+ 1;

	document.getElementById("scunguses").innerHTML = scunguses;
	document.getElementById("scungusbought").innerHTML = scungusbought;
	document.getElementById("scunguscost").innerHTML = scunguscost;
	document.getElementById("scungusclicks").innerHTML = scungusclicks;

}

function buyScungus() {
	if  (scungusbought <= 0 && scunguses >= scunguscost) {
		scungusbought += 1;
		scunguses -= 10;
		scunguscost == 10;
		scunguscost = scunguscost+17;
	}

	if (scunguses >= scunguscost) {
		scunguses -= scunguscost;
		scungusbought += 1;
		scunguscost = scunguscost+17;
	}

	document.getElementById("scunguses").innerHTML = scunguses;
	document.getElementById("scungusbought").innerHTML = scungusbought;
	document.getElementById("scunguscost").innerHTML = scunguscost;
	document.getElementById("scungusclicks").innerHTML = scungusclicks;

}
