function reverseStringWords(str: string): string{
    const words: string[] = str.split(' ');
    const outWords: string[] = [];
    
    for (const word of words) {
      let letter: string = '';
      for (let i: number = word.length - 1; i >= 0; i--) {
        letter += word[i];
      }
      outWords.push(letter);
    }

    const result: string = outWords.join(' ')

    return result;
}

let str = "Это пример!"

console.log(reverseStringWords(str))