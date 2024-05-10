// 1st assign
console.log("hello world");
// 2nd assign
let personName ="ambreen rao";
console.log(personName. toLowerCase());
console.log(personName. toUpperCase());
console.log(personName.replace(/\b\w/g,(char) =>char.toUpperCase()));

// 3 assingment
console.log("Abart Einatein once said,\"A person who never made a mistake never tried anything new.\"");

// 4 assign
let num1 = 1;
let num2 = 2;
console.log(num1 + num2);

// 5 assign
let whitespaceName ="\n\t Ambreen Rao\t\n";

console.log(whitespaceName);

let  withoutwhitespaceName = whitespaceName.trim();


console.log(withoutwhitespaceName);

// 6 assign
console.log( 4 + 4);

console.log(12 - 4);

console.log(4 * 2);

console.log(16 / 2);

// 7 assign
let favNumber = 10;
let massage = "mine favorite Number is";
console.log(massage,favNumber);

// 8 assign
//addition
console.log( 4 + 4);
//subtraction
console.log(12 - 4);
//multipliation
console.log(4 * 2);
//division
console.log(16 / 2);

// 9 assign
let friendsName =["ambreen","anam","rimsha",];

friendsName.forEach(friendname => console.log(friendname));

// 10 assign
let friendName =["ambreen","anam","rimsha",];

friendName.forEach(friendName =>console.log(`hello ${friendName}, how are you?`));

// 11 assign
let transportationModes =["sport bike","car","bus","train",];

transportationModes.forEach(mode =>console.log(`I would to own a ${mode}`));

// 12 assign
let GuestList =["ambreen","anam","rimsha",];

GuestList.forEach(oneGuest => console.log(` salam ${oneGuest}, would you like to dinner with me?`));

// 13 assign
let guestList2 =["ambreen","anam","rimsha",];

let dont_Come = guestList2 [0];

console.log(dont_Come,"nai ahh sakti");

guestList2.splice(0, 1, "naila");

guestList2.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));

// 14 assign
// creating a Guest list areay
let Guest_List =["ambreen","anam","rimsha",];

//making variable for those guest who cant come
 let dontCome1 = Guest_List[0];

//print the of guest who cant come
console.log(dontCome1, "naii ahh sakti hai");

//add or remove values from Guest List array
Guest_List.splice(0, 1,  "naila");

// massage print for bigger table
console.log("Good  News ! we have Found a Bigger Table For Dinner");

//adding a new guest at starting index of array
Guest_List.unshift("zahra");

//adding a new guest at ending index of array
Guest_List.push("zunaira");

//Get a middle index our guest list array
let middleIndexs: number = Math.floor(Guest_List. length / 2);

//adding a new guest at middle index of array
Guest_List.splice(middleIndexs, 0,  "zia");

//print massage of updates list
console.log("updated List our Guests");

// sending a invitation massage to our guests one by one with their names
Guest_List.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

//  15 assign
// creating a Guest list areay
let guestList =["ambreen","anam","rimsha",];

//making variable for those guest who cant come
 let dontCome = guestList[0];

//print the of guest who cant come
console.log(dontCome, "naii ahh sakti hai");

//add or remove values from Guest List array
guestList.splice(0, 1,  "naila");

// massage print for bigger table
console.log("Good  News ! we have Found a Bigger Table For Dinner");

//adding a new guest at starting index of array
guestList.unshift("zahra");

//adding a new guest at ending index of array
guestList.push("zunaira");

//Get a middle index our guest list array
let middleIndex: number = Math.floor(guestList. length / 2);

//adding a new guest at middle index of array
guestList.splice(middleIndex, 0,  "zia");

//print massage of updates list
console.log("updated List our Guests");

// sending a invitation massage to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

// inform that only two guests can be inviteed for dinner
console.log("unfortunately, the new dinner table wont arrive on time,so I can only invite two guests to dinner with");

//using while loop to remouve guests from the array  untill only two  names remain
while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`sorry, ${removeGuest} I cant invite you to dinner`);
}
// sending a initation to the last two guest on the list 
console.log(" invitations to the last 2 Guests");

