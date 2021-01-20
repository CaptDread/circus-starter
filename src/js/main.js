"use strict";

var tooltips = new TooltipClass(".tooltip");
var tipBase = document.querySelectorAll(".tooltip");
var bkgd = document.querySelector(`.foreground`)


var createTip = function (ev){
  var tipData = this.attributes[1].value;
  this.tipdata = ``;
  this.setAttribute(`tooltip`, tipData)

  var tipDiv = document.createElement("div");
  tipDiv.className(`tipDiv`);
  tipDiv.appendChild(document.createTextNode(tipData));
  bkgd.appendChild(tipDiv);

  var firstChild = document.body.firstChild;
  firstChild.parentNode.insertBefore(tipDiv, firstChild)

  var padding = 5;
  var linkProps = this.getBoundingClientRect();
  var tipProps = tipDiv.getBoundingClientRect();
  var topPos = linkProps.top - (tipProps.height + padding);
  tipDiv.setAttribute(`style`, 'top:'+topPos+'px;'+'left:'+linkProps.left+'px;')
  // var tipData = tipBase[z].attributes[1].value;
  // var tipDiv = document.createElement("div");
  // tipDiv.classList.add("tipDiv");
  // console.log("top", event.pageY);
  // console.log("left", event.pageX);
  // console.log("*top", event.pageY / 100 * 20 - 35);
  // console.log("*left", event.pageX / 100 * 20 - 160);
  // tipDiv.style.background = "rgba(0, 0, 0, .85)";
  // tipDiv.style.width = "fit-content";
  // tipDiv.style.padding = "1px 20px";
  // tipDiv.style.borderRadius = "10px";
  // tipDiv.style.position = "absolute";
  // tipDiv.style.left = event.pageX / 100 * 20 - 168 + `%`;
  // tipDiv.style.top = event.pageY / 100 * 20 - 45 + (z * 10) + `%`;
  // tipDiv.style.zIndex = "1";
  // tipDiv.style.color = 'white';
  // tipDiv.style.display = "flex";
  // tipDiv.style.flexDirection = "column";
  // tipDiv.style.alignItems = "center";
  // bkgd.appendChild(tipDiv);
  // var tip = document.createElement("p");
  // tip.innerText = tipData;
  // tipDiv.appendChild(tip);
  // var arrow = document.createElement("div");
  // arrow.style.background = "rgba(0, 0, 0, .75)";
  // arrow.style.width = "1.3em";
  // arrow.style.height = "1.3em";
  // arrow.style.transform = "rotate(45deg)";
  // arrow.style.position = "relative";
  // arrow.style.marginBottom = "-5%";
  // arrow.style.zIndex = `0`;
  // tipDiv.appendChild(arrow);
}


var _loop = function _loop(z) {
  tipBase[z].addEventListener("mouseover", function(ev){
    var tipData = tipBase[z].attributes[1].value;
    this.tipdata = ``;
    this.setAttribute(`tooltip`, tipData)

    var tipDiv = document.createElement("div");
    tipDiv.classList.add(`tipDiv`);
    tipDiv.appendChild(document.createTextNode(tipData));
    bkgd.appendChild(tipDiv);

    var firstChild = document.body.firstChild;
    firstChild.parentNode.insertBefore(tipDiv, firstChild)

    var padding = 5;
    var linkProps = this.getBoundingClientRect();
    var tipProps = tipDiv.getBoundingClientRect();
    var topPos = linkProps.top - (tipProps.height + padding);
    var leftPos = linkProps.left - 40;
    tipDiv.setAttribute(`style`, 'top:'+topPos+'px;'+'left:'+leftPos+'px;')
    var tipOrgin = topPos - (z * 50) - 250;
    gsap.from( `.tipDiv`, { 
      duration: .5,
      ease: "none",
      y: tipOrgin,
      scale: 0,
      opacity: 0,
      });
  });
  tipBase[z].addEventListener("mouseout", function(ev){
    var tipData = tipBase[z].attributes[1].value;
    this.tipData = ``;
    this.removeAttribute(`tooltip`);
    gsap.to( `.tipDiv`, { 
      duration: .42,
      ease: "none",
      y: 66.6,
      scale: 0,
      opacity: 0,
      });
    setTimeout(() => {
      document.querySelector(`.tipDiv`).remove();
    }, 42);
  });
};

for (var z = 0; z < tipBase.length; z++) {
  _loop(z);
}
//# sourceMappingURL=main.js.map
