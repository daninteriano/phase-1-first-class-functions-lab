// Code your solution in this file!

//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}

const fareDoubler = function(num, fn){
    return 2 * fn(num)
}

function selectDifferentDrivers(array, func){
    
}