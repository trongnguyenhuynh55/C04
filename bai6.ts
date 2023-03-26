import {question} from "readline-sync"
let n: number = Number(question("Nhap so n: "))
let flag: number = 0;
for(let i: number = 1; i <= n; i++) {
    if (i*i === n) {
        flag = 1;
        break
    }
}
if (flag === 1) 
    console.log("Yes")
else
    console.log("No")