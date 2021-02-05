

//functions to generate rooms
function room1() {
    document.write("room1");
}
function room2() {
    document.write("room2");
}
function room3() {
    document.write("room3");
}
function room4() {
    document.write("room4");
}

//helper functions 
function createLI() {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Water");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
}
function createButton(descr) {
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = descr;                   // Insert text
    document.onclick="room1()"               // change onclick attribute
}
