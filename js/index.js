// Your code goes here

// 1. doubleclick -- I want the "Fun Bus" text to get bigger when you double click on it.

//assignment
//function
//listener + function

const logoHeading = document.querySelector('.logo-heading');

function scaleUp(e) {
    logoHeading.classList.toggle('large');
};
logoHeading.addEventListener('dblclick', scaleUp);

// 2. select

//assignment
//function
//listener + function

function logSelection(e) { // creating an function that takes in an event, the 'select' event.
    const log = document.querySelector('#log') //creates a variable for the log of what we're going to capture.
    const selection = e.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    //This variable outputs a substring. The substring takes in a few things from the 'select' event - the 
    //beginning of the selection, and the end of the selection. It then assigns those things to selection variable.

    log.textContent = `You selected: ${selection}` //Here we assign the value of Log's text content to a string with ${selection} interpolated.
}

const inputCapture = document.querySelector('input') //Here we create a const for the actual input field since the select event will only work on a very few assorted elements.
inputCapture.addEventListener('select', logSelection) //Here's the event listener. It selects inputCapture as its target and adds the listener, then specifies the listener type 'select' and the callback function to reference when 'select' happens.


// 3. keyup

const pressed = []; // accumulator
const secretCode = 'adventure'; //this is the code we're checking for.

window.addEventListener('keyup', (e) => { //adding an event listener to the window itself.
    console.log(e.key); //we're logging every key pressed to the console.
    pressed.push(e.key); //we're pushing every key pressed to the accumulator 'pressed'.
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    //we have to check the array from the back going forward. We first get the length of secretcode and specify that we're starting from the back and moving forward. Starting from the back, we use
    //secretcode.length - 1 and then use a - at the beginning to specify that we're starting from the back. To check it against Pressed, we need to use pressed.length - secretcode.length.

    if (pressed.join('').includes(
            secretCode
        )) { //we use .join() to turn the pressed array back into a string for the purpose of checking it against secretCode.
        alert('DING DING DING! YOU DID IT!'); //if it worked and we typed the code correctly, it'll do the thing.
        cornify_add(); //unicorns and rainbows will be added if cornify is referenced in the script!
    }
    console.log(pressed); //this will log the data accumulated into the array.
});


// 4. scroll 

const homeBG = document.querySelector('.home')
const introImg = document.querySelector('.introImg')
const introDistance = introImg.offsetTop + 'px'

function logScroll(e) {
    // console.log(window.scrollY)
    if(window.scrollY >= introImg.offsetTop) {
        homeBG.classList.add('blue');
    } else {
        homeBG.classList.remove('blue')
    }
}

window.addEventListener('scroll', logScroll)

// 5. mouseover 

// On mouseover, I'm going to make an image disappear.

