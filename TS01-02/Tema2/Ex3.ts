export function stringCapitalize(str:string): string {
    if (!(str.length > 0)){
        throw Error("Строка пустая")
    }
    let arr: string[] = str.split(' ')
    let temp: string[] = [];
    
    for (let i: number = 0; i < arr.length; i++) {
        let word: string = arr[i]
        temp.push(word[0].toUpperCase() + word.slice(1))
    }

    let result: string = temp.join(' ')

    return result
}

console.log(stringCapitalize("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."))