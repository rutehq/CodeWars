// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {

    let catYears = 15
    let dogYears = 15
    
    if(humanYears === 1){
      catYears = catYears
      dogYears = dogYears
    }else if (humanYears === 2){
    catYears += 9
    dogYears += 9
    }else {
    catYears = catYears + 9 + ((humanYears - 2 )*4)
    dogYears = dogYears + 9 + ((humanYears - 2)*5)
    }  return  [humanYears,catYears,dogYears];
}

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    return base % factor === 0
    }


//     Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    newArr = []
    for(i=a; i <= b; i++){
      newArr.push(i)
    }
    return newArr
  }