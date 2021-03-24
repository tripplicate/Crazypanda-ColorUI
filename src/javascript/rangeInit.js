$( function() {

    // Three global variables for keep color value

    var r   = 0,
        g   = 0,
        b   = 0;

    // Initialized radio buttons without icons   

    $( "input" ).checkboxradio({
        icon: false
      });

    // The main logical color change     
 
    $( ".slider" ).slider({
        max: 250,
        range: "min",
    }).on("slide", function(event, ui){

        if($(this).hasClass('slider_red')){
            r = ui.value;
            changeBackground(r, g, b)
        }

        if($(this).hasClass('slider_green')){
            g = ui.value;
            changeBackground(r, g, b)
        }

        if($(this).hasClass('slider_blue')){
            b = ui.value;
            changeBackground(r, g, b)
        }
    })
  } );  


