/**
 * tooltip.js it makes a tooltip!
* parameters:
*   - seletor: the DOM seector that will get turned into a hoverable tooltip trigger.
*   - content: the 
**/ 

const TooltipIIFE = (function() {

    var _selector
    var _content

    function init(selector, content){
        console.log(`hi, i am TooltipIIFE.init`, selector, content)
        _selector = selector
        this.print()
    }

    print = () => {
        console.log(`printing selector`, _selector)
    }

    function getSelector(){
        console.log(`this?`, _selector)
        return this.selector
    }

    return {
        init: init,
        getSelector: getSelector
    }
}())

class TooltipClass{
    constructor(selector, content) {
        console.log(`hi i am tooltip class instance`, selector, content)
        this.selector = selector
        this.content = content

        this.setup()
    }

    setup(){
        console.log(`setting up tooltip elements`)
        const tooltipElements = document.querySelectorAll(this.selector)
        tooltipElements.forEach(function (element) {
            const content = element.dataset[`.tooltip`]
            console.log(`adding content`, content, `to element`, element.textcontent)
        })
    }

    // Getters
    getSelector(){
        return this.selector
    }

    getContent(){
        return this.content
    }


    // Setters
    setSelector(newSelector){
        this.selector = newSelector
    }


}