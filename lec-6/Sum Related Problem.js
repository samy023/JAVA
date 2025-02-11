const n = 4;
let evensum = 0;
let oddsum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evensum += i;
    } else {
        oddsum += i;
    }
}
console.log(evensum);
console.log(oddsum);


let output = evensum - oddsum;

console.log(output);

if (output > 0) {
    console.log("even");
}
else {
    console.log("odd");
}


