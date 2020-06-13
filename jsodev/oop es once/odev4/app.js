// // BİND
// let person1 = {
//    name: 'John Doe',
//    getName: function() {
//        console.log(this.name);
//    }
//  };

// setTimeout(person1.getName, 1000);//Burada person.getName'i ayrı ayrı aldığı için undefined döndürür

// let f = person1.getName;//ifade bu şekilde yazılabilir ancak getName çağırıldığında name globalde olmadığı için  bize boş değer döndürür
// setTimeout(f, 1000); // Kayıp kişi bağlamı


// setTimeout(function () {//person dış kapsamdan aldığı ve yöntemi çağırdığı için çalışır
//     person1.getName();
// }, 1000);

// let runner = {
//     name: 'Runner',
//     run: function(speed) {
//         console.log(this.name + ' runs at ' + speed + ' mph.');
//     }
// };

// let flyer = {
//     name: 'Flyer',
//     fly: function(speed) {
//         console.log(this.name + ' flies at ' + speed + ' mph.');
//     }
// };

// let run = runner.run.bind(flyer, 20);//Yöntemin yöntemini çağırın ve runner.run()'ni içine flyer nesnesini ilk argüman olarak ve 20'yi ikinci argüman olarak iletir
// run();

// //CALL
// function show() {
//     console.log('Show function');
//  }
//  show();
// show.call(); //  call Yöntemi showişlev nesnesinde çağırmak aynıdır



// function show() {
//     console.log(this);// this'i global nesne yerine ayarlandı
// }
// show(); 

// function add(a, b) { 
//     return a + b;// add()işlevi doğrudan call çağırmak yerine, add işlevi çağırmak için yöntemi kullanır
// }
// let result = add.call(this, 10, 20);
// console.log(result);

// let greeting = 'Hi';

// let messenger = {
//     greeting: "Hello" 
// }

// function say(name) {
//     console.log(greeting + ' ' + name);// çağrılma duumunda call ile çalışır
// }
// say.call(this,'John');//çağrıldığı yer
// say.call(greeting,'John');

// const car = {
//     name: 'car',
//     start: function() { 
//         console.log('Start the ' + this.name);
//     },
//     speedup: function() {
//         console.log('Speed up the ' + this.name)
//     },
//     stop: function() {
//         console.log('Stop the ' + this.name);
//     }
// };

// const aircraft = {
//     name: 'aircraft',
//     fly: function(){
//         console.log('Fly');
//     }
// };
// car.start.call(aircraft);//iki tane objeyi çağırmak için start yöntemi kullanılır

// function getOddNumbers() {
//     const args = Array.prototype.slice.call(arguments);//slice dizi nesensine benzetmek için kullanılır
//     return args.filter(num => num % 2);
// }

// let oddNumbers = getOddNumbers(10, 1, 3, 4, 8, 9);
// console.log(oddNumbers);
// const args = Array.prototype.slice.call(arguments);//nesne ayarlanmasıkullanırız

//Apply

const person = {
    firstName: 'John',
    lastName: 'Doe'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);//burda person ile

console.log(result);

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
let result1 = computer.turnOn.apply(server);//çağırma  burda computer serverdan çalışır

console.log(result1);
let result2 = computer.turnOff.apply(server);
console.log(result2);

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); //orjinal diziye ekler