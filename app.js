// ЗАДАНИЕ 1

var firstName = 'tamerlan'
console.log(firstName.toUpperCase())

let lastName = '  Darchiev'
console.log(lastName.trim())

const fatherName = 'Melhievich'
console.log(fatherName.repeat(2)) 

// ЗАДАНИЕ 2

var date = 25
console.log(date)

let month = '09'
console.log(parseInt(month))

const year = 1984 
console.log(+(year)+2)

// // ЗАДАНИЕ 3

const city = ['moskov','rostov','samara','omsk']
console.log(city)

const newCity = city.push('penza')
console.log(newCity)

const toUppReg = city.map(upp =>{
    return upp.toUpperCase()
} )
console.log(toUppReg)

const num = [1,2,3,4,5,6]
console.log(num)

const filterCaunt= num.filter(count =>{
    return count>4
})
console.log(filterCaunt)

// ЗАДАНИЕ 4

const person={
    name: 'Timur',
    age: 36,
    isDeveloper: true,
    languages:['ru','eng',],
    'nickname admin':'Timur Meshi',
    ['password-' + (1+4)]: 'security',
    greet(){                      
        console.log('Hello world!')
    }
 }
 person.isDeveloper= 'false'
 console.log(person.languages.push('by'))
 console.log(person['password-5'])
 console.log(person)

//  ЗАДАНИЕ 5

let name = 'Meshi'

function newName(x){
    let name = 'Timur'
    if(x==='name')
    return  name
}
console.log(newName('name'))
console.log(name)

// // ЗАДАНИЕ 6

console.log(parseInt(month)+year)

// ЗАДАНИЕ 7

const newCase = person
newCase.liveCituy = 'Moscow'
console.log(person)

