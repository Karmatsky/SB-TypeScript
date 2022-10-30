import {stringCapitalize} from './03'

function foo(str: string): string{

    let arr: string[] = str.split(' ')
    let firstWord: string = arr[0]

    arr.splice(firstWord.length, 1)

    return arr.join(' ')
}

let capString: string = stringCapitalize("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.")

console.log(foo(capString))