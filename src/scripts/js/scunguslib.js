var scungus;
(() => {
    var s = {
            166: s => {
                s.exports = new class {
                    scungusBought = 0;
                    scungusCost = 10;
                    scungusAutobought = 0;
                    scungusAutocost = 100;
                    scunguses = 0;
                    scungusClicks = 0;
                    scungusObtainus = 0;
                    scungi;
                    scungusMultiplicative = 0;
                    lastUpdate = performance.now();
                    clickScungus() {
                        this.scungusMultiplicative = 1 + Math.floor(2.5 * this.scungusBought), this.scunguses += this.scungusMultiplicative, this.scungusObtainus += this.scungusMultiplicative, this.scungusClicks += 1, document.getElementById("scunguses").innerHTML = this.scunguses.toString(), document.getElementById("scungusClicks").innerHTML = this.scungusClicks.toString(), document.getElementById("scungusObtainus").innerHTML = this.scungusObtainus.toString()
                    }
                    buyScungus() {
                        this.scunguses >= this.scungusCost && (this.scunguses -= this.scungusCost, this.scungusBought += 1, this.scungusCost = this.scungusCost + (this.scungusBought + 17)), document.getElementById("scunguses").innerHTML = this.scunguses.toString(), document.getElementById("scungusBought").innerHTML = this.scungusBought.toString(), document.getElementById("scungusCost").innerHTML = this.scungusCost.toString()
                    }
                    buyAutoscungus() {
                        this.scunguses >= this.scungusAutocost && (this.scunguses -= this.scungusAutocost, this.scungusAutobought += 1, this.scungusAutocost = this.scungusAutocost + (this.scungusAutobought + 57)), document.getElementById("scunguses").innerHTML = this.scunguses.toString(), document.getElementById("scungusAutobought").innerHTML = this.scungusAutobought.toString(), document.getElementById("scungusAutocost").innerHTML = this.scungusAutocost.toString()
                    }
                    autoScungus = s => {
                        this.lastUpdate + 1e3 < s && (console.log("current diff " + (s - this.lastUpdate)), this.scungusObtainus += this.scungusAutobought, this.scunguses += this.scungusAutobought, this.lastUpdate += 1e3, document.getElementById("scunguses").innerHTML = this.scunguses.toString()), window.requestAnimationFrame(this.autoScungus)
                    };
                    constructor() {
                        this.lastUpdate = performance.now(), window.requestAnimationFrame(this.autoScungus)
                    }
                    saveScungus() {
                        localStorage.setItem("scungusBought", this.scungusBought.toString()), localStorage.setItem("scunguses", this.scunguses.toString()), localStorage.setItem("scungusClicks", this.scungusClicks.toString()), localStorage.setItem("scungusObtainus", this.scungusObtainus.toString()), localStorage.setItem("scungusCost", this.scungusCost.toString()), localStorage.setItem("scungusMultiplicative", this.scungusMultiplicative.toString()), localStorage.setItem("scungusAutobought", this.scungusAutobought.toString()), localStorage.setItem("scungusAutocost", this.scungusAutocost.toString()), alert("scungus:) saved")
                    }
                    loadScungus() {
                        this.scungusBought = parseInt(localStorage.getItem("scungusBought")), this.scunguses = parseInt(localStorage.getItem("scunguses")), this.scungusClicks = parseInt(localStorage.getItem("scungusClicks")), this.scungusObtainus = parseInt(localStorage.getItem("scungusObtainus")), this.scungusCost = parseInt(localStorage.getItem("scungusCost")), this.scungusMultiplicative = parseInt(localStorage.getItem("scungusMultiplicative")), this.scungusAutocost = parseInt(localStorage.getItem("scungusAutocost")), this.scungusAutobought = parseInt(localStorage.getItem("scungusAutobought")), document.getElementById("scunguses").innerHTML = this.scunguses.toString(), document.getElementById("scungusBought").innerHTML = this.scungusBought.toString(), document.getElementById("scungusCost").innerHTML = this.scungusCost.toString(), document.getElementById("scungusClicks").innerHTML = this.scungusClicks.toString(), document.getElementById("scungusObtainus").innerHTML = this.scungusObtainus.toString(), document.getElementById("scungusMultiplicative").innerHTML = this.scungusMultiplicative.toString(), document.getElementById("scungusAutobought").innerHTML = this.scungusAutobought.toString(), document.getElementById("scungusAutocost").innerHTML = this.scungusAutocost.toString()
                    }
                    deleteScungus() {
                        localStorage.clear(), alert("scungus:) deleted")
                    }
                }
            }
        },
        t = {},
        u = function u(n) {
            var e = t[n];
            if (void 0 !== e) return e.exports;
            var g = t[n] = {
                exports: {}
            };
            return s[n](g, g.exports, u), g.exports
        }(166);
    scungus = u
})();