guestList.forEach(lasttwo => console .log(`Luckly ${lasttwo}, you  are still inivited to dinner`));

// removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log(`Empty List`, guestList);

// 16 assign
//Making a array of countries and print its orgnal Order
let countriesToVisit: string[] = ["China","Denmark","Brazil","Arfentina"];
console.log("Orginal Order", countriesToVisit);

// print the array in Alphabetica order without motifying the actual array list
console.log("Aphabetical Order:",[...countriesToVisit].sort());

//show that the array  is still in its orginal order
console.log("Still in orginal order", countriesToVisit);

// print the array in reverse order without motifying the actual array list
console.log("Reverse order:", [...countriesToVisit].reverse());

//show that the array  is still in its orginal order
console.log("Still in orginal order", countriesToVisit);

// we have change the oraginal array Order now
console.log("Orginal Array Reverse:", countriesToVisit.reverse());

//print the array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// print the array to show that its its order has been changed in alphabetical now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());

// we have change the again the  oraginal array Order now reverse  order again
console.log("Orginal Array Reverse again:", countriesToVisit.reverse());


// 17 assign
let guestList3 =["ambreen","anam","rimsha", "naila","alina",];

//guestList forEach(oneGuest => console.log(`salam ${oneguest}, would you like to dinner with me?));

let lengthGuests: number = guestList.length;

console.log(`we are Inviting total ${lengthGuests} guests,`);

// 18 assign
// making a programming languages array
let programmingLanguage: string[] = ["typescript","javascript","python","PHP"];

// print a message of list
console.log("List of programming Language:");

//print the values of array in the form of list 
programmingLanguage.forEach(language =>console.log(language));


// 19 assign
interface itCourse{
    CourseName: string;
    location:string;
    onsitStudents:number;
}

let itCourse = {
    courseName :"Typescript and Javascipt",
    location : "Governer House Sindh",
    onsitStudend : 50000
};

console.log(itCourse);

//20 assign 
//creating a Array
let errorArray: string[] = ["A","B","C","D",];

// producing Error ! by accessing invalid index of array
console.log(errorArray[10]);

// error removed
console.log(errorArray[1]);

// 21 assign
// making a variebles
let five = 5;

let ten = 10 

// Test 1
console.log("\nTest 1: five is equal to 5?");

console.log(five == 5);

// test 2
console.log("\nTest 2 ten is equal to 10?");
console.log(ten == 10);

// Test 3
console.log("\nTest 3: 5 is not Equal to 10");
console.log(five  !== ten);

// Test 4
console.log("\nTest 4: 10 is greater than 5");
console.log(ten > 5);

//Test 5
console.log("\nTest 4: 10 is smaller than 10");
console.log(five < ten);

// test 6
console.log("\nTest 6: 10 is smaller than 5");
console.log(ten < 5);

// test 7
console.log("\nTest 7: 5 is equal to 10");
console.log(five == ten);

console.log("\nTest 8: 10 is not equal to 10");
console.log(ten  !== ten);

// test 9
console.log("\nTest 9: 5 is greater than 10");
console.log(five > ten);

// test 10
console.log("\nTest 10: 100 is smaller than 50");
console.log(100 < 50);

//  22 assign
// difine variables
let apple = "apple";
let UppercaseApple = "APPLE";
let ten1 = 10;
let twenty = 20;
let fruits = ["apple","banana","orange",];

// test for equality  and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != apple);

// test using Lowercase function
console.log("Is APPLE is equalto apple after converting to lowvercase?");
console.log(UppercaseApple.toLowerCase() != "apple");


// Numerical test
console.log("\n Is ten equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\n Is ten equal to twenty?");
console.log(ten1 != twenty);

// greater than
console.log("\nIs ten is greater than zero?");
console.log(ten1 > 0);

// less than 
console.log("\n Is twenty is  less than 10");
console.log(twenty <= 10);

// Greater than or equal to
console.log("/n ten is greater than or equal to 5");
console.log(ten1  >= 5);

// less than or equal to
console.log("\n twenty is less than or equal to ten");
console.log(twenty <=10);

// test s using "and "& "or" operaters

