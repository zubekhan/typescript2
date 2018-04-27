export namespace Solution2 {

    export class Book {

        constructor(private _bookNo:number, private _title:string, private _author:string, private _price:number){}

        get bookNo(): number {
            return this._bookNo;
        }

        get title(): string {
            return this._title;
        }

        get author(): string {
            return this._author;
        }

        get price(): number {
            return this._price;
        }

        toString = ():string =>{
            return 'bookNo: '+this._bookNo+', title: '+this._title+', author: '+this._author+', price: '+this._price;
        }

    }

}