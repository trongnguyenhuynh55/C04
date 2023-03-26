import {question} from "readline-sync"
let a: string = ""
let b: string = ""
let h: number = Number(question("Nhap chieu cao: "))
if (h > 0) {
    for(let j: number = 2; j <= h; j++) {
        if (j === j) {
            b = b + "* "
            console.log(b)
        }
        else {
            b = "* " + b
            console.log(b)
        }
    }
    for(let i: number = 1; i <= h; i++)
        a = a + "* ";
    console.log(a)
}        