// using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);


console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// usind || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 ==20);

// test whether an item is include in array
console.log("\nIS orange inculde in my Fruits array");
console.log(fruits.includes ("orange"));

console.log("/nIs orange not inculde in my array");
console.log(!fruits.includes("orange"));

// 23 assoign
// Define variety
let alienColor = "Black";

if(alienColor === "Black"){
    //code black
    console.log(" AlienColor is Black player just earned 5 points.");
}

if (alienColor === "white"){
    console.log("alienColor is white");
}

// 24 assign
// Define variable
let alienColor2 = "green";

if (alienColor2 === "green"){
    console.log("player just earned 5 points for shooting the alien")
}
else{
    console.log("player just earned 10 points");
}

// second verison

if (alienColor2 === "green"){
    console.log("I am come from if statment.");
}
else{
    console.log("I am come from Else statment.");
}

// 25 assign
// define variable
let alientColor = "green";

// using if and else-if statment
if(alientColor === "green"){
    console.log(" (version 1)you shot down green alien you have earned 5 points");
}
else if(alientColor === "yellow"){
console.log("you shot down yellow alien you have earned 10 points")
}
else if(alientColor === "red"){
console.log("you shot down red alien you have earned 15 points")
}

// verison 2

let alientColor2 = "yellow";

if(alientColor2 === "green"){
console.log(" you shot down green  alien you have earned 5 points");
}
else if(alientColor2 === "yellow"){
console.log("(version 2) you shot down yellow alien you have earned 10 points");
}
else if(alientColor2 === "red"){
console.log("you shot down red alien you have earned 15 points");

}
// versoin 3

let alientColor3 = "red";
if(alientColor3 === "green"){
console.log("you shot down green alien you have earned 5 points");
}
else if(alientColor3 === "yellow"){
console.log("you shot down yellow alien you have earned 10 points");
}
else if(alientColor3 === "red"){
console.log("(version 3) you shot down red alien you have earned 15 points");
}

// 26 assign
// creating a variable
let age = 22;

if(age < 2){
console.log("you are a Baby.");
}
else if (age >= 2 && age < 4){
console.log("you are a Toddler.");
}
else if (age >= 4 && age < 13){
 console.log("you are a kid.");
}
else if(age >= 13 && age < 20){
console.log("you are a teenagers.");
}
else if(age >= 20 &&  age < 65){
    console.log("you are a adults.");
}
else if (age >= 65){
    console.log("you are a Elders.");
}

// 27 assign
// create in a array
let favorite_fruits =["mango", "strawberry", "orange",]

//using 5 independent if statments

if (favorite_fruits.includes("mango")){
 console.log("I really Like mangoes.");
}
if (favorite_fruits.includes("strawberry")){
    console.log("I really Like strawbery.");
}
if (favorite_fruits.includes("apple")){
    console.log("I really Like apple.");
}
if (favorite_fruits.includes("orange")){
console.log("I really Like orange.");
} 
if (favorite_fruits.includes("Banana")){
console.log("I really Like banana.");
}

// 28 assign
// creating a array 
let userName = ["ali", "zeeshan", "mahad", "admin", "usman",];

// usingg foreach loop on array
userName.forEach(oneUser =>{
    if(oneUser === "admin"){
      console.log(`hello ${oneUser}, would you like to see a status report?`)
    }else{
      console.log(`hello ${oneUser}, thank you for logging in again.`)  
    }
})

// 29 assign
let userNames =["mahad", "ali", "zeeshan", "Admin", "usman"]

userNames = []

if (userNames.length === 0){
 console.log(" your array in empty we need to find some users!")  
}else{
// usingg foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "admin"){
      console.log(`hello ${oneUser}, would you like to see a status report?`)
    }else{
      console.log(`hello ${oneUser}, thank you for logging in again.`)  
    }
})
}

// 30 assign
// Array of current users
let current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"]

// Array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", " Areeba"]

// Loop through new_users to check for username avaibility
new_users.forEach(new_one_user => {
    
    // making aconditionfor username already exist and save in our_condition varible
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print diffent messages using if_else statments
if(our_condition){
console.log(`sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This username ${new_one_user} is available`)
    }
})

