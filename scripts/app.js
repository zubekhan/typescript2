define(["require", "exports", "./module/solution1", "./module/solution2", "./module/solution3"], function (require, exports, M1, M2, M3) {
    "use strict";
    exports.__esModule = true;
    var module1 = M1.Solution1;
    var module2 = M2.Solution2;
    var module3 = M3.Solution3;
    var AppModule;
    (function (AppModule) {
        var BootstrapApplication = /** @class */ (function () {
            function BootstrapApplication() {
                var _this = this;
                this.getValueById = function (id) {
                    return document.getElementById(id).value;
                };
                this.executeSolution1 = function () {
                    var result = '<b>Result:</b><br>';
                    var book = new module1.Book();
                    book.bookNo = new Number(_this.getValueById('p1bookNo')).valueOf();
                    book.title = _this.getValueById('p1title');
                    book.author = _this.getValueById('p1author');
                    book.price = new Number(_this.getValueById('p1price')).valueOf();
                    result += book.toString();
                    document.getElementById('result1').innerHTML = result;
                };
                this.executeSolution2 = function () {
                    var result = '<b>Result:</b><br>';
                    var bookNo = new Number(_this.getValueById('p2bookNo')).valueOf();
                    var title = _this.getValueById('p2title');
                    var author = _this.getValueById('p2author');
                    var price = new Number(_this.getValueById('p2price')).valueOf();
                    var book = new module2.Book(bookNo, title, author, price);
                    result += book.toString();
                    document.getElementById('result2').innerHTML = result;
                };
                this.executeSolution3 = function () {
                    var book = new module3.EngineeringBook();
                    var result = '<b>Result:</b><br>';
                    book.bookNo = new Number(_this.getValueById('p3bookNo')).valueOf();
                    book.title = _this.getValueById('p3title');
                    book.author = _this.getValueById('p3author');
                    book.price = new Number(_this.getValueById('p3price')).valueOf();
                    book.category = _this.getValueById('p3category');
                    result += book.toString();
                    document.getElementById('result3').innerHTML = result;
                };
            }
            return BootstrapApplication;
        }());
        AppModule.BootstrapApplication = BootstrapApplication;
    })(AppModule = exports.AppModule || (exports.AppModule = {}));
});
