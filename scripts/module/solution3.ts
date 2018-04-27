export namespace Solution3 {

    export class Book {

        private _bookNo:number;
        private _title:string;
        private _author:string;
        private _price:number;

        set bookNo(bookNo:number) {
            this._bookNo = bookNo;
        }

        set title(title:string) {
            this._title = title;
        }

        set author(author:string) {
            this._author = author;
        }

        set price(price:number) {
            this._price = price;
        }

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

    export class EngineeringBook extends Book {
        
        private _category:string;

        set category(category:string) {
            this._category = category;
        }

        get category(): string {
            return this._category;
        }

        toString = ():string =>{
            return 'bookNo: '+this.bookNo+', title: '+this.title+', author: '+this.author+', price: '+this.price+', category: '+this._category;
        }

    }

}