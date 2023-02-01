////////////////////////////////////
// Lecture: Hoisting


//function
calculateAge(2004);

function calculateAge(year){//function declartion
    console.log(2023-year);
}

//retirement(1956);

var retirement=function(year)//function expression
{
    console.log(65-(2016-year));
}
retirement(1956);



//variables
console.log(age);
var age=23;

function you()
{
    console.log(age);
    var age=65;
    console.log(age);
}
you();
console.log(age);

