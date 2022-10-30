function arrayDiff(firstArray: number[], secondArray: number[]) : number[] {
    let result: number[] = [];
    
    for (let i: number = 0; i < firstArray.length; i++) {
      if (secondArray.indexOf(firstArray[i]) === -1) {
        result.push(firstArray[i]);
      }
    }

    return result;
  }

  console.log(arrayDiff([1, 2], [1]))
  console.log(arrayDiff([1, 2, 3, 4], [5, 6]))
  console.log(arrayDiff([2, 2, 2, 2, 3], [2]))