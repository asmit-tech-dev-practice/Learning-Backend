import { EventEmitter } from 'events';
import fs from 'fs';

// readFile('./test.txt','utf-8', (err, data) => {
//     console.log(data);
// });

// async function readMyFile() {
//     try {
//         const data = await readFile('./test.txt', 'utf-8');
//         console.log(data);
//     } 
//     catch (err) {
//         console.error(err);
//     }
// }
// readMyFile();


// const eventEmitter = new EventEmitter();
// eventEmitter.on('good morning', ()=> { 
//     console.log("How are you?");
// })
// eventEmitter.emit('good morning');

// console.log("Hello world!");




// async function countEven(arr) {
//     let count = 0;

//     for (const i of arr) {
//         if (i < 0) {
//             throw new Error(`-VE value ${i} encountered!`);
//         }
//         if (i % 2 === 0) {
//             count++;
//         }

//         await new Promise((resolve) => setTimeout(resolve, 100));
//     }

//     console.log("Even:", count);
//     return count;
//     // return new Promise(()=>count);
// }

// async function countOdd(arr) {
//     let count = 0;

//     for (const i of arr) {
//         if (i % 2 !== 0) {
//             count++;
//         }

//         await new Promise((resolve) => setTimeout(resolve, 100));
//     }

//     console.log("Odd:", count);
//     return count;
// }


// async function run() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     await Promise.all([
//         countEven(numbers),
//         countOdd(numbers)
//     ]).then((result) => {
//         console.log(`resolve (${result})`);
//     }).catch((err) => {
//         console.log(`Error (${err}) caught!`);
//     });

//     // await Promise.any([
//     //     countEven(numbers),
//     //     countOdd(numbers)
//     // ]).catch((err) => {
//     //     console.log(`Error (${err}) caught!`);
//     // });
// }
// run();



// function getNum() {
//     return new Promise((resolve, reject) => {
//         const num = Math.random() * 8;

//         if (num > 5) {
//             resolve(num);
//         } else {
//             reject('not good');
//         }


//     });
// }

// getNum()
//     .then((num) => console.log(`nice number it is: (${num})`))
//     .catch((err) => { console.log("Failed:", err) });

fs.writeFileSync('notes.txt', 'I live in Bangalore')
