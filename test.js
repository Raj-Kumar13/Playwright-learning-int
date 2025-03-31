"use strict";
// {
//     let a = 10;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
//     var b = 20;
//     const c = 30;
//     console.log('a=', a)
//     console.log('b=', b)
//     console.log('c=', c)
//     a = 10.1
//     b = 20.2
//     // c = 30.3
//     console.log('a1=', a)
//     console.log('b1=', b)
//     console.log('c1=', c)
//     // let a = 30
//     // var b = 30
//     // const c = 30
//     // console.log('a2=', a)
//     // console.log('b2=', b)
//     // console.log('c2=', c)
// }
// console.log('a3=' + a)
// console.log('b3=' + b)
// console.log('c3=' + c)
// 1. b = 25
// var b
// console.log(b) // 
// 2.console.log(bar) // 
// var bar = 111
// console.log(bar) // 
// 3.var bar
// console.log(bar) // 
// bar = 111
// console.log(bar) // 
// 4.{
//     const fruit = 'apple'
//     i // 
//     console.log(fruit)
// }
// has context menu
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("function in animal");
    };
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        //super.makeSound()
        console.log("function in Dog");
    };
    Dog.prototype.createMap = function (numbers) {
        var addInteger = numbers.map(function (element) { return element + 2; });
        return addInteger;
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var employee = new Dog();
//employee.makeSound()
var derive = [new Dog(), new Animal()];
derive.forEach(function (test) {
    if (test instanceof Dog) {
        test.makeSound();
    }
});
console.log(employee.createMap([2, 3, 4, 5, 6, 7]));
