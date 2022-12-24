class MyArray<T>{
    public elements: Array<T>
    constructor(array?: T[]){
        this.elements = array || [];
    }

    public push(element: T, ...restElements: T[]): void{
        this.elements.push(element);
        for (var i = 0; i < restElements.length;i++){
            this.elements.push(restElements[i])
        }
    }

    public concat(element: T[]): MyArray<T>{
        let newArr:MyArray<T> = new MyArray(); 
        newArr.elements =  this.elements.concat(element);
        return newArr;
    }

    public slice(a:number, b?:number){
        return this.elements.slice(a, b)
    }

    public flatten(){
        let newArr:MyArray<T> = new MyArray();
        return this.elements.flat(Infinity);
    }

    public areElementsEqual(index1: number, index2: number){
        if(typeof(this.elements[index1]) === "object"){
            for(var value in this.elements[index1]){
                return this.elements[index1][value] == this.elements[index2][value];
            }
        }
        return this.elements[index1] == this.elements[index2];
    }
}

const arr = new MyArray<number>([1,2,2]);
const arr1 = new MyArray();

arr.push(4,5,6);
console.log(arr.elements);

const newArr = arr.concat([7,8,9]);
console.log(newArr.elements);

console.log(newArr.slice(2));
console.log(newArr.slice(2,4));

const arr3 = new MyArray<any>([[1], 2, [[3,4], 5]]);
console.log(arr3.flatten());

const arr4 = new MyArray<object>([{a: 16, b: 13}, {a:12, b: 13}, {a: 12, b:16}]);
console.log(arr.areElementsEqual(0,2));
console.log(arr.areElementsEqual(0,0));
console.log(arr4.areElementsEqual(0,2));
console.log(arr4.areElementsEqual(1,2));






