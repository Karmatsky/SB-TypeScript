class Product{
    _productName:string;
    _price:number;

    public get productName(): string{
        return this._productName;
    }

    public set productName(s: string){
        if (s == "" || s ==" "){
            throw new Error("Product name must not be empty")
        }
        this._productName = s;
    }

    public get price(): number{
        return this._price;
    }

    public set price(n: number){
        if (n < 0){
            throw new Error("Out of range: price must be greater than zero")
        }
        this._price = n;
    }
    
    Log(): void{
        console.log(this._productName + ';' + this._price + ';');
    }
}

abstract class AbstractPurchase{
    _product:Product;
    _numberOfItems:number;
    
    public get numberOfItems(): number{
        return this._numberOfItems;
    }

    public set numberOfItems(n: number){
        if (n < 0){
            throw new Error("Out of range: price must be greater than zero")
        }
        this._numberOfItems = n;
    }

    public get product(): Product{
        return this._product;
    }

    abstract getCost():number;

    Log(): void{
        console.log(this._product + ';' + this._numberOfItems + ';');
    }

    compare(purchase1:AbstractPurchase, purchase2:AbstractPurchase){
        if (purchase1.getCost() > purchase2.getCost()){
            console.log(purchase2);
        }
        console.log(purchase1);
    }
}

class DiscountPurchase extends AbstractPurchase{
    constructor(
        _product:Product,
        public readonly discount:number
    ){
        super();
        this._product = _product;
    }

    getCost(): number{
        return (this._product.price - this.discount) * this._numberOfItems;
    }
}

class DiscountPurchase2 extends AbstractPurchase{
    constructor(
        _product:Product,
        public readonly discount:number
    ){
        super();
        this._product = _product;
    }

    getCost(): number{
        if (this._numberOfItems >= 15){
            return (this._product.price - this.discount) * this.numberOfItems;
        }
        return this._product._price * this._numberOfItems
    }
}

class DiscountPurchase3 extends AbstractPurchase{
    constructor(
        _product:Product,
        public readonly discount:number
    ){
        super();
        this._product = _product;
    }

    tax:number = 100;

    getCost(): number{
        if (this._numberOfItems >= 15){
            return (this._product.price + this.tax - this.discount) * this.numberOfItems;
        }
        return (this._product._price + this.tax) * this._numberOfItems ;
    }
}


let prod1:Product = new Product();
prod1.price = 300;
prod1.productName = 'aaa';
let prod2:Product = new Product();
prod2.price = 400;
prod2.productName = 'bbb';
let prod3:Product = new Product();
prod3.price = 500;
prod3.productName = 'ccc';
let prod4:Product = new Product();
prod4.price = 600;
prod4.productName = 'ddd';
let prod5:Product = new Product();
prod5.price = 700;
prod5.productName = 'eee';
let prod6:Product = new Product();
prod6.price = 800;
prod6.productName = 'fff';
let Prod1:DiscountPurchase = new DiscountPurchase(prod1, 50);
Prod1.numberOfItems = 50;
let Prod2:DiscountPurchase = new DiscountPurchase(prod2, 60);
Prod2.numberOfItems = 60;
let Prod3:DiscountPurchase2 = new DiscountPurchase2(prod3, 70);
Prod3.numberOfItems = 20;
let Prod4:DiscountPurchase2 = new DiscountPurchase2(prod4, 80);
Prod4.numberOfItems = 14;
let Prod5:DiscountPurchase3 = new DiscountPurchase3(prod5, 900);
Prod5.numberOfItems = 50;
let Prod6:DiscountPurchase3 = new DiscountPurchase3(prod6, 100);
Prod6.numberOfItems = 60;
let arr:Array<AbstractPurchase> = [Prod1, Prod2, Prod3, Prod4, Prod5, Prod6];
console.log(arr);
arr.sort((a, b) => b.getCost() - a.getCost())
console.log(arr)


