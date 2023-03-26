import {question} from "readline-sync"
let n: number = Number(question("Nhap so: "))
let a: string = "";
for(let i: number = 1; i <= n; i++) {
    if (i === n)
        a = a + "Kmin " + i;
    else
        a = a + "Kmin " + i + ", ";
}
console.log(a)