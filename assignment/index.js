document.getElementById('inputNumber').addEventListener('input', function() {
    const number = parseInt(this.value, 10);
    const result = document.getElementById('outputValue');
    
  
    let nextNumber = number;
    let nextOddNumbers = [];
    let nextEvenNumbers = [];

    if (isNaN(number)) {
        result.innerHTML = '<p>Please enter a valid number.</p>';
        return;
    }

    if(nextNumber === 0){
        result.innerHTML = '<p>Enter numbers Greater than 0 </p>';
    }

    if(nextNumber < 0){
        result.innerHTML = '<p> Enter Positive Number </p>'

    }

    if(nextNumber > 0) {  
        if (nextNumber % 2 !== 0) {
        nextNumber += 2;

        while (nextOddNumbers.length < 3) {
            nextOddNumbers.push(nextNumber);
            nextNumber += 2;
        }
        
        result.innerHTML = `<p>${nextOddNumbers.join(', ')}</p>`;
     
        }   
        else if (nextNumber %2 == 0 ) {
        

        nextNumber += 2;
        // while (nextEvenNumbers.length < 3) {
        //     nextEvenNumbers.push(nextNumber);
        //     nextNumber += 2;
        // }
        for(let i =0 ; i<3 ; i++)
        {
            nextEvenNumbers.push(nextNumber);
            nextNumber += 2;
        }
        
        result.innerHTML = `<p> ${nextEvenNumbers.join(', ')}</p>`;
        }
    }
 
   
});
   