/*************
 * variale and datatypes 
*/

var firstname="Mahak";
console.log(firstname);

var lastname="garg";
console.log(lastname);
var age =18;
console.log(age);

var fullage = true;
console.log(fullage);

var job;
console.log(job);

job="software engineer";
console.log(job);
/*not use this->-> 
 var 3year=3;
var &year=3;
 var mahak/garg="mahak garg";
 var function=3;
var if=3;*/





/********************
 * variable mutation and type coercion 
*/

 var firstname="Mahak";
var age= 18;
//types coercion
console.log(firstname +""+age);

var job, ismarried;
job="software engineer";
ismarried=false;
console.log(firstname +"is a"+age+"year old"+job+"Is she married"+ismarried);

//variable mutation
age="eighteen";
job ="teacher";
alert(firstname +"is a"+age+"year old"+job+"Is she married"+ismarried);

//user input
var lastname=prompt("what is her lastname?");
console.log(firstname+""+lastname);





/******************
 * Basic operators
 */

var year,yearmahak,yearmark;
year=2021;
agemahak=25;
agemark=30;
//math operators
 yearmahak=year-agemahak;
 yearmark=year-agemark;
console.log(yearmahak);
console.log(year+2);
console.log(year*2);
console.log(year/2);

//logical operators
var mahakolder=agemahak<agemark;
console.log(mahakolder);

//type of operator
console.log(typeof mahakolder);
console.log(typeof agemahak);
console.log(typeof "it's me MAHAK");
var m;

console.log(typeof m);








/********************
 * operator precedence
*/

var now=2021;
var yearmahak=1999;
var fullage=18;
//multiple operator
var isfullage= now-yearmahak>=fullage;
console.log(isfullage);
//grouping
var agemahak= now-yearmahak;
var agemark= 28;
var average= (agemahak + agemark) /2;
console.log(average);
//multiple assignments
var x,y;
x=y=(3+5)*4-6;//8*4-6//32-6//26
console.log(x,y);

//More operators
x=x*2;//x*=2;
console.log(x);
x+=10;
console.log(x);
x=x+1;//x+=1;//x++
console.log(x);





/*************
 * CODING CHALLENGE 1
 */
/*
Mark and John are trying to compare their BMI(Body Mass Index),
which is calculated using the formula:BMI=mass/height^2.(mass in kg and 
height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has
   a higher BMI than John.
4. Print a string to the console containing the variable from step3.(something like 
    "Is Mark's BMI higher than John's? true").
*/
//SOLUTION
var mass1,mass2,height1,height2,BMI1,BMI2,highBMI;
mass1=40;
mass2=50;
height1=35;
height2=40;
BMI1=mass1/(height1*height1);
BMI2=mass2/(height2*height2);
highBMI=BMI1>BMI2;
console.log("Is Mark's BMI higher than John's?" +highBMI);









/********
 * If/else statements
*/

var firstname="MAHAK";
var application="approved";

if(application==="disapproved")
{
    console.log(firstname +"application is" +application);
}else{
    console.log(firstname +"application is" +application);
}
var leave=true;
if(leave)
{
    console.log(firstname +"application is disapproved");
}else{
    console.log(firstname +"application is approved");
}
var mass1,mass2,height1,height2,BMI1,BMI2,highBMI;
mass1=40;
mass2=50;
height1=35;
height2=40;
BMI1=mass1/(height1*height1);
BMI2=mass2/(height2*height2);
//highBMI=BMI1>BMI2;
//console.log("Is Mark's BMI higher than John's?" +highBMI);
if(BMI1>BMI2)
{
    console.log(" Mark's BMI higher than John's");
}else{
    console.log(" John's BMI higher than Mark's");
}











/*******
 * Boolean logic
*/

var firstname="mahak";
var age="18";

if(age<13)
{
    console.log(firstname +" is a girl");
}else if(age>=13 && age<20)
{
    console.log(firstname +" is a teenager");
}
else
{
    console.log(firstname +"is a women");
}











