var Color = {
    // hex: {
    //     "0000": "0",
    //     "0001": "1",
    //     "0010": "2",
    //     "0011": "3",
    //     "0100": "4",
    //     "0101": "5",
    //     "0110": "6",
    //     "0111": "7",
    //     "1000": "8",
    //     "1001": "9",
    //     "1010": "a", // 10
    //     "1011": "b", // 11
    //     "1100": "c", // 12
    //     "1101": "d", // 13
    //     "1110": "e", // 14
    //     "1111": "f"  // 15
    // },

    // dec2bin: function(dec) {
    //     var bin = "";

    //     while (dec != 0) {
    //         bin += (dec % 2).toString();
    //         dec = Math.floor(dec / 2);
    //     }

    //     if (bin === "") {
    //         bin = "0000";
    //     } else {
    //         bin.split("").reverse();
    //     }

    //     return bin;
    // },

    // bin2hex: function(bin) {
    //     var hex = "";
    //     var padding = "0";
    //     if (bin.length % 4 != 0) {
    //         padding *= ( 4 - (bin.length % 4) );
    //         bin = padding + bin;
    //     }

    //     // bin.chars.each_slice(4) do |b|
    //     //     hex += Number.hex.key( b.join("") ).to_s
    //     // end

    //     var binArray = bin.split("");
    //     var binGroup = "";
    //     var count = 0;
    //     for (var i = 0; i < binArray.length; i++) {
    //         if (count < 4) {
    //             binGroup += binArray[i];
    //             count++;
    //         } else {
    //             console.log(binGroup);
    //             binGroup = "";
    //             count = 0;
    //         }
    //     }
    // }

    dec2hex: function(dec) {
        return dec.toString(16);
    }

};

var x = 0;
var y = 0;
var z = 0;
var clicked = false;

$(document).ready(function() {
    $("#colorpicker").on("mousemove", function(event) {
        if (!clicked) {
            var width = ( $(document).width() ) / 255;
            var height = ( $(document).height() ) / 255;
            x = Math.round(event.clientX / width);
            y = Math.round(event.clientY / height);
            z = Math.round( Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) ) );
            console.log(x,y,z);
            //hex = Color.dec2hex( parseInt(dec) );

            $("#colorpicker").css("background-color", "rgb(" + y + "," + x + "," + z + ")" );
        }
    });

    $("#colorpicker").on("click", function() {
        if ( $("#colorform").is( ":hidden" ) ) {
            $("#colorform").slideDown();
            $("#colortext").val(x + ", " + y + ", " + z);
            clicked = true;
        } else {
            $("#colorform").slideUp();
            clicked = false;
        }
    });
});