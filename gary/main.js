//function changeBackground(color){
//    document.body.style.background = color;
//}
//window.addEventListener("load",function() { changeBackground('red') });

function testLink() {
    document.write("the page is linked");
}

//to insert text into any element with a textContent property
//just change the value "textPlaceHolder" to your desired id attribute
function insertText(yourText) {
    var elem = document.getElementById("textPlaceHolder");
    elem.textContent = yourText;
}

//TODO: finish and test these functions
function loopSound(filepath) {
    //this var myAudio might need to be global
    var myAudio = new Audio(filepath);
    myAudio.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();   
}

function loadImage(filepath) {
    

}