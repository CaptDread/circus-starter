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
var description = document.querySelector(".description");

var toggleBurger = function toggleBurger() {
  if (burgerButt.id != "open") {
    burgerButt.id = "open";
    console.log("Burger now " + burgerButt.id);
    mid.style.opacity = "0%";
    mid.style.webkitTransition = ".42s ease";
    bottBun.style.transform = "translate(0em,-1.35em) rotate(45deg)";
    bottBun.style.webkitTransition = ".42s ease";
    bottBun.style.zIndex = "3";
    bottBun.style.position = "relative";
    topBun.style.transform = "translate(0em,1.2em) rotate(-45deg)";
    topBun.style.webkitTransition = ".42s ease";
    topBun.style.position = "relative";
    burgerBar.style.width = "10em";
    burgerBar.style.height = "fitContent";
    burgerBar.style.position = "absolute";
    burgerBar.style.right = "0%";
    burgerBar.style.background = '#a0a0a0';
    burgerBar.style.zIndex = "1";
    burgerBar.style.border = ".13em #fff solid";
    burgerBar.setAttribute("class", "burgerBar");
    burgerBar.style.textTransform = "capitalize";
    burgerBar.style.textAlign = 'center';
    burgerUl.style.display = "flex";
    burgerUl.style.flexDirection = "column";
    burgerUl.setAttribute("class", "burgerUl");
    document.body.insertBefore(burgerBar, description);
    burgerBar.appendChild(burgerNav);
    burgerNav.appendChild(burgerUl);

    for (var z = 0; z < navLink.length; z++) {
      navLink[z].style.textDecoration = "none";
      navLink[z].style.color = "#fff";
      navLink[z].style.textShadow = "0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099";
      navLink[z].style.border = 'none';
      navLink[z].style.borderBottom = '.013em purple solid';
      navLink[z].style.padding = "1em 1.3em";
      navLink[z].style.marginLeft = "-33%";
      burgerUl.appendChild(navLink[z]); // activeButt.style.padding = '9.4% 24% 9.4% 16%'
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
  }
};

burgerButt.addEventListener("click", function (e) {
  e.preventDefault();
  toggleBurger();
}); // cart butt/menu

var cartButt = document.querySelector('.cartButt');
var cartTotal = document.querySelector(".cartTotal");
var cartCount = 0;
cartTotal.innerText = cartCount;
var cartMenu = document.createElement("div");
var cmUl = document.createElement('ul');
var product = document.querySelectorAll(".product");

for (var p = 0; p < product.length; p++) {
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
    cartMenu.style.backgroundColor = "#666";
    cartMenu.style.border = ".13em rgba(.0, .0, .0, 1) solid";
    cartMenu.style.width = "10em";
    cartMenu.style.right = "0%";
    cartMenu.style.height = "fitContent";
    cartMenu.style.position = "absolute";
    document.body.insertBefore(cartMenu, description);
    cmUl.style.display = "flex";
    cmUl.style.flexDirection = "column";
    cmUl.style.listStyleType = "none";
    cmUl.style.color = "#fff";
    cmUl.style.textShadow = "0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099, 0 0 3px #660099";
    cartMenu.appendChild(cmUl);

    if (cartCount < 1) {
      var cCount = document.querySelectorAll(".manuel li");

      for (var cc = 0; cc < cCount.length; cc++) {
        cmUl.removeChild(cCount[cc]);
      }

      var emptyLi = document.createElement("li");
      emptyLi.setAttribute("class", "emptyLi");
      emptyLi.style.height = "fitContent";
      var emptyLiP = document.createElement("p");
      emptyLiP.innerText = "There's nothing here, click an option to add it to the cart!";
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
