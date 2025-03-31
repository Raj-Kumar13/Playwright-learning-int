// {
//     let a = 10;

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

export class Animal {
    makeSound() {
        console.log(`function in animal`);
    }
}

export class Dog extends Animal {
    makeSound() {
        //super.makeSound()
        console.log(`function in Dog`);
    }

    createMap(numbers: number[]) {
        const addInteger = numbers.map(element => element + 2)
        return addInteger;
    }
}

const employee = new Dog();
//employee.makeSound()
const derive = [new Dog(), new Animal()]

derive.forEach(test => {
    if (test instanceof Dog) {
        test.makeSound()
    }
})

console.log(employee.createMap([2, 3, 4, 5, 6, 7]));
