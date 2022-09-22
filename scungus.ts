class scungus {

/*------------------------ base declarations ------------------------*/

/*---------------------- variable declarations ----------------------*/

scungusBought = 0;			// number of scungus bought
scunguses = 0;				// number of scungus
scungusClicks = 0;			// number of scungus clicked
scungusObtainus = 0;			// total number of scungus
scungusCost= 10;				// sost of scungus

/*---------------------- multiplicative scungi ----------------------*/

scungusMultiplicative= 0;	// scungus multiplier

/*---------------------------- functions ----------------------------*/

clickScungus() {
	this.scungusMultiplicative = 1+(Math.floor(this.scungusBought*2.5));
	this.scunguses += this.scungusMultiplicative;
	this.scungusClicks += 1;

	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusBought")!.innerHTML = this.scungusBought.toString();
	document.getElementById("scungusCost")!.innerHTML = this.scungusCost.toString();
	document.getElementById("scungusClicks")!.innerHTML = this.scungusClicks.toString();

}

buyScungus() {
	if (this.scungusBought <= 0 && this.scunguses >= this.scungusCost) {
		this.scungusBought += 1;
		this.scunguses -= 10;
		this.scungusCost == 10;
		this.scungusCost = this.scungusCost+17;
	}

	if (this.scunguses >= this.scungusCost) {
		this.scunguses -= this.scungusCost;
		this.scungusBought += 1;
		this.scungusCost = this.scungusCost+17;
	}


	document.getElementById("scunguses")!.innerHTML = this.scunguses.toString();
	document.getElementById("scungusBought")!.innerHTML = this.scungusBought.toString();
	document.getElementById("scungusCost")!.innerHTML = this.scungusCost.toString();
	document.getElementById("scungusClicks")!.innerHTML = this.scungusClicks.toString();
}

}

module.exports = new scungus();