/********
 * the ternary operator and switch statements
 */

var firstname="mahak";
var age= 16;

//Ternary operator
age>=18 ?console.log(firstname + "drinks coffee.")
:console.log(firstname +"drinks milk");

var drink =age>=18 ?"coffee" :"milk";
console.log(drink);

/*if(age>=18)
{
    var drinks=coffee;
}else{
    var drink=milk;
}*/

//Switch statement
var job="engineer";
switch(job)
{
    case "teacher" :
    case "engineer":
         console.log(firstname +" teaches kids how to code.");
         break;
    case "driver" :
        console.log(firstname +" drives an uber in lisbon.");
        break;
    case "designer":
        console.log(firstname +" desgins beautiful websites.");
        break;
    default:
        console.log(firstname +" does something else.");
}
switch(true)
{
    case age<13:
        console.log(firstname +" is a girl");
        break;
    case age>=13 && age<20:
        console.log(firstname +" is a teenager");
        break;
    default:
        console.log(firstname +"is a women");
        break;
}

/*var firstname="mahak";
var age="18";

if(age<13)
{
    console.log(firstname +" is a girl");
}else if(age>=13 && age<20)
{
    console.log(firstname +" is a teenager");
}
else
{
    console.log(firstname +"is a women");
}*/










/***********
 * Truthy and falsy values and equality operators
 */

//falsy values: undefined, null, 0,'',NaN
//truthy values:NOT falsy values
 
var height=23;
if(height||height===0)
{
    console.log("variable is defined");
}else{
    console.log("variable has not been defined");
}

//Equality operators
if(height=="23")
{
    console.log("The == operator does type coercion ");
}
if(height==="23")
{
    console.log("The == operator does type coercion ");
}else{
    console.log("The === operator does equal to values ");
}







/**************
 * CODING CHALLENGE 2
 */
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team
scored 89,120,103 points,while Mike's team scored 116,94,and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average(highest average score), and print the winner to the 
    console.Also include the average score in the output.
3. Then change the scores to show different winners.
    Don't forget  to take into account there might be a draw (the same average score).
4. EXTRA: Mary also plays basketball, and her team scored 97,134 and 105 points.
    Like before, log the average winner to the console. HINT: you will need the && operator
    to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/


//SOLUTION:)

var jp1=89,jp2=120,jp3=103,mp1=116,mp2=94,mp3=123;
javg=(jp1+jp2+jp3)/3;
mavg=(mp1+mp2+mp3)/3;
console.log("John's average"+ javg);
console.log("Mike's average"+ mavg);

if(javg>mavg)
{
    console.log("John is winner with average " + javg);
}else{
    console.log("Mike is winner with average " + mavg);
}

var jp1=20,jp2=120,jp3=100,mp1=16,mp2=200,mp3=24;
javg=(jp1+jp2+jp3)/3;
mavg=(mp1+mp2+mp3)/3;
console.log("John's average"+ javg);
console.log("Mike's average"+ mavg);

if(javg>mavg)
{
    console.log("John is winner with average " + javg);
}else if(mavg>javg){
    console.log("Mike is winner with average " + mavg);
}else{
    console.log("Match is draw ");
}


var jp1=89,jp2=120,jp3=103,mp1=116,mp2=94,mp3=123,Mp1=97,Mp2=134,Mp3= 105 ;
javg=(jp1+jp2+jp3)/3;
mavg=(mp1+mp2+mp3)/3;
Mavg=(Mp1+Mp2+Mp3)/3;
console.log("John's average"+ javg);
console.log("Mike's average"+ mavg);
console.log("Mary's average"+ Mavg);
if(javg>mavg && javg>Mavg)
{
    console.log("John is winner with average " + javg);
}else if(mavg>javg && mavg>Mavg){
    console.log("Mike is winner with average " + mavg);
}else{
    console.log("Mary is winner with average "+ Mavg);
}

