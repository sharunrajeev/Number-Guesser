// To see if the game started
var reset = false;
// Takes care of the chances (default 3)
var chances = 3;

// returns a random number
var randomNumber = (Math.floor(Math.random() * 10)) + 1;
console.log(randomNumber);
// Function to handle if button is clicked
function handleClick() {
    var output;
    if (reset) {
        document.getElementById("inputButton").innerHTML = `Guess`;
        window.location.reload();
    }
    var guessedNumber = parseInt(document.getElementById("numberInput").value);
    console.log(guessedNumber);
    if (!isValid(guessedNumber)) {
        document.getElementById("result").style.color = "red";
        output = "Enter a valid number between 1 and 10";

    }
    else if(chances>0){
        if (guessedNumber === randomNumber) {
            document.getElementById("result").style.color = "green";
            output = "Congratulations! You have guessed it right.";
            document.getElementById("inputButton").innerHTML = `Play Again <i class="fas fa-redo-alt"></i>`;
            reset = true;
        } else {
            document.getElementById("result").style.color = "#112D4E";
            chances--;
            output = guessedNumber + " is wrong. You have " + (chances + 1) + " chances left";
        }
    }
    else {
        reset = true;
    }
    document.getElementById("result").innerText = output;
    document.getElementById("numberInput").value = "";
}

// Function to clear the results
function clearResult() {
    console.log("inside the clear function");
    document.getElementById("result").innerText = "";
}

// Function to check whether the number is valid or not.
function isValid(value) {
    if (isNaN(value) || value < 1 || value > 10) {
        return false;
    }
    else {
        return true;
    }
}

// To click the button if user presses Enter
var numberInput = document.getElementById("numberInput");
numberInput.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("inputButton").click();
    }
})
