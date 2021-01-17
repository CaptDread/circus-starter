"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * tooltip.js it makes a tooltip!
* parameters:
*   - seletor: the DOM seector that will get turned into a hoverable tooltip trigger.
*   - content: the 
**/


var TooltipIIFE = function () {
  var _selector;

  var _content;

  function init(selector, content) {
    console.log("hi, i am TooltipIIFE.init", selector, content);
    _selector = selector;
    this.print();
  }

  print = function print() {
    console.log("printing selector", _selector);
  };

  function getSelector() {
    console.log("this?", _selector);
    return this.selector;
  }

  return {
    init: init,
    getSelector: getSelector
  };
}();

var TooltipClass = /*#__PURE__*/function () {
  function TooltipClass(selector, content) {
    _classCallCheck(this, TooltipClass);

    console.log("hi i am tooltip class instance", selector, content);
    this.selector = selector;
    this.content = content;
    this.setup();
  }

  _createClass(TooltipClass, [{
    key: "setup",
    value: function setup() {
      console.log("setting up tooltip elements");
      var tooltipElements = document.querySelectorAll(this.selector);
      tooltipElements.forEach(function (element) {
        var content = element.dataset[".tooltip"];
        console.log("adding content", content, "to element", element.textcontent);
      });
    } // Getters

  }, {
    key: "getSelector",
    value: function getSelector() {
      return this.selector;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.content;
    } // Setters

  }, {
    key: "setSelector",
    value: function setSelector(newSelector) {
      this.selector = newSelector;
    }
  }]);

  return TooltipClass;
}();
//# sourceMappingURL=tooltip.js.map
