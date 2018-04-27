define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Solution1;
    (function (Solution1) {
        var Book = /** @class */ (function () {
            function Book() {
                var _this = this;
                this.toString = function () {
                    return 'bookNo: ' + _this._bookNo + ', title: ' + _this._title + ', author: ' + _this._author + ', price: ' + _this._price;
                };
            }
            Object.defineProperty(Book.prototype, "bookNo", {
                get: function () {
                    return this._bookNo;
                },
                set: function (bookNo) {
                    this._bookNo = bookNo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "title", {
                get: function () {
                    return this._title;
                },
                set: function (title) {
                    this._title = title;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "author", {
                get: function () {
                    return this._author;
                },
                set: function (author) {
                    this._author = author;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Book.prototype, "price", {
                get: function () {
                    return this._price;
                },
                set: function (price) {
                    this._price = price;
                },
                enumerable: true,
                configurable: true
            });
            return Book;
        }());
        Solution1.Book = Book;
    })(Solution1 = exports.Solution1 || (exports.Solution1 = {}));
});
