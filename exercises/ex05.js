let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
   $("body").css("background-color", colors[count]);
   count = count + 1;

    if (count==4) {
        count = 0;
        console.log("it happened");
    }

   if (colors[count] == "HotPink") { 
        $("#needy-button").after(" notPink ");
    }
    else if (colors[count] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }
});