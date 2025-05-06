// const IDs = ['42', '57', '63']
//  const Names = ['Bruce', 'Bob', 'Blaine']
//  const Occupation = ['Knight', 'Cook', 'Quiz Master']
//  const Age = ['41', '19', '58']
//  const cells = [];

//  for (let i = 0; i< IDs.length; i++){
//     cells[i] = 'IDs:' +IDs[0]+ 'Names:' + 'Occupations:' + 'Age:'
//     console.log(cells[i])
//  } 

// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s,Assistant,26';
// let cell = '';
// let row = []

//  for (let i = 0; i < csv.length; i++) {
//      if (csv[i] === ',') {
//         row = row + ' ' + cell // ID Name
//         cell = ''
//     } else if (csv[i] === '\n' || i === csv.length - 1) {
//         row = row + ' ' + cell
//         cell = ''
//          console.log(row);
//          row = ''
        
//         } else {
//          cell += csv[i];
//      }
// } console.log(row)

let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s,Assistant,26';

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i ++) {
    let char = csv[i]
    if (char !== ',' && char !== '\n') {
        cell = cell + char
    }
    if (char == ',') {
        row.push(cell)
        cell = ''
    }
    if (char === ',')
        row.push(cell)
        cell = ''
        table.push(row)
        row = []
}