// Here we get all the buttons
var inputValues = document.querySelectorAll('[data-input]');
var output = document.getElementById('output');
var calculated = document.getElementById('calculated');

console.log(inputValues);

// holdData will act like a parser
var holdData = [];

// Click Event

inputValues.forEach(function (e,i,a) {

    // CombineData will be used to combine all the elements in the array by using .join()
    var combineData;

    e.addEventListener('click', function(){

        // e.dataset.input are the number values we get from the querySelector
        console.log(e.dataset.input);

        //Then we push the number values to the holdData array
        holdData.push(e.dataset.input);
        console.log(holdData);

        // the logic in this for loop will set up the holdData array for eval()
        // eval() takes a string parameter and is able to interpret strings as numerical expressions, it returns
        // the value as a number data type.
        // eval() will ONLY TAKE numerical expressions like ex. ('2 + 2') NOT ('2 + 2 =')
        for (var i =0; i <holdData.length;i++) {

            // So we have to set a condition if any index of holdData has a '='
            if(holdData[i] === '='){

            // If it contains a '=', we remove it with .pop()
                holdData.pop();

            // Then combine holdData with .join() and assign the output value to combineData
                combineData = holdData.join('');
                console.log(combineData);

            // Once '=' is clicked, we want to reset the holdData Array to have ONLY the calculated value
            // so we can continue to do calculations from where we left off
                holdData = [eval(combineData)];
                console.log(holdData);

            // Here we also calculate the value of combineData and output the result to the DOM
                calculated.textContent = eval(combineData);

            }   else if(holdData[i] === 'c') {

                holdData = [];
                combineData = undefined;

            // Initial value of the DOM element will be 0
                calculated.textContent = 0;

            }
        }

    //  Everytime we click on a button the value is being pushed to holdData
        combineData = holdData.join('');
        output.textContent = combineData;
        console.log(combineData);

    });
});


console.log(output)