// 31 assign
// creating a areey
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//using for.loop
for (let oneNumber of numbers){
    let ordinalEnding = "st"

if(oneNumber === 1){
ordinalEnding = "st"
}
else if(oneNumber === 2){
  ordinalEnding = "nd"
}
  else if(oneNumber === 3){
    ordinalEnding = "rd"
    }
else if(oneNumber === 4){
    ordinalEnding = "th"
}
else {
    ordinalEnding ="th"
  }

  console.log(`${oneNumber}${ordinalEnding}`);
}

// 32 assign
// creating a array
let pizza = ["Chicken Tika", "malai cheese", "Fajts"]

// using-loop
for (let onePizza of pizza){
    console.log(`Ilike ${onePizza} pizza`);
}

// print a message outside of the for-loop
console.log("Pizza is Love")

// 33 assign
// creating a Array
let petAnimals = ["Cat", "Dog", "Rabbit"]

// using for loop
for(let onepet of petAnimals){
    console.log(`A ${onepet} would make a great pet.`)
}
// Print a Message outside of For-loop
console.log("Any of these animals would make a great pet!")

// 34 assign
function make_shirt(size: string,printMessage: string){
console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt`)
}

make_shirt("medium", "code With amber")

make_shirt("Small", "Amber")

// 35 assign
// making a function
function make_shirt2 (size: string ="Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
    }
    // calling a function with by default values
    make_shirt2();
    
    // calling a function now with medium size and defaul message
    make_shirt2("medium")

// 38 assign
function describe_city (city:string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi");

describe_city("Lahore");

describe_city("jarman", "berlin");

// 39 assign
function city_country (city:string, country: string ) :string{
    return`${city}  ${country}`;
}

city_country("Karachi", "Pakistan");

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "japan"));

console.log(city_country("Barlin", "garman"));

// 41 assign
// Difine a function to print each magician name from an array
function show_magaicians(magaicians: string[]){
    magaicians.forEach(mane => console.log(mane));
}

// Define an array containing magicians name 
let magaicians_name= ["Ambreen Shakeel","Usra","  Ali"]

// call the function to print each magicians name
show_magaicians(magaicians_name);

// 42 assign
//Difine function show the magicians name

function show_magicians1(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great2(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Difine an array of magicians name 
let magicians_names = ["Ambreen shakeel", "Usra", "Ali"];


let great_magicians = make_great2(magicians_names);


console.log(great_magicians);


// 43 assign
//Define afunction with rest parameter
function makeSandwisch(...item:string[]){
    console.log("\nMaking a sandwisich with the following item: \n");

item.forEach(singleItem => console.log(singleItem));

console.log("\nNow Enjoy Sandwich");
}

// call the function 3 times with 3 different number of arguments
makeSandwisch("chicken", "cheese","mayo","egg");

makeSandwisch("bread","butter",);

makeSandwisch("bread", "butter", "mayo", "egg","cheese", "chicken", "lettuce","tomoto");















//Difine function show the magicians name

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Difine an array of magicians name 
let magicians_names1 = ["Ambreen shakeel", "Usra", "Ali"];


let great_magicians1 = make_great(magicians_names);


// making a coppy of orignal array though .slice()function
let copy_magicians_names = magicians_names.slice();

//modify the copied array to include "the great" with their names
let copy_great_magicians = make_great (copy_magicians_names);

// show both arrays orginal and copied

// orignal
console.log("\n original Array\n")
show_magicians(magicians_names);

// copied
console.log("\n copied Array\n")
show_magicians(copy_great_magicians);
 
// 45 assign

function create_car(manufacturer, model, ...options){
    // initialize a car object with manufacturer and model
    let car = {
        manufacturer:manufacturer,
        model:model,
    };

    // add additional option to the car object
    options.forEach(option =>{
        let [key, value] = option.Split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

// call the function to create a car object
let my_car = create_car("Toyyoto", "Carrolla","color:black","sunroof","year: 2024");

// printbthe variable to ensure all the information is store correctly in the car object
console.log(my_car);
















































































































































































































































