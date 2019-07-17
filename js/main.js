"use strict";

let names = [
    "Ceyhun",
    "Anar",
    "Urxan",
    "Ulvi",
    "Kamil",
    "Esger",
    "Misir",
    "Huseyn",
    "Ismayil",
    "Fuad",
    "Teymur",
    "Vasif",
    "Gunel",
    "Aga",
    "Yaver",
    "Cavid"
];

// console.log(names);

// console.log(names.toString());
// console.log(names.join(" // "));
// console.log(names);

// let deletedElement = names.pop();
// console.log(names);
// console.log(deletedElement);

// names.push("Afiq");

// names.shift();

// names.unshift("Afiq");

// names[2] = "Afiq";

// delete names[0];
// console.log(names[0]);
// names.push( "A", "B", "C")
// names.splice(3, names.length, "A", "B", "C");

// names.sort();
// names.reverse();

let liItems = "";
names.forEach(menimFunksiyam);
// let ages = [-1,6,153, -60, 10, 15, 27, 21, -19, 28, -26];
// console.log(ages);
// ages.forEach(menimFunksiyam)

function menimFunksiyam(deyer, index, array){
    //console.log(`${index} elementin deyeri = ${deyer}. array = ${array}`);
    liItems= liItems + "<li>" + (index + 1) + " - " +  deyer + "</li>";
}

console.log(liItems);
document.getElementById("student-list").innerHTML = liItems;

console.log(names);





let newNames = names.map(myMapFunc);

function myMapFunc(value, index, array){
    return index+". " + value.toLowerCase();
}
console.log(newNames);



let namesWithA = names.filter(myFilterFunc)

function myFilterFunc(value, index, array){
    console.log(value);
    
    if(value.toLowerCase().indexOf('a') != -1) {
        return true;
    }
    return false;
}

console.log(namesWithA);


// let test = [];

// console.log(ages);

// console.log(findMax(test));
// console.log(findMin(ages));

// console.log( Math.min.apply(null, ages) );

// ages.sort(
//     function(a, b){
//         return a - b;
//     }
// );


function findMax(ages){
    let uzunluq = ages.length;
    let maximum = -Infinity;

    for(let i = 0; i < uzunluq; i++){
        if(maximum < ages[i]){
            maximum = ages[i];
        }
    }

    return maximum;
}

function findMin(ages){
    let uzunluq = ages.length;
    let minimum = ages[0];

    for(let i = 0; i < uzunluq; i++){
        if(minimum > ages[i]){
            minimum = ages[i];
        }
    }

    return minimum;
}

// console.log(ages);



let cars = [
    {
        manufacturer: "Mercedes",
        model: "E220",
        year: 2017
    },
    {
        manufacturer: "BMW",
        model: "M3",
        year: 2019
    },
    {
        manufacturer: "Lada",
        model: "07",
        year: 2012
    },
    {
        manufacturer: "Audi",
        model: "A7",
        year: 2020
    }
];

cars.sort(
    function(a, b){
        return b.year - a.year;
    }
);


cars.sort(
    function(a, b){
        let aManu = a.model.toLowerCase();
        let bManu = b.model.toLowerCase();

        if(aManu > bManu){
            return 1;
        } 
        
        if(aManu < bManu){
            return -1;
        }

        return 0;
    }
);

console.log(cars);



let carsWithA = cars.filter(myCarsFilterFunc)

function myCarsFilterFunc(value, index, array){
    
    if(value.manufacturer.toLowerCase().indexOf('a') != -1) {
        return true;
    }
    return false;
}

console.log(carsWithA);


