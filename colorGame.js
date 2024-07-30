var numofSquares = 15;
var color = generateRandomColors(numofSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displaycolor = document.querySelector("#DisplayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var mediumbtn = document.querySelector("#mediumbtn"); // New Medium button

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    mediumbtn.classList.remove("selected"); // Remove selected from Medium
    numofSquares = 4;
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(color[i]){
            squares[i].style.backgroundColor = color[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    mediumbtn.classList.remove("selected"); // Remove selected from Medium
    numofSquares = 12;
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
});

mediumbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.remove("selected");
    mediumbtn.classList.add("selected");
    numofSquares = 8; // Set to 48 for Medium
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(color[i]){
            squares[i].style.backgroundColor = color[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
});

reset.addEventListener("click", function(){
    console.log("clicked");
    color = generateRandomColors(numofSquares);
    pickedColor = pickColor();
    displaycolor.textContent = pickedColor;
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
});

displaycolor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log(pickedColor, clickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
