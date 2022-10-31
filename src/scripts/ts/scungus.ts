class scungus {
	// Path: src\scripts\ts\scungus.ts

/*------------------------ base declarations ------------------------*/

/*---------------------- variable declarations ----------------------*/

scungusBought = 0;			// number of scungus bought
scungusCost = 10;			// cost of scungus
scungusAutobought = 0;		// number of autoscungus bought
scungusAutocost = 100;		// cost of autoscungus
scungusUltrabought = 0;			// number of ultrascungus bought
scungusUltracost = 1000;	// cost of ultrascungus
scunguses = 0;				// number of scungus
scungusClicks = 0;			// number of scungus clicked
scungusObtainus = 0;		// total number of scungus
scungusMultiplicative= 0;	// scungus multiplier


lastUpdate = performance.now();

/*---------------------------- functions ----------------------------*/

clickScungus() {
	this.scungusMultiplicative = 1+((Math.floor(this.scungusBought*2.5))+(Math.floor(this.scungusUltrabought*25)));
	this.scunguses += this.scungusMultiplicative
	this.scungusObtainus += this.scungusMultiplicative;
	this.scungusClicks += 1;

	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusClicks")!.innerHTML = this.scungusClicks.toString();
	document.getElementById("scungusObtainus")!.innerHTML = this.scungusObtainus.toString();

}

buyScungus() {
	if (this.scunguses >= this.scungusCost) {
		this.scunguses -= this.scungusCost;
		this.scungusBought += 1;
		this.scungusCost = this.scungusCost+(this.scungusBought+17);
	}


	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusBought")!.innerHTML = this.scungusBought.toString();
	document.getElementById("scungusCost")!.innerHTML = this.scungusCost.toString();
}

buyAutoscungus() {
	if (this.scunguses >= this.scungusAutocost) {
		this.scunguses -= this.scungusAutocost;
		this.scungusAutobought += 1;
		this.scungusAutocost = this.scungusAutocost+(this.scungusAutobought+57);
	}

	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusAutobought")!.innerHTML = this.scungusAutobought.toString();
	document.getElementById("scungusAutocost")!.innerHTML = this.scungusAutocost.toString();
}

buyUltrascungus() {
	if (this.scunguses >= this.scungusUltracost) {
		this.scunguses -= this.scungusUltracost;
		this.scungusUltrabought += 1;
		this.scungusUltracost = this.scungusUltracost+(this.scungusUltracost+531);
	}


	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusUltra")!.innerHTML = this.scungusUltrabought.toString();
	document.getElementById("scungusUltracost")!.innerHTML = this.scungusUltracost.toString();
}

autoScungus = (current: number) => {
	if (this.lastUpdate + 1000 < current) {
		console.log("current diff " + (current - this.lastUpdate));
		this.scunguses += this.scungusAutobought;
		this.scungusObtainus += this.scungusAutobought;
		this.lastUpdate += 1000;
		document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
		document.getElementById("scungusObtainus")!.innerHTML = this.scungusObtainus.toString();
	}
	window.requestAnimationFrame(this.autoScungus)
}

constructor() {
	this.lastUpdate = performance.now();
	window.requestAnimationFrame(this.autoScungus);
}

/*---------------------- local scungus storage ----------------------*/

saveScungus() {
	localStorage.setItem("scungusBought", this.scungusBought.toString());
	localStorage.setItem("scunguses", this.scunguses.toString());
	localStorage.setItem("scungusClicks", this.scungusClicks.toString());
	localStorage.setItem("scungusObtainus", this.scungusObtainus.toString());
	localStorage.setItem("scungusCost", this.scungusCost.toString());
	localStorage.setItem("scungusMultiplicative", this.scungusMultiplicative.toString());
	localStorage.setItem("scungusAutobought", this.scungusAutobought.toString());
	localStorage.setItem("scungusAutocost", this.scungusAutocost.toString());
	localStorage.setItem("scungusUltra", this.scungusUltrabought.toString());
	localStorage.setItem("scungusUltracost", this.scungusUltracost.toString());
	console.log("scungus:) saved");
	alert("scungus:\) saved");
}

loadScungus() {
	if (Number.isNaN) {
		alert("scungus:) not found");
	}
	else {
		this.scungusBought = parseInt(localStorage.getItem("scungusBought")!);
		this.scunguses = parseInt(localStorage.getItem("scunguses")!);
		this.scungusClicks = parseInt(localStorage.getItem("scungusClicks")!);
		this.scungusObtainus = parseInt(localStorage.getItem("scungusObtainus")!);
		this.scungusCost = parseInt(localStorage.getItem("scungusCost")!);
		this.scungusMultiplicative = parseInt(localStorage.getItem("scungusMultiplicative")!);
		this.scungusAutocost = parseInt(localStorage.getItem("scungusAutocost")!);
		this.scungusAutobought = parseInt(localStorage.getItem("scungusAutobought")!);
		this.scungusUltrabought = parseInt(localStorage.getItem("scungusUltrabought")!);
		this.scungusUltracost = parseInt(localStorage.getItem("scungusUltracost")!);
		document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
		document.getElementById("scungusBought")!.innerHTML = this.scungusBought.toString();
		document.getElementById("scungusCost")!.innerHTML = this.scungusCost.toString();
		document.getElementById("scungusClicks")!.innerHTML = this.scungusClicks.toString();
		document.getElementById("scungusObtainus")!.innerHTML = this.scungusObtainus.toString();
		document.getElementById("scungusMultiplicative")!.innerHTML = this.scungusMultiplicative.toString();
		document.getElementById("scungusAutobought")!.innerHTML = this.scungusAutobought.toString();
		document.getElementById("scungusAutocost")!.innerHTML = this.scungusAutocost.toString();
		document.getElementById("scungusUltra")!.innerHTML = this.scungusUltrabought.toString();
		document.getElementById("scungusUltracost")!.innerHTML = this.scungusUltracost.toString();
		console.log("scungus:) loaded");
		alert("scungus:) loaded");
	}
}

deleteScungus() {
	localStorage.clear();
	console.log("scungus:) deleted");
	alert("scungus:) deleted");
}


}


/*-------------------------------------------------------------------*/

module.exports = new scungus();
