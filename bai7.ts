import {question} from "readline-sync"
let n: number = Number(question("Nhap so n: "))
let a: number = 0;
for(let i: number = 1; i <= n; i++) {
    if (n%i === 0) {
        a = a + i;
    }
}
if (a === 2*n)
    console.log("Yes")
else 
    console.log("No")