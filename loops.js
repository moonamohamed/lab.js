for (let i = 1; i<=10; i++) {
    console.log(i)
}
// Output odd numbers from 1 to 10
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 1) {
        console.log(i)
    }
   
}

// Output even number from 1 to 10
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0)
    console.log(i)
}

// Output multiples of 3, starting at 6 and ending at 60
for(let i = 6; i <= 60; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}

//Output an increasing number of # symbols, from 1 to 7, as shown below.

let str = "#"

for(let i = 1; i <= 7; i++) {
    console.log(str)
    str += "#"
}