var jp1=89,jp2=126,jp3=103,mp1=116,mp2=94,mp3=123,Mp1=97,Mp2=134,Mp3= 102 ;
javg=(jp1+jp2+jp3)/3;
mavg=(mp1+mp2+mp3)/3;
Mavg=(Mp1+Mp2+Mp3)/3;
console.log("John's average"+ javg);
console.log("Mike's average"+ mavg);
console.log("Mary's average"+ Mavg);

switch(true)
{
    case javg>mavg && javg>Mavg:
        console.log("John is winner with average " + javg);
        break;
    case mavg>javg && mavg>Mavg:
        console.log("Mike is winner with average " + mavg);
        break;
    case Mavg>javg&& Mavg>mavg:
        console.log("Mary is winner with average "+ Mavg);
        break;
    default:
        console.log("Match is draw");
        break;
}







/**********************
 * Functions
 */

function calculateage(birthyear)
{
    return 2023-birthyear;
} 
var agemahak=calculateage(2004);
var ageMary=calculateage(2003);
var ageMike=calculateage(2002);
console.log(agemahak,ageMary,ageMike);


function retirementyear(year,name)
{
    var age= calculateage(year);
    var off= 70-age;
    if(off>0){
        console.log(name +" retires in " + off +" years.");
    }else{
    console.log(name +" is already retires ");
}
}
retirementyear(2004,"mahak");
retirementyear(1915,"john");
retirementyear(2002,"Mary");









/***********
 * Functions Statements and Expressions
 */
//function declaration:
//function what(job,firstname){} 

//function expression

var what = function(job,firstname){
    switch(job){
        case "teacher":
            return firstname +" teaches kids how to code.";
        case "driver":
            return firstname +" drive a cab in lisbon.";
        case "designer":
            return firstname +" designs beatuiful websites.";
        default:
            return firstname +" does something else.";
    }
}
console.log(what("teacher","john"));
console.log(what("driver","john"));
console.log(what("designer","john"));
console.log(what("engineer","john"));




/*****************
 * Arrays
 */

//initialize an array
var names =["john" ,"mahak", "mark"];
var years = new Array(1994,2000,2004);

console.log(names,names[2],years,years[1]);
console.log(names.length);

//Mutate array data
names[2]="Ben";
names[names.length]="Mary";
console.log(names);

//Different data types
var john =["Mahak", "Garg",2004,"Engineer",false];
console.log(john);

john.push("PINK");
console.log(john);
john.unshift("Miss.");
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(2004));//indicate the position

var isteacher =john.indexOf("teacher")===-1 ?"Mahak is not a teacher " :"Mahak is a teacher";
console.log(isteacher);








/*********************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The 
bills were $124, $48 and $268.

To tip waiter a fair amount, john created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill 
is between $50 and $200,and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts(bill + tip).

(NOTE: To calculate 20% of a value, simple multiply if with 20/100 =0.2)
*/

//SOLUTION

function tipcalculator(bill){
    var percentage;
    if(bill<50)
    {
        percentage = .2;
    }else if(bill>=50 && bill<200)
    {
        percentage=1.5;
    }else{
        percentage=.1;
    }
    return percentage*bill;
}

var bills=[124,48,268];
var tips = [tipcalculator(bills[0]),tipcalculator(bills[1]),tipcalculator(bills[2])];
var finalvalues =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips ,finalvalues);





/*************
 * Objects and properties
 */

//Object literal
var john ={
    firstname: "Mahak",
    lastname: "Garg",
    birthyear:2004,
    family:["Brijgopal","Hemlata","Nishant"],
    job:"Engineer"
};

console.log(john);
console.log(john.firstname);
console.log(john["lastname"]);
var x="birthyear";
console.log(john[x]);

john.job ="IPS";
console.log(john);
//new object syntax
var jane = new Object();
jane.firstname ="Mike";
jane.job ="Doctor";
jane.birthyear =1999;
jane["lastname"] ="smith";
console.log(jane);
