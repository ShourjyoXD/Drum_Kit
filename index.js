for( let i = 0; i < 7; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", function () {
       CheckKeyPress(this.innerHTML);
       AnimateButton(this.innerHTML);
     });
     function CheckKeyPress(key) {
        switch (key) {
            case "w":
                audio = new Audio('./tom-1.mp3');
                audio.play();
                break;
            case "a":
                audio = new Audio('./tom-2.mp3');
                audio.play();
                break;
            case "s":
                audio = new Audio('./tom-3.mp3');
                audio.play();
                break;
            case "d":
                audio = new Audio('./tom-4.mp3');
                audio.play();
                break;
            case "j":
                audio = new Audio('./snare.mp3');
                audio.play();
                break;
            case "k":
                audio = new Audio('./crash.mp3');
                audio.play();
                break;
            case "l":
                audio = new Audio('./kick-bass.mp3');
                audio.play();
                break;
        }}
    document.addEventListener("keypress", function (e) {
        console.log(e);
        CheckKeyPress(e.key);
        AnimateButton(e.key);
    });
}
function AnimateButton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}