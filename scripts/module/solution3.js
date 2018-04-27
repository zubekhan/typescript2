var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Solution3;
    (function (Solution3) {
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
        Solution3.Book = Book;
        var EngineeringBook = /** @class */ (function (_super) {
            __extends(EngineeringBook, _super);
            function EngineeringBook() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.toString = function () {
                    return 'bookNo: ' + _this.bookNo + ', title: ' + _this.title + ', author: ' + _this.author + ', price: ' + _this.price + ', category: ' + _this._category;
                };
                return _this;
            }
            Object.defineProperty(EngineeringBook.prototype, "category", {
                get: function () {
                    return this._category;
                },
                set: function (category) {
                    this._category = category;
                },
                enumerable: true,
                configurable: true
            });
            return EngineeringBook;
        }(Book));
        Solution3.EngineeringBook = EngineeringBook;
    })(Solution3 = exports.Solution3 || (exports.Solution3 = {}));
});
