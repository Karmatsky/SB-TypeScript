function sepNumsAndSquare(num: number): number{
    const arrNums: string[] = num.toString().split('')

    const squaredArrNums: string[] = [];

    for (let i: number = arrNums.length - 1; i >= 0; i--) {
        squaredArrNums.push('' + Number(arrNums[i])**2)
    }

    const result: number = Number(squaredArrNums.join(''))
    
    return result
}

let num = 9119

console.log(sepNumsAndSquare(num))