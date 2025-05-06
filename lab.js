// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

// let cell = ''
// let table = []
// let row = []

// for (let i = 0; i < csv.length; i++) {
// 	let char = csv[i] 
// 	console.log(char)

// 	if (char !== ',' && char !== '\n') {
// 		cell = cell + char
// 	} 

// 	if (char === ',') {
// 		row.push(cell)
// 		cell = ''
// 	} 

// 	if (char === '\n' || i === csv.length - 1) {
// 		row.push(cell)
// 		cell = ''
// 		table.push(row)
// 		row = []
// 	}
// }

// console.log(table)

/*

ID Name Occupation Age
42 Bruce Knight 41

*/






let table = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"], 
    ["57", "Bob", "Fry Cook", "19"],
    ["63", `blaine`, "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
]
let newArr = []
    for(i = 1; i < table.length; i++){

        let row = table[i]
        let object ={
         id:row[0],
         name:row[1],
         occupation:row[2],
         age:row[3],


        }

        newArr.push(object)
}
console.log(newArr)


