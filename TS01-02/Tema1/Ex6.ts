function digital_root(num: number) : number {
    let strOfNums: string = num.toString();
    let sum: number = 0;
    
    for (let i: number = 0; i < strOfNums.length; i++) {
      sum += Number(strOfNums[i]);
    }
  
    let result: number = sum;
    if (sum > 9) {
      result = digital_root(sum);
    }
  
    return result;
  }
  
  console.log(digital_root(942))
  console.log(digital_root(493193))

  console.log(digital_root(49))