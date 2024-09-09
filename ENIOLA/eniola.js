// ...Numberone
//  let firstName = prompt("Enter your first name");
//  let lastName = prompt('Enter your last name'); 
//   let fullName = firstName + lastName
// console.log(`${firstName} ${lastName}`);
// let fullName2 = 'Hello Good morning have a great day! '+ firstName+ ' '+ lastName
// console.log(fullName2)

// number2
// let firstNumber = prompt('Enter your frist number');
// let secondNumber = prompt('Enter your second number');
// console.log(`${firstNumber} ${secondNumber} = ${firstNumber + secondNumber}`)

// number3
//let firstName = prompt ('Enter your fristName');
//let lastName = prompt ('Enter your lastName');
//let Age = prompt ('Enter your age');
//console.log(`${firstName} ${lastName} ${Age}`);
//let fullName = `Good day how was your day going ${firstName} ${lastName} 25years`;
 //console.log(fullName);

// number4
// let favoritecolor = prompt ('Enter your favorite color');
// let favoriteanimal = prompt ('Enter your favorite animal')
//console.log(`${favoritecolor} ${favoriteanimal}`);
//  let fullfavorite = `my favorite color is ${favoritecolor} and my favorite animal is ${favoriteanimal}`;
//  console.log(fullfavorite)


// Number5
// let firstName = prompt('Enter your name');
// let birth = prompt('Enter your brith year');
// console.log(`${firstName} ${birth}`);
// let fristName = `Happy birthday to you ${firstName} you are now 25years`;
// console.log(firstName)


// Number6
// let hometown = prompt('Enter your home town');
// let favoritefood = prompt('Enter your favoritefood');
// console.log(`${hometown} ${favoritefood}`);
// let full = `Am from ${hometown} my best food is ${favoritefood}`;
// console.log(full)


// number7
// let title = prompt('Enter your title');
// let author = prompt('Enter your author');
// console.log(`${title} ${author}`);
// let full = `The title of the book is ${title} written by ${author}`;
// console.log(full)


// Number8
// let cityname = prompt('Enter your city name');
// let yearvisit = prompt('Enter your year visit');
// console.log(`${cityname} ${yearvisit}`);
// let full = `i visted ${cityname} in year ${yearvisit}`;
// console.log(full)


//  Number9
//  let favourtemovie = prompt('Enter your favourte movie');
// let yearrealsed = prompt('Enter year realsed');
// console.log(`${favourtemovie} ${yearrealsed}`);
// let full = `i love watching '${favourtemovie}' which is realse in year ${yearrealsed}`;
// console.log(full)


// Number10
// let favoritefruit = prompt('Enter your  favorite fruit');
// let numberoftimeseatperday = prompt('Enter number of times eat per day');
// console.log(`${favoritefruit} ${numberoftimeseatperday}`);
// let full = `My favourite friut is ${favoritefruit} i eat it ${numberoftimeseatperday} a day`;
// console.log(full)



// Number11
// let favoritesubject= prompt('Enter your  favorite subject');
//  let grade = prompt('Enter your grade level');
//  console.log(`${favoritesubject} ${gradelevel}`);
// let full = `My favourite subject is ${favoritesubject} am im leavel ${gradelevel}`;
//  console.log(full);


// Number12
//  let favoritesport = prompt('Enter your  favorite sport');
// let season = prompt('Enter the season');
// console.log(`${favoritesport} ${season}`);
// let full = `My favourite sport is ${favoritesport}which is play every ${season}`;
// console.log(full)



// let myfood = prompt('Enter your best food');
// let hometown = prompt('Enter your hown town');
// console.log('my favorite food is'+''+''+'my home tow is'+'hometown')


// Data Type
// string:this data type is alphanumeric data


// let address = '107, herbert Macauly Way, off \'unversity\' Road, Akoka Yaba, lagos state';
// let person = "Mr john lives in "
// console.log (typeof(address));
// console.log(address[0]);
// console.log(address.slice(0,30));
// console.log(address.toUpperCase());
// console.log(address.toLowerCase());
// console.log(address.replace('lagos','ogun'))
// console.log(address.length)
// console.log(address.lastIndexOf('e'));
// let x = address.split(' ');
// console.log(x);
// x.pop();
// x.shift();
// x.push('purple');
// x.unshift('mango');
// console.log(x);
// console.log(x.reverse().join(' '));
// console.log(person.concat(address));
 // console.log(address.includes('Yaba');
// console.log(person.includes('h'))
// console.log(person.includes('Mr'))
// console.log(address.includes('i'))
// let mycolor = ['red','blue','orange','gold','pink'];
// let x = mycolor;
 // console.log(x.reverse().join(' '));
//  x.pop()
// x.shift()
// x.push('lemon')
// x.unshift('green')
// console.log(x)



// array data types
// let mycolor = ['red','blue','orange','gold','pink'];
// mycolor.splice(3, 0, 'welcome');
// console.log(mycolor)
// let x = mycolor[1];
// console.log(x)




let myData = [
  {
    name:'john',
    city:'lagos',
    LGA: 'mushin',
  },
  {
    name:'Tola',
    city:'ogun',
    LGA: 'Ifo',
  },
  {
    name:'Esther',
    city:['Ekiti','Vola','ogun','osun'],
    LGA: 'Akoko'
  },
  {
    name:'mistura',
    city:'Ilaro',
    LGA: 'Ede',
  },
  {
    name:'Emeka',
    city:'Abia',
    LGA: 'Rivers'
  },
]
console.log(myData[2]['city'][2])
let x = myData.pop()
console.log(x)
console.log(myData)