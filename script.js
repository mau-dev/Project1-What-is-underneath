//counting inputs to change the photo underneath
var counter = 1;
//score from current img, based on squares revealed
var score = 0;
// total score
var totalScore = 0;

//placeholder name, until I make an input for dynamic
var name = "Mau";


//make array with the photos
 var gameArray = [
        case1 = {answer: "bears", url: "images/bears.jpg"},
        case3 = {answer: "cat", url: "images/cat.jpg"},
        case4 = {answer: "dog", url: "images/dog.jpg"},
        case5 = {answer: "plane", url: "images/plane.jpg"},
        case6 = {answer: "racoon", url: "images/racoon.jpg"},
        case7 = {answer: "robot", url: "images/robot.jpg"}
    ];

//covering buttons grid
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

//creating all of the elements with DOM manipulation

//intro screen
//should have one heading with the game title
//button for the instructions, with event listener to show the instructions text
//hidden div with the instructions text that will be toggled with the instructions button
//start button, with event listener to toggle the next screen


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

//game screen --------->

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
        img.setAttribute('src', 'images/bears.jpg');


    var hideImgDiv = document.createElement('div');
        main.appendChild(hideImgDiv);
        hideImgDiv.classList.add('hide-img');

//create grid of buttons to hide the image
         for (var i = 0; i < grid.length; i++) {

                var row = document.createElement('div');
                row.classList.add('row')
                hideImgDiv.appendChild(row);

                for (var j = 0 ; j < grid[i].length; j++) {
                    // console.log(grid[i][j]);
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

   setTimeout(inputBoard, 800);
    setTimeout(scoreBoard, 1200);

}

 //call this func from scoreboard func with 2 sec timeout
    var newImg = function() {
        var square = document.querySelectorAll('.square');
            for (var i=0; i < square.length; i++) {
                square[i].style.visibility = "visible";
            }
            var img = document.querySelector('img');
        img.setAttribute('src', `${gameArray[counter].url}`);

        // img.setAttribute('src', `${gameArray[counter].url}`);
    }


// //input board
var inputBoard = function() {


    var answerBoard = document.createElement('aside');
        body.appendChild(answerBoard);
        answerBoard.setAttribute('id', 'answer-board');
        // answerBoard.insertBefore(main, body);


    //input question
    var question = document.createElement('h2');
        answerBoard.appendChild(question);
        question.innerHTML = "Guess what's <br/>hidden underneath?";


    //input
    var inputField = document.createElement('input');
        answerBoard.appendChild(inputField);
        inputField.setAttribute('id','input-field');
        inputField.setAttribute('placeholder','Type here...')

        inputField.addEventListener('change', function(event){
        var currentInput = event.target.value;
        event.target.value = "";
        var square = document.querySelectorAll('.square');
        for (var i=0; i < square.length; i++) {
            square[i].style.visibility = "hidden";
        }
        // counter++;
        setTimeout(newImg, 2000);

        // var img = document.querySelector('img');
        // img.setAttribute('src', `${gameArray[counter].url}`);

        var output = inputHappened(currentInput);
        display( output );
        counter++;
      })



         var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
      }

    //output answer
        var output = document.createElement('h3');
        answerBoard.appendChild(output);
        output.setAttribute('id','output')
    };





var inputHappened = function(currentInput){

  return currentInput;

};


//create score board
//should have player name, overall score and reset to 0; score, and score from current image guess before proceed to the next img, then is added to overall score and reset to 0;
//should be placed on the left of the game board

var scoreBoard = function() {

     var scoreAside = document.createElement('aside');
        body.appendChild(scoreAside);
        scoreAside.setAttribute('id', 'score-aside');

    //name placeholder
    var playerName = document.createElement('h2');
        scoreAside.appendChild(playerName);
        // playerName.innerHTML = "Name";
        playerName.innerHTML = `Name: ${name}`;

     //total score placeholder
    var totalScoreElement = document.createElement('h2');
        scoreAside.appendChild(totalScoreElement);
        totalScoreElement.innerHTML = `Total Score: ${totalScore}`;

     //new score placeholder
    var newScoreElement = document.createElement('h2');
        scoreAside.appendChild(newScoreElement);
        newScoreElement.innerHTML = `New Score: ${score}`;
}



// greeting screen
// should ask the player about the name
// store the nam in a var, and use for the greeting and table with score

// game screen
// the board in the middle
// the input to the right

// the score board to the left