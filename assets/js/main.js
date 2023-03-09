
// ======LEV-1_1=====//

// let firstName = "Claudio"
// let lastName = "Aleo"
// let fullName = firstName + lastName

// console.log(firstName.length)
// console.log(lastName.length)
// console.log(fullName.length)

// =======LEV-1_2======//

// const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

// console.log(txt.indexOf("h"))
// console.log(txt.indexOf("Earth"))
// console.log(txt.indexOf("Moon"))

// ========LEV-1_4=========//

// const A = "Susi is going to codingschool"

// const first = console.log(A.slice(0,4))
// const second = console.log(A.slice(5,8))
// const third = console.log(A.slice(5,16)+" "+A.slice(23,29))
// const fourth = console.log(A.slice(23,29))
// const fifth = console.log(A.slice(0,8)+A.slice(23,29))

// const first = (A.slice(0,4))
// const second = (A.slice(5,8))
// const third = (A.slice(5,16)+" "+A.slice(23,29))
// const fourth = (A.slice(23,29))
// const fifth = (A.slice(0,8)+A.slice(23,29))




// document.write(first+"<br>"+second+"<br>"+third+"<br>"+fourth+"<br>"+fifth)

// =========LEV-1_5========//

// const text = "Susi is back from codingschool"

// const first = (text.substring(0,4))
// const second = (text.substring(5,7))
// const third = (text.substring(24,30))

// const sentence = (first+" "+second+" "+third)

// document.write(first+"<br>"+second+"<br>"+third+"<br>"+sentence)

// =========LEV-1_7========//

// const text = "Sam is good at codingschool"

// const first = (text.replace("Sam is good at codingschool", "Sam is bad at school"))

// const second = (text.replace("Sam is good at codingschool", "Susi is good at school"))

// const third = (text.replace("Sam is good at codingschool", "Sam is good at tennis"))

// document.write(first+"<br>"+second+"<br>"+third)


// ==========LEV-1_8===========//

// const text = "Sam is going to codingschool"
// console.log(text)

// const first = (text.replace("codingschool", "school"))
// console.log(first)
// const resFirst = (first.toUpperCase())
// console.log(resFirst)

// const second = (text.replace("to", "at"))
// console.log(second)
// const resSecond = (second.toLowerCase())
// console.log(resSecond)

// const third = (text.replace("codingschool", "SCHOOL").slice(4,22))
// const third2 = (text.slice(0,3).toUpperCase())
// const resThird = third2 + " " + third
// console.log(resThird)

//=============anderer lösungsweg==============//

// let myVar = text.slice(0,16).toUpperCase() + text.slice(22).toUpperCase()

// let myVar4 = text.slice(0,3).toUpperCase() +  text.slice(3,16) + text.slice(22).toUpperCase()
// console.log(myVar4)

// let myVar5 = text.slice(0,4) + text.slice(4,5).toUpperCase() + text.slice(5,7) + text.slice(7,8).toUpperCase() + text.slice(8,13) + text.slice(13,14).toUpperCase() + text.slice(14,16) + text.slice(22,23).toUpperCase() + text.slice(23)
// console.log(myVar5)

// ========LEV-1_9==========//

// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater



// const text1 = "Sam is going to codingschool";
// const text2 = "Susi"
// const text3 = "and" 

// console.log(text1.indexOf("going"))

// const res1 = text1.slice(0,16).concat(text1.slice(22)).concat(" and to the movie theater")
// // console.log(res1)
// // console.log(res1.indexOf("movie"))

// const res2 = text1.slice(0,16).concat(res1.slice(34))
// // console.log(res2)

// const res3 = text2.concat(" ").concat(text3).concat(" ").concat(text1.slice(0,3)).concat(" are ").concat(text1.slice(7,12)).concat(" to school")
// // console.log(res3)

// const res4 = res3.slice(0,26).concat("gym ").concat(res1.slice(23))
// // console.log(res4)
// // console.log(res1.indexOf("and"))

// const res5 = res1.replace("Sam", "Susi")
// // console.log(res5)

// document.write(res1+"<br>"+res2+"<br>"+res3+"<br>"+res4+"<br>"+res5)

// ===========LEV-1_1-LITERALS===========//

// Bitte erstelle Variablen mit deinen persönlichen Daten (Name, Nachname, Alter, Geburtsort, Größe, Gewicht, Hobbys, Computerspiele, Lieblingsessen, Lieblingssport, Lieblingsmodemarke, Lieblingsjahreszeit, Lieblingsurlaubsort). Bilde einen Satz mit Hilfe von: 

const name = "Claudio"
const nachname = "Aleo"
const alter = 35
const geburtsort = "Hilden"
const groesse = "1,86m"
const gewicht = "95kg"
const hobbys = "schlafen"
const spiele = "DayZ"
const essen = "Pizza"
const sport = "skaten"
const marke = "Nike"
const jahreszeit = "Sommer"
const urlaub = "Kreta"

document.write(`Mein Name ist ${name} ${nachname}. Ich bin ${alter} Jahre alt und bin in ${geburtsort} geboren. Ich bin ${groesse} groß und ${gewicht} schwer. Meine Hobbys sind ${hobbys} XD und ${spiele} auf meiner Xbox spielen. Mein Lieblingsessen ist ${essen} und mit den Boys bin ich früher gern ${sport} gegangen. Ich trage gern chillige Klamotten von ${marke} und in den Urlaub fahre ich am liebsten im ${jahreszeit} nach ${urlaub}.`);