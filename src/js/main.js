"use strict"; // Daburger codes!

var burgerButt = document.querySelector(".daburger");
var topBun = document.querySelector(".topbun");
var mid = document.querySelector(".dagoods");
var bottBun = document.querySelector(".botbun");
var burgerBar = document.createElement("div");
var burgerNav = document.createElement('nav');
var burgerUl = document.createElement("ul");
var activeButt = document.querySelector(".activeButt");
var navLink = document.querySelectorAll('nav li a');

var toggleBurger = function toggleBurger() {
  if (burgerButt.id != "open") {
    burgerButt.id = "open";
    console.log("Burger now " + burgerButt.id);
    burgerButt.style.borderLeft = ".13em #fff solid";
    burgerButt.style.borderBottom = ".13em #fff solid";
    mid.style.opacity = "0%";
    mid.style.webkitTransition = "1.3s ease";
    bottBun.style.transform = "rotate(45deg)";
    bottBun.style.webkitTransition = "1.3s ease";
    bottBun.style.zIndex = "3";
    bottBun.style.position = "relative";
    bottBun.style.top = "1%";
    topBun.style.transform = "rotate(-45deg)";
    topBun.style.webkitTransition = "1.3s ease";
    topBun.style.position = "relative";
    topBun.style.bottom = "-25%";
    burgerBar.style.width = "10em";
    burgerBar.style.height = "fitContent";
    burgerBar.style.position = "absolute";
    burgerBar.style.background = '#a0a0a0';
    burgerBar.style.zIndex = "1";
    burgerBar.style.border = ".13em #fff solid";
    burgerBar.setAttribute("class", "burgerBar");
    burgerBar.style.textTransform = "capitalize";
    burgerBar.style.textAlign = 'center';
    document.body.appendChild(burgerBar);
    burgerBar.appendChild(burgerNav);
    burgerNav.appendChild(burgerUl);

    for (z = 0; z < navLink.length; z++) {
      navLink[z].style.textDecoration = "none";
      navLink[z].style.color = "#fff";
      navLink[z].style.border = 'none';
      navLink[z].style.borderBottom = '.013em purple solid';
      navLink[z].style.padding = '9.4% 24% 9.4% 16%';
      burgerUl.appendChild(navLink[z]); // activeButt.style.padding = '9.4% 24% 9.4% 16%'

      activeButt.style.marginLeft = "-27%";
    }
  } else if (burgerButt.id != "close") {
    burgerButt.id = "close";
    console.log("Burger now " + burgerButt.id);
    bottBun.style.transform = "";
    topBun.style.transform = "";
    bottBun.style.top = "";
    topBun.style.bottom = "";
    mid.style.opacity = "100%";
    document.body.removeChild(burgerBar);
    burgerButt.style.border = ".0013em purple solid";
  }
};

burgerButt.addEventListener("click", function (e) {
  e.preventDefault();
  toggleBurger();
}); // cart butt/menu

var cartButt = document.querySelector('.cartButt');
var cartTotal = document.querySelector(".cartTotal");
cartCount = 0;
cartTotal.innerText = cartCount;
var cartMenu = document.createElement("div");
var cmUl = document.createElement('ul');
var product = document.querySelectorAll(".product");

for (p = 0; p < product.length; p++) {
  product[p].addEventListener("click", function (e) {
    e.preventDefault();
    console.log("you added a product");
  });
}

var toggleCartMenu = function toggleCartMenu() {
  if (cartButt.id != "open") {
    cartButt.id = "open";
    cartMenu.setAttribute('class', 'cartMenu');
    cmUl.setAttribute('class', 'manuel');
    cartMenu.style.backgroundColor = "rgba(255, 255, 255, .42)";
    cartMenu.style.border = ".13em rgba(.0, .0, .0, .42) solid";
    cartMenu.style.width = "10em";
    cartMenu.style.height = "fitContent";
    cartMenu.style.position = "absolute";
    document.body.appendChild(cartMenu);
    cmUl.style.display = "flex";
    cmUl.style.flexDirection = "column";
    cmUl.style.color = "#fff";
    cartMenu.appendChild(cmUl);

    if (cartCount < 1) {
      var cCount = document.querySelectorAll(".manuel li");

      for (var cc = 0; cc < cCount.length; cc++) {
        cmUl.removeChild(cCount[cc]);
      }

      var emptyLi = document.createElement("li");
      emptyLi.setAttribute("class", "emptyLi");
      emptyLi.style.height = "4.2em";
      var emptyLiP = document.createElement("p");
      emptyLiP.innerText = "There's nothing here, click an image to add it to the cart!";
      cmUl.appendChild(emptyLi);
      emptyLi.appendChild(emptyLiP);
    } else {
      var _cCount = document.querySelectorAll(".manuel li");

      for (var _cc = 0; _cc < _cCount.length; _cc++) {
        cmUl.removeChild(_cCount[_cc]);
      }
    }
  } else if (cartButt.id != "close") {
    cartButt.id = "close";
    document.body.removeChild(cartMenu);
  }
};

cartButt.addEventListener('click', function (e) {
  e.preventDefault();
  toggleCartMenu();
});
//# sourceMappingURL=main.js.map
