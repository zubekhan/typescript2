import M1 = require('./module/solution1');
import M2 = require('./module/solution2');
import M3 = require('./module/solution3');

var module1 = M1.Solution1;
var module2 = M2.Solution2;
var module3 = M3.Solution3;
export namespace AppModule {

    export class BootstrapApplication {

        getValueById = (id:string): string =>{
            return (<HTMLInputElement>document.getElementById(id)).value;
        }

        executeSolution1 = () =>{
            var result:string = '<b>Result:</b><br>';
            var book = new module1.Book();
            book.bookNo = new Number(this.getValueById('p1bookNo')).valueOf();
            book.title =  this.getValueById('p1title');
            book.author = this.getValueById('p1author');
            book.price = new Number(this.getValueById('p1price')).valueOf();
            result+=book.toString();
            document.getElementById('result1').innerHTML = result;
        }

        executeSolution2 = () =>{
            var result:string = '<b>Result:</b><br>';
            var bookNo = new Number(this.getValueById('p2bookNo')).valueOf();
            var title =  this.getValueById('p2title');
            var author = this.getValueById('p2author');
            var price = new Number(this.getValueById('p2price')).valueOf();
            var book = new module2.Book(bookNo,title,author,price);
            result+=book.toString();
            document.getElementById('result2').innerHTML = result;

        }

        executeSolution3 = () =>{
            var book = new module3.EngineeringBook();
            var result:string = '<b>Result:</b><br>';
            book.bookNo = new Number(this.getValueById('p3bookNo')).valueOf();
            book.title =  this.getValueById('p3title');
            book.author = this.getValueById('p3author');
            book.price = new Number(this.getValueById('p3price')).valueOf();
            book.category = this.getValueById('p3category');
            result+= book.toString();
            document.getElementById('result3').innerHTML = result;

        }

    }


}