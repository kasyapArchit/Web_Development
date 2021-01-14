
$("button").click(
    function () {
        $("h1").slideUp().slideDown().animate({opacity: "50%"}).animate({margin: "10%"});
    }
);

$("input").keypress(
    function (event) {
        console.log(event.key);
    }
);
 
$(document).keypress(
    function (event) {
        $("h1").text(event.key);
    }
);

$("h1").on("mouseover",
    function () {
        $("h1").css("color", "purple");
    }
);

$("h1").before("<button>Before</button>");

$("h1").append("<button>Append</button>");
$("h1").prepend("<button>Prepend</button>");

// $("button").remove();

