//make array with the photos


//intro screen
//should have one heading with the game title
//button for the instructions, with event listener to show the instructions text
//hidden div with the instructions text that will be toggled with the instructions button
//start button, with event listener to toggle the next screen

//creating all of the elements with DOM manipulation

//var for the body element, for shortcut when referencing
var body = document.querySelector('body');
//intro screen
var header = document.createElement('header');
body.appendChild(header);
//title with settimeout of 1 sec //omited the timeout part
var heading = document.createElement('h1');
    header.appendChild(heading);
    heading.innerText = "What's underneath";

//section for buttons
var navigationDiv = document.createElement('div');
    body.appendChild(navigationDiv);
    navigationDiv.classList.add('nav-div');

//the instructions button
var instructionsBtn = document.createElement('button');
    navigationDiv.appendChild(instructionsBtn);
    instructionsBtn.setAttribute('id', 'instructions-btn');
    instructionsBtn.innerText = "Instructions";
    instructionsBtn.addEventListener('click', expandInstructions);

//by default hidden, section with the instruction text
// var instructionsDiv = document.createElement('div');


function expandInstructions(event) {

    var instructionsDiv = document.createElement('div');
        instructionsDiv.classList.add('show-instructions');
        instructionsDiv.setAttribute('id', 'instructions');
        body.appendChild(instructionsDiv);


    var instructionsText = document.createElement('p');
        instructionsDiv.appendChild(instructionsText);
        instructionsText.textContent = "Guess what's underneath and describe the illustration with one word to win. Click on the squares to reveal any part of the hidden image. Type your answer in the input field and submit. Less squares you reveal before guessing, higher the score."

    // header.style.display = 'none';
    navigationDiv.style.display = 'none';


    body.style.backgroundColor = "#333333";
    body.style.color = "white";

    var exitBtn = document.createElement('button');
    instructionsDiv.appendChild(exitBtn);
    exitBtn.setAttribute('id','exit-btn');
    exitBtn.innerText = "Exit";
    // exitBtn.addEventListener('click', reset(expandInstructions));
    exitBtn.addEventListener('click', exit);

}

function exit() {

    navigationDiv.style.display = 'block';


     body.style.backgroundColor = "white";
    body.style.color = "black";
    // instructionsDiv.style.display = 'none';
     document.getElementById('instructions').style.display = "none";
    // instructionsDiv.reset();
    exitBtn.style.display = "none";


}

//the start button
var start = document.createElement('button');
    navigationDiv.appendChild(start);
    start.setAttribute('id', 'start');
    start.innerText = "Start";
    start.addEventListener('click', startGame);

var grid = [
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]

]

//create score board
//should have player name, overall score and reset to 0; score, and score from current image guess before proceed to the next img, then is added to overall score and reset to 0;
//should be placed on the left of the game board


//create the input div, should be places right of the game board
//should have the question, empty input field and submit button


function startGame(event) {

    // create the main appended to the body
    var main = document.createElement('main');
        body.appendChild(main);
        console.log('start clicked');
        start.style.display = 'none';
        header.style.display = 'none';
        navigationDiv.style.display = "none";
        body.style.backgroundColor = "#333333";

    //create a div for the image underneath
    var img = document.createElement('img');
        main.appendChild(img);
        img.setAttribute('src', 'images/bears-parts/bears.jpg');

    var hideImgDiv = document.createElement('div');
        main.appendChild(hideImgDiv);
        hideImgDiv.classList.add('hide-img');

//create grid of buttons to hide the image
     for (var i = 0; i < grid.length; i++) {

            var row = document.createElement('div');
            row.classList.add('row')
            hideImgDiv.appendChild(row);

            for (var j = 0 ; j < grid[i].length; j++) {
                console.log(grid[i][j]);
           // var row = document.querySelector('.row')
                var button = document.createElement('button');
                button.setAttribute('id', `button${j+1}`)
                button.classList.add('square')

                row.appendChild(button);
            //add event listener, on click to become invisible
                button.addEventListener('click', function() {
                this.style.visibility = "hidden";
                })


            }


        };

 }




//greeting screen
//should ask the player about the name
// store the nam in a var, and use for the greeting and table with score

//game screen
// the board in the middle
// the input to the right

//the score board to the left