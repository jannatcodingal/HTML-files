//print even numbers from 1 to 100
let evenNumbers = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

//print odd numbers from 1 to 100
let oddNumbers = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}
console.log(oddNumbers);