import {question} from "readline-sync"
let a: string = ""
let w: number = Number(question("Nhap chieu ngang: "))
let h: number = Number(question("Nhap chieu cao: "))
if (w > 0 && h > 0) {
    for(let i: number = 1; i <= w; i++)
        a = a + "* ";
    console.log(a)
    for(let j: number = 1; j <= h - 2; j++ ) {
        let b: string = "* "
        for(let i: number = 2; i <= w; i++)
            if (i === w)
                b = b + "* "
            else
                b = b + "  "
        console.log(b)
    }
    if (h > 1)
        console.log(a)
}        

        
