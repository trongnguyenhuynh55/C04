import {question} from "readline-sync"
for( ; ; ) {
    let n: number = Number(question("Nhap so: "))
    if (n === 0)
        break;
    else
        console.log(n)
}