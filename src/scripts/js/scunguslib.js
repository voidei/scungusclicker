var scungus;(()=>{var s={166:s=>{s.exports=new class{scungusBought=0;scunguses=0;scungusClicks=0;scungusObtainus=0;scungusCost=10;scungi;scungusMultiplicative=0;clickScungus(){this.scungusMultiplicative=1+Math.floor(2.5*this.scungusBought),this.scunguses+=this.scungusMultiplicative,this.scungusClicks+=1,document.getElementById("scunguses").innerHTML=this.scunguses.toString(),document.getElementById("scungusBought").innerHTML=this.scungusBought.toString(),document.getElementById("scungusCost").innerHTML=this.scungusCost.toString(),document.getElementById("scungusClicks").innerHTML=this.scungusClicks.toString()}buyScungus(){this.scungusBought<=0&&this.scunguses>=this.scungusCost&&(this.scungusBought+=1,this.scunguses-=10,this.scungusCost,this.scungusCost=this.scungusCost+17),this.scunguses>=this.scungusCost&&(this.scunguses-=this.scungusCost,this.scungusBought+=1,this.scungusCost=this.scungusCost+17),document.getElementById("scunguses").innerHTML=this.scunguses.toString(),document.getElementById("scungusBought").innerHTML=this.scungusBought.toString(),document.getElementById("scungusCost").innerHTML=this.scungusCost.toString(),document.getElementById("scungusClicks").innerHTML=this.scungusClicks.toString()}saveScungus(){localStorage.setItem("scungusBought",this.scungusBought.toString()),localStorage.setItem("scunguses",this.scunguses.toString()),localStorage.setItem("scungusClicks",this.scungusClicks.toString()),localStorage.setItem("scungusObtainus",this.scungusObtainus.toString()),localStorage.setItem("scungusCost",this.scungusCost.toString()),localStorage.setItem("scungusMultiplicative",this.scungusMultiplicative.toString())}loadScungus(){this.scungusBought=parseInt(localStorage.getItem("scungusBought")),this.scunguses=parseInt(localStorage.getItem("scunguses")),this.scungusClicks=parseInt(localStorage.getItem("scungusClicks")),this.scungusObtainus=parseInt(localStorage.getItem("scungusObtainus")),this.scungusCost=parseInt(localStorage.getItem("scungusCost")),this.scungusMultiplicative=parseInt(localStorage.getItem("scungusMultiplicative")),document.getElementById("scunguses").innerHTML=this.scunguses.toString(),document.getElementById("scungusBought").innerHTML=this.scungusBought.toString(),document.getElementById("scungusCost").innerHTML=this.scungusCost.toString(),document.getElementById("scungusClicks").innerHTML=this.scungusClicks.toString()}deleteScungus(){localStorage.clear()}}}},t={},u=function u(n){var g=t[n];if(void 0!==g)return g.exports;var e=t[n]={exports:{}};return s[n](e,e.exports,u),e.exports}(166);scungus=u})();