 console.log("Hello World")
 var fullname = "Etim David Okon"
 var phone = 9072738788
 var married = false
 var acct = null
 var enemise = undefined

console.log(typeof(fullname))
console.log(typeof(acct))
console.log(typeof(phone))
console.log(typeof(married))

var age = 25
if(age <= 17){
    console.log("i am not an adult")
} else {
    console.log("i am an adult")
}



var five = 5
var six = 6 
var compare = five > six 
console.log(compare)

console.log( 100 >= 100 )

var lastName = "Okon";
var acct = null;
Boolean(lastName)
// console.log(Boolean(lastName))
console.log(Boolean(acct))

var tinubu = false
var obi = true
var atiku = false
console.log(tinubu && atiku)
console.log(obi && tinubu)
console.log(tinubu || atiku)


var firstName = " David "
var lastname = " Okon " 
var course = " software-engineering "
var school = " GMC. "
var sentence = "My name is "
console.log( sentence + firstName + lastName +" i study " + course + "at " + school)

var string1 = "latifat"
string1.toUpperCase()
console.log(string1.toUpperCase())