"use strict";

var tooltips = new TooltipClass(".tooltip");
var tipBase = document.querySelectorAll(".tooltip");
var bkgd = document.querySelector(`.foreground`)


var _loop = function _loop(z) {
  tipBase[z].addEventListener("mouseover", function (event) {
    var tipData = tipBase[z].attributes[1].value;
    var tipDiv = document.createElement("div");
    tipDiv.classList.add("tipDiv", z);
    console.log("top", event.pageY);
    console.log("left", event.pageX);
    console.log("*top", event.pageY / 100 * 20 - 35);
    console.log("*left", event.pageX / 100 * 20 - 160);
    tipDiv.style.background = "rgba(0, 0, 0, .85)";
    tipDiv.style.width = "fit-content";
    tipDiv.style.padding = "1px 20px";
    tipDiv.style.borderRadius = "25%";
    tipDiv.style.position = "absolute";
    tipDiv.style.left = event.pageX / 100 * 20 - 168 + `%`;
    tipDiv.style.top = event.pageY / 100 * 20 - 45 + (z * 10) + `%`;
    tipDiv.style.zIndex = "1";
    tipDiv.style.color = 'white';
    tipDiv.style.display = "flex";
    tipDiv.style.flexDirection = "column";
    tipDiv.style.alignItems = "center";
    bkgd.appendChild(tipDiv);
    var tip = document.createElement("p");
    tip.innerText = tipData;
    tipDiv.appendChild(tip);
    var arrow = document.createElement("div");
    arrow.style.background = "rgba(0, 0, 0, .75)";
    arrow.style.width = "1.3em";
    arrow.style.height = "1.3em";
    arrow.style.transform = "rotate(45deg)";
    arrow.style.position = "relative";
    arrow.style.marginBottom = "-5%";
    arrow.style.zIndex = `0`;
    tipDiv.appendChild(arrow);
  });
  tipBase[z].addEventListener("mouseout", function () {
    var tipDel = document.querySelector(`.tipDiv`, z);
    tipDel.remove();
  });
};

for (var z = 0; z < tipBase.length; z++) {
  _loop(z);
}
//# sourceMappingURL=main.js.map
