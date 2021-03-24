// Main function for color changing

$( function (){
    changeBackground = function(r, g, b) {

        // The condition by which the color change occurs
        var isColor     = $('label.changeColor').hasClass("ui-state-active"),
            isBgColor   = $('label.changeBgColor').hasClass("ui-state-active")

        if(isColor){
            $('.text').css({
                color: `rgb(${r}, ${g}, ${b})`
            })
        }
        if(isBgColor){
            $('body').css({
                backgroundColor: `rgb(${r}, ${g}, ${b})`
            })
        }
    }
})