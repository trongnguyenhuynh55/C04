import {question} from "readline-sync"
let n: number = Number(question("Nhap so n: "))
let a: string = "";
for(let i: number = 1; i <= n; i++) {
    if (n%i === 0) {
        if (i%2 === 0) {
            a = a +" " + String(i);
        }
    }
}
console.log(a)
