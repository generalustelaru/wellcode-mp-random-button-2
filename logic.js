var correct, buttons;
(
    function() {
        buttons = document.getElementById('buttons').value;
        populate();
        randomize();
    }
    ()
)

function randomize() { // Generate a random number between 1 and the number of buttons and store it in 'correct'
    correct = Math.round(Math.random() * buttons);
    if (correct == 0) {
        correct = buttons;
    }                    
    document.getElementById('result').innerText = correct;
}

function verify(n) { // Check selected button against 'correct'
    if (n == correct) {
        document.getElementById('outcome').innerHTML = "<strong>Congratulations!</strong>";
        document.getElementById(n).className = "btn btn-success";
        for (let i = 1; i <= buttons; i++) {
            if (i != n)
            document.getElementById(i).disabled = true;
        }
    }                    
    else
        document.getElementById(n).disabled = true;
}

function populate() { // Create buttons
        for (let i = 1; i <= buttons; i++) {
            let newButton = document.createElement("button");
            newButton.type = "button";
            newButton.className = "btn btn-secondary";
            newButton.id = i;
            newButton.onclick = function(){verify(i)};
            newButton.innerHTML = i;
            document.getElementById('pool').appendChild(newButton);
        }
}

function reset() { // Remove all buttons, reset tip text, then populate() and randomize()
    for (let i = buttons; i > 0; i--) {
        var old = document.getElementById(i);
        old.remove();
    }
    buttons = document.getElementById('buttons').value;
    document.getElementById('outcome').innerHTML = "<span>Pro Tip: It's&nbsp;</span><span id = \"result\"></span>";
    populate();                
    randomize();
}