// Question 3: Why does the counter start at NaN?
let count = parseInt((document.getElementById('counter-value').innerText = 0));

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
// when the increment btn is clicked the counter goes up
incrementButton.addEventListener('click', function() {
  debugger
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
// id was spelled wrong. Should be counter not count
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
// the count is set as a string being in quotation marks
resetButton.addEventListener('click', function() {
    count = 0;
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
//Set break point on event listeners

// Question 8: What is the scope of the count variable in DevTools?
//0

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
//yes

// Question 10: Use the Console to track errors. Are there any errors being thrown?
//no