// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// // All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// // Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// // An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// validate Card and return true or false
const validateCredit = (valid1) => {
    
    const valid = [];
    const invalid = [];

    //create a new array, loop via cards and store them in a new array
    const oldArrayCards = [];
    valid1.forEach(element => {
        oldArrayCards.push(element);
    });
    
    oldArrayCards.reverse();

    //create a new array to put the card after all check been done
    const newArrayCards = []; 


    //loop through the array
    for (let i = 0; i < oldArrayCards.length; i++) {
        if(valid1.length === 16 && i % 2 === 1) {
            let numbersMultiplyBy2 = oldArrayCards[i] * 2;
            newArrayCards.push(numbersMultiplyBy2 > 9 ? numbersMultiplyBy2 - 9 : numbersMultiplyBy2);
           
        } else {
            newArrayCards.push(oldArrayCards[i]);
        }
    }

  //reverse the numbers back to the original order
  newArrayCards.reverse();


  //Now, make sure ever card does not have remainder. So the total devide by 10. If it does, it is invalid.
  let total = 0;
  newArrayCards.forEach(number => {
 
    total += number;

    });
    // console.log(total);
    // console.log(total / 10);
    //check if the total is divisible by 10
    if(total % 10 == 0) {
        return true;
    } else {
        return false;
    }  
}

// check cradit card and return array of unvalid cards
const findInvalidCards = (batch) => {
    const invalidCards = [];

    batch.forEach(card => { 

        if(validateCredit(card) === false) {
            invalidCards.push(card);
        }
    });


    return invalidCards;
}

// return array of invalid cards by companies
const idInvalidCardCompanies = (findInvalidCards) => {
    const invalidCardCompanies = [];

    findInvalidCards.forEach((card, cardIndex) => {
        //console.log(card[0]);

        const innerArray = [];

            const cardNumber = card[0];

            if(cardNumber  === 3) {
                innerArray.push('Amex (American Express)');
            } else if(cardNumber  === 4) {
                innerArray.push('Visa');
            } else if(cardNumber  === 5) {
                innerArray.push('Mastercard');
            } else if(cardNumber  === 6) {
                innerArray.push('Discover');
            } else {
                innerArray.push('Company not found');
            }
        
 
        invalidCardCompanies.push(innerArray);
    });


        // Remove duplicates
    const uniqueInvalidCardCompanies = invalidCardCompanies.filter((value, index, self) => {
        const stringify = (arr) => JSON.stringify(arr);
        return self.findIndex((entry) => stringify(entry) === stringify(value)) === index;
    });

    return uniqueInvalidCardCompanies;
}

console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//console.log(validateCredit(valid1));
//console.log(findInvalidCards(batch));
//console.log(findInvalidCards(batch));
// Project Goals

// Context: 
// The company that you work for suspects that credit card distributors have been mailing out cards 
// that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. 
// Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification 
// process using your knowledge of functions and loops to handle multiple credit cards at a time. 
// Unlike the other clerks, you can spend the rest of your time relaxing!

// As you progress through the steps, use the terminal and console.log() statements to check the output 
// of your loops and functions. 







