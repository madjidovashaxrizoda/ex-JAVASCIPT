//======================================= Array Method Exercises =================================



const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?

let userIncome = people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0);
let average = userIncome / people.length;
console.log(average);

// 2) Who are the people that are currently older than 30?

for (let index = 0; index < people.length; index++) {
    let today = new Date().getFullYear();
    if (today - Number(people[index].DOB.slice(6,10)) > 30) {
        console.log(people[index]);
    }
    
}

// 3) Get a list of the people's full name (firstName and lastName).

let mapped = people.map( person => person.firstName + ' ' + person.lastName);
console.log(mapped);

// 4) Get a list of people in the array ordered from youngest to oldest.

let sorted = people.sort((a,b) => new Date(b.DOB) - new Date(a.DOB));
console.log(sorted);

// 5) How many people are there in each department?

let dev = [];
let mar = [];
let sales = [];
let office = [];
for (let index = 0; index < people.length; index++) {
    if (people[index].department === 'Development') {
       dev++; 
    }if (people[index].department === 'Marketing') {
        mar++;
    } if (people[index].department === 'Sales') {
        sales++;
    } if (people[index].department === 'Office Management') {
        office++;
    }
    
}
console.log(`Development: ${dev} , Marketing: ${mar} , Sales: ${sales}, Office Management: ${office}`);




const orders = [
  { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
      { productId: '123', price: 55 },
      { productId: '234', price: 30 },
  ]},
  { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
      { productId: '234', price: 30 },
  ]},
  { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
      { productId: '567', price: 30 },
      { productId: '678', price: 80 },
  ]},
  { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '789', price: 12 },
      { productId: '890', price: 90 },
  ]},
      { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '901', price: 43 },
      { productId: '123', price: 55 },
  ]},
];

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

let filtered2 = orders.filter( order => order.customerId == 234 && order.delivered == false )
console.log(filtered2);

// 2) Create a new property on each order with the total price of items ordered.

let mapped2 = orders.map(order => ({...order, orderTotal: order.items.reduce((a,item) => a+item.price,0)}))
console.log(mapped2);

// 3) Have all the orders been delivered?

let everyMethod = orders.every(order => order.delivered);
console.log(everyMethod);

// 4) Has the customer with ID '123' made any orders?

let someMethod = orders.some(order => order.customerId === '123');
console.log(someMethod);


// 5) Have any products with an id of 123 been sold?

let someMethod2 = orders.some(e => e.items.find(i => i.productId === '123'));
console.log(someMethod2);


const users = [
  { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
  { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
  { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
  { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
  { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
  { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
  { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
  { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
  { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
  { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
  { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
  { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
  { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
  { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
  { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
  { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
  { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
  { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
  { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
  { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

// 1) What is Madison Marshall's user id?

let findMethod = users.find(user => user.firstName === 'Madison' && user.lastName==='Marshal')
console.log(findMethod);

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

let findMethod2 = users.find(user => user.id === comments[0].userId);
console.log(findMethod2);

// 3) Which user commented 'OK great thanks'?

let findMethod3 = comments.find(comment => comment.text === 'OK great thanks');
console.log(findMethod3);

// 4) Add the user's first and last name to each comment in the comments array

const addingFirstlastName = comments.map(comment => {
  const {firstName, lastName} = users.find(user => comment.userId === user.id)
  return {...comment, firstName, lastName};
})
console.table(addingFirstlastName);









//====================================JAVASCRIPT EXERCISES =========================================



//1.Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the 2 numbers is 100

function myFunction(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}
myFunction(63, 37);

//2.Write a JS program to get the extension of a filename

function myFunction2(str) {
  const getFileExtension = str.slice(str.lastIndexOf("."));
  console.log(getFileExtension);
}
myFunction2("index.html");

//3.Write a JS program to replace every character in a given str with the character folliwing it in the alphabet

function myFunction3(str) {
  let myAlphabet = str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

  console.log(myAlphabet);
}
myFunction3("abc");

//4.Write a JS program to get the current date

let myDate = (date = new Date()) =>{
    let days = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    return `${days}.${month}.${year}`;
}
console.log(myDate());

//5.Write a JS program to create a new str adding "New" in front of a given str. If the given str begins with  "New" already then return the original string. 

function myFunction4(str) {
   if (str === 'New') {
     console.log(str);
   }else{
    console.log(`New ${str}`);
   }
    
}
myFunction4('World');









