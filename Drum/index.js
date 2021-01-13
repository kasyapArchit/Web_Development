
// Based on key sound is produced.

function playSound(buttonInnerHtml) {
    switch (buttonInnerHtml){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }
}

// Button Animation

function buttonAnimation(key){

    var activeButton = document.querySelector("."+key);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Detection button press

for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function () {
            playSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        }
    );
}

// Detectin keyboard press

document.addEventListener("keydown", 
    function (event) {
        playSound(event.key);
        buttonAnimation(event.key);
    }
);
