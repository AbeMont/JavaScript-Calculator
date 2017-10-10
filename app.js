var inputValues = document.querySelectorAll('[data-input]');
var output = document.getElementById('output');
var calculated = document.getElementById('calculated');

console.log(inputValues);

var holdData = [];

// Click Event

inputValues.forEach(function (e,i,a) {
    var combineData;
    e.addEventListener('click', function(){
        console.log(e.dataset.input);
        holdData.push(e.dataset.input);
        console.log(holdData);
        for (var i =0; i <holdData.length;i++) {
            if(holdData[i] === '='){
                holdData.pop();
                combineData = holdData.join('');
                console.log(combineData);
                calculated.textContent = eval(combineData);
                holdData = [eval(combineData)];
                combineData = eval(combineData);
            }   else if(holdData[i] === 'c') {
                holdData = [];
                combineData = undefined;
                calculated.textContent = 0;
            }
        }
        console.log(holdData);
        combineData = holdData.join('');
        output.textContent = combineData;
        console.log(combineData);

    });
});


console.log(output)