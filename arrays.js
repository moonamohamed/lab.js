let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let tmp = '';
 
 for (let i = 0; i < csv.length; i++) {
     if (csv[i] === ',') {
         tmp += ' ';
     } else if (csv[i] === '\n') {
         console.log(tmp);
         tmp = '';
     } else {
         tmp += csv[i];
     }
}
 

 
 
 