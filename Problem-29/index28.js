/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
// Solution one: Based on the length  of the array, determine the placement of the roman numerals


function convertToRoman(num) {
    let digits = num.toString().split('')
    let romanArr = [];
        digits.forEach((num, i, arr) => {
            switch (digits.length) {
                case 4:// Thousands place     
                
                    while (num > 0) {
                        romanArr.push('M')
                        num--;
                    }
                
                if (digits.length == 4) digits.shift();
                case 3:// Hundreds place
                num = arr[i]
                switch (num) { 
                    case '4':romanArr.push('CD');num -= 4;digits.shift();break;
                    case '5':romanArr.push('D');num -= 5;digits.shift();break;
                    case '9':romanArr.push('CM');num -= 9;digits.shift();break;
                }
                
                if (digits.length == 3){
                    while (num > 0) {
                        if (num > 5) {
                            romanArr.push('D'); num -= 5;
                        }
                       
                        romanArr.push('C')
                        num--;
                    }
                }
                if (digits.length == 3) digits.shift();
                case 2:// Tens place
                num = arr[i]
                    switch (num) { 
                        case '4':romanArr.push('XL');num -= 4;digits.shift();break;
                        case '5':romanArr.push('L');num -= 5;digits.shift();break;
                        case '9':romanArr.push('XC');num -= 9;digits.shift();break;
                    }
                    
                    if (digits.length == 2){
                        while (num > 0) {
                            
                            if (num > 5) {
                                romanArr.push('L'); num -= 5;
                            }
                           
                            romanArr.push('X')
                            num--;
                        }
                    }
                    if (digits.length == 2) digits.shift();
                    
                case 1: // Ones place
                    num = arr[i]
                    
                    switch (num) {
                        case '4': romanArr.push('IV'); num -= 4;break;
                        case '5': romanArr.push('V'); num -= 5;break;
                        case '9': romanArr.push('IX'); num -= 9;break;
                    }
                    while (num > 0) {
                        
                        if (num > 5) {
                            romanArr.push('V'); num -= 5;
                        } 
                       
                        romanArr.push('I')
                        
                        num--;
                    } 
            }
        })


       return romanArr.join('')
}

console.log(convertToRoman(9000))