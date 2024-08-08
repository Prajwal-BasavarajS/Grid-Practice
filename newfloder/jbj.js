document.getElementById('inputNumber').addEventListener('input', function() {
    const number = parseInt(this.value, 10);
    const result = document.getElementById('outputValue');
    
  
    let nextNumber = number;
    let nextOddarr = [];
    let nextEvenarr = [];

    // if (isNaN(number)) {
    //     result.innerHTML = '<p>Please enter a valid number.</p>';
    //     return;
    // }
    if(nextNumber === 0){
        result.innerHTML = '<p>Enter numbers Greater than 0 </p>';
        return;
    }

    if(nextNumber < 0){
        result.innerHTML = '<p> Enter Positive Number </p>'
        return;
    }


    if(nextNumber > 0) 
        {  
             if (nextNumber % 2 != 0) 
                 {
                     nextNumber = nextNumber + 2;
                        for(let i =0 ; i<3 ; i++)
                        {
                            nextOddarr.push(nextNumber);
                            nextNumber = nextNumber + 2;
                        }
                result.innerHTML = `<p>${nextOddarr.join(', ')}</p>`;
            }
        else if(nextNumber % 2 == 0)
        {
            nextNumber = nextNumber + 2;
            for(let i =0 ; i<3 ; i++)
                {
                    nextEvenarr.push(nextNumber);
                    nextNumber = nextNumber + 2;
                }
            result.innerHTML = `<p>${nextEvenarr.join(', ')}</p>`;
        }
    }  
    // else if(isNaN(number))
    //     {
    //         result.innerHTML = '<p>Please enter a valid number.</p>';
    //             return; 

    // } 

});    