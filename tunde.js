// ------out putting data -----

// alert('Hello World');
// confirm('Are you sure you want5 to delete this?');
// document.write('Welcome to digital fortress');
// console.log('Here we are');

// syntax used in setting variables in javascripts;

// var x = 10;

// var x = 30;
// console.log(x)
// ++x

// let mistura = 50;
// ++mistura
// // let mistura  = 90;
// console.log(mistura)
// const myClass= 20;
// ++myClass
// const myClass = 30;
// console.log(myClass)
// let x = 10;
// ----------concartination-------
// let firstName = 'John';
// let lastName = 'Doe';
// let fullName = firstName + lastName
// let fullName2 = 'My name is '+ firstName+ ' '+ lastName
// console.log(fullName)
// console.log(fullName2)
// concartination with template litreals
//let fullName = `Hello, Mr ${firstName} ${lastName}.I hope your are doing good today?`;
// console.log(fullName)


// ----------creation of programms

// let firtName = prompt("Enter your first name");
// let lastName = prompt('Enter your last name');
// console.log(`${firtName} ${lastName}`);
// let firstNumber = parseInt(prompt('Enter your first number'));
// let secondNumber = parseInt(prompt('Enter your second number'));
// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)



// let firstName = prompt('Enter your first name');
// let lastNAme = prompt('Enter your last name');

// console.log(`good morning ${firstName}, ${lastNAme}`);


// let num1 = parseInt(prompt('Enter your first number'));
// let num2 = parseInt(prompt('Enter your second number'))
// console.log(`${num1} + ${num2} = ${num1 + num2}`);

// let firstName = prompt('Enter your first name');
// let lastNAme = prompt('Enter your last name');
// let age = prompt('Enter your age')

// console.log(`good morning ${firstName} ${lastNAme} I am ${age} years olod`);


// let animal = prompt('Enter your favorite animal');
// let myColor = prompt('Enter your favourite color');
// console.log(` My favourite animal is ${animal} and my best is ${myColor}`)

// let yourName = prompt('Enter your first name');
// let birthyear = prompt('Enter your birth year');
// let yourAge = 2024 -  birthyear

// console.log(` My name is ${yourName}, my birth year is ${birthyear} and which makes my age ${yourAge}`);


// let myFood = prompt('Enter your best food');
// let homeTown = prompt('Enter your home town');
// console.log('My favourite food is'+ ' '+ myFood+ ' '+ ' '+ ' ' +'my home tow is'+ ' '+ homeTown);
// Data Types
// Strings: this data type is alphanumeric data. 

let address = '107, Herbert Macauly Way, Off \'University\' Road, Akoka Yaba, Lagos State';

let person = "Mr John lives in "
console.log(typeof(address));
// console.log(address[5]);
// console.log(address.slice(0, 30));
// console.log(address.toUpperCase());
// console.log(address.toLowerCase());
// console.log(address.replace('Lagos', 'Ogun'));
// console.log(address.length);
// console.log(address.lastIndexOf('e'));
// let x = address.split(' ');
// console.log(x);
// x.pop()
// x.shift()
// x.push('Purple');
// x.unshift('Mango');
// console.log(x);

// console.log(x.reverse().join(' '));
// console.log(person.concat(address));

// console.log(address.includes('Yaba'));
// console.log(address.indexOf('H'))





// array data types

let myColor = ['red', 'blue', 'orange', 'gold', 'pink']
// pop();
// shift();
// unshift();
// reverse();
// let x = myColor[1]
// console.log(x)
// myColor.splice(3, 0, 'Welcome')
// console.log(myColor)


let myData = [
    {
        name:'John',
        city:'Lagos',
        LGA:'Mushin'
    },
    {
        name:'Tola',
        city:'Ogun',
        img: './hero-abs-2.png',
        LGA:'Ifo'
    },
    {
        name:'Esther',
        city:'Ekiti',
        LGA:'Akoko'
    },
    {
        name:'Mistura',
        city:'Ilaro',
        LGA:'Ede'
    },
    {
        name:'Emeka',
        city:'Abia',
        LGA:'Rivers'
    },
]
console.log(myData)



















