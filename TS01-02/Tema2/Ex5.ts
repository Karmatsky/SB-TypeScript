type Dog = {
    Name: string;
    Age: number;
}

function areEqual(firstDog: Dog, secondDog: Dog): Boolean{
    let firstObjKeys: string[] = Object.keys(firstDog)
    let secondObjKeys = Object.keys(secondDog)
    
    if (firstObjKeys.length === secondObjKeys.length){
        for (let i: number = 0; i < firstObjKeys.length; i++){
            if (firstObjKeys[i] === secondObjKeys[i] && 
                firstDog[firstObjKeys[i]] === secondDog[secondObjKeys[i]]){
                return true;
            }
        }
    }

    return false;
}

let firstDog: Dog={
    Name: "Keksik",
    Age: 18
}

let secondDog: Dog={
    Name: "Stan",
    Age: 2
}

let thirdDog: Dog={
    Name: "Keksik",
    Age: 18
}

console.log(areEqual(firstDog, secondDog))
console.log(areEqual(firstDog, thirdDog))