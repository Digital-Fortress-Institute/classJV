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
        city:['Ekiti', 'Yola', 'Ogun', 'Osun'],
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

myData[2]['name']='Toke'
console.log(myData)
// console.log(myData[2]['city'][2]);
// let num = ''
// console.log(typeof(num))
// let school = String()
// console.log(typeof(school))
// let digital = '26 Akowonjo Road Shasha bustop';
// let ourClass = ' Radioboy';
// console.log(digital.concat(ourClass));
// console.log(digital + ourClass);
// console.log(ourClass+ ' ' +'lives in'+ ' '+ ' ' +digital);
// console.log(digital.indexOf('Road'));
// console.log(digital.includes('Roa2'));
// console.log(digital.toUpperCase());
// let digital = '26 Akowonjo "Road" Shasha bustop';

// console.log(digital.slice(2, 10));
// console.log(digital.substring('3'));

// console.log(digital.replace('bustop', 'Cresent'));
// console.log(digital.split(' '));
// console.log(digital.trimStart());
// let newDigital = digital.split(' ')
// console.log(newDigital.reverse().join(' '));
// console.log(digital.startsWith('2'));
// console.log(digital.endsWith('p'));
// console.log(digital.repeat(3));
// object

// let employee= {
//      name:'John',
//     city:'Lagos',
//     LGA:'Mushin'
//  }
// employee.



// let items = [
//     {
//     "kind": "youtube#searchResult",
//     "etag": "nQe1u6AuHVNAq-5c4q2vk_c82tM",
//     "id": {
//     "kind": "youtube#video",
//     "videoId": "lu37BK3enHA"
//     }
//     },
//     {
//     "kind": "youtube#searchResult",
//     "etag": "H2ku0aA59FaA_hn_kFxJUwS2DQc",
//     "id": {
//     "kind": "youtube#video",
//     "videoId": "NPCC02SaJVg"
//     }
//     },
//     {
//     "kind": "youtube#searchResult",
//     "etag": "fCHL7StFlvUtnoBNE8rTbR2PJ_A",
//     "id": {
//     "kind": "youtube#video",
//     "videoId": "Dn89uthcqdo"
//     }
//     },
//     {
//     "kind": "youtube#searchResult",
//     "etag": "DvPTHM08xG_NwHTa9lkNW6F-LEE",
//     "id": {
//     "kind": "youtube#video",
//     "videoId": "qrIP_igi76U"
//     }
//     },
//     {
//     "kind": "youtube#searchResult",
//     "etag": "wQLNIqbxeOne0EWH6bIW7PykhkI",
//     "id": {
//     "kind": "youtube#video",
//     "videoId": "aH94xJtqj5A"
//     }
//     }
//     ]
    // console.log(items[0]);


// numbers data types


let num1 = 9;

// console.log(typeof(num1))
// console.log(num1.toFixed(2));
// console.log(num1.toPrecision(3));


// control flow
// tanary operator

// console.log(num1 >= 10 ? 'Yes':'no');

let score =prompt('Enter your Score')
score=score.toUpperCase()


// if and else
if(score == 'A'){
    console.log('Excellent') 
}else if(score == 'B'){
    console.log('Second Grade')
}else if( score == 'C'){
    console.log('Third Grade')
}else if(score == 'D'){
    console.log('Fail')
}else{
    console.log('Unknown Result')
}


// switch case:











































