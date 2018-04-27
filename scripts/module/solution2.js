define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Solution2;
    (function (Solution2) {
        var Book = /** @class */ (function () {
            function Book(_bookNo, _title, _author, _price) {
                var _this = this;
                this._bookNo = _bookNo;
                this._title = _title;
                this._author = _author;
                this._price = _price;
                this.toString = function () {
                    return 'bookNo: ' + _this._bookNo + ', title: ' + _this._title + ', author: ' + _this._author + ', price: ' + _this._price;
                };
            }
            Object.defineProperty(Book.prototype, "bookNo", {
                get: function () {
                    return this._bookNo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "title", {
                get: function () {
                    return this._title;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "author", {
                get: function () {
                    return this._author;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "price", {
                get: function () {
                    return this._price;
                },
                enumerable: true,
                configurable: true
            });
            return Book;
        }());
        Solution2.Book = Book;
    })(Solution2 = exports.Solution2 || (exports.Solution2 = {}));
});
