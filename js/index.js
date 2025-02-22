// Your code goes here

// 1. doubleclick -- I want the "Fun Bus" text to get bigger when you double click on it.

//assignment
//function
//listener + function

const logoHeading = document.querySelector('.logo-heading');

function scaleUp(e) {
    logoHeading.classList.toggle('large');
    e.stopPropagation(); //stop propagation event listener method.
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

const introBG = document.querySelector('.intro')
const introImg = document.querySelector('.introImg')
const introDistance = introImg.offsetTop + 'px'

function logScroll(e) {
    // console.log(window.scrollY)
    if (window.scrollY >= introImg.offsetTop) {
        introBG.classList.add('blue');
    } else {
        introBG.classList.remove('blue')
    }
}

window.addEventListener('scroll', logScroll)

// 5. mouseenter 

// On mouseenter, I'm going to make a button disappear for four seconds.

const vanishBtn = document.querySelector('.btn-1')

function vanishButton() {
    vanishBtn.classList.add('hidden');
    setTimeout(function () {
        vanishBtn.classList.remove('hidden')
    }, 4000);
}

vanishBtn.addEventListener('mouseenter', vanishButton)

// 6. Mouseout

const webpage = document.querySelector('.destination-img');

function excite() {
    webpage.classList.add('tremble')
}

window.addEventListener('mouseover', excite);


// 7. Load - Will display an alert when the page has loaded.


//disabled because it's annoying to always have it on. This code works.

// const notification = document.querySelector('.container');

// function notify() {
//     setTimeout(function () {
//         alert ('The webpage has loaded.')        
//     }, 2000);
// }

// notification.onload = notify();

// 8. & 9. blur/focus -

const formFocus = document.querySelector('input[type="password"]')

formFocus.addEventListener('focus', (e) => {
    event.target.style.background = 'pink'
});

formFocus.addEventListener('blur', (e) => {
    event.target.style.background = ''
});

// 10. mouseover

const passwordContainer = document.querySelector('.input-container');
const passwordForm = document.querySelector('#form')

function showForm() {
    passwordForm.classList.remove('hidden')
    setTimeout(function () {
        passwordForm.classList.add('hidden')
    }, 10000);
}

passwordContainer.addEventListener('mouseover', showForm)