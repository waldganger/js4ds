'use strict'

class Active {
    constructor (name, transform) {
      this.name = name
      this.transform = transform
      this.subscribers = []
    }
  
    subscribe (someone) {
      this.subscribers.push(someone)
    }
  
    update (input) {
      console.log(this.name, 'got', input)
      const output = this.transform(input)
      for (let s of this.subscribers) {
        s.update(output)
      }
    }
  }

const start = new Active('start', (x) => Math.min(x, 10))
const left = new Active('left', (x) => 2 * x)
const right = new Active('right', (x) => x + 1)
const final = new Active('final', (x) => x)
start.subscribe(left)
start.subscribe(right)
left.subscribe(final)
right.subscribe(final)

start.update(123)

// class Filter {
//     constructor(...args){
//         this.args = args;
//     }

//     call (el) {
//         return this.args.includes(el) ? null : el;
//     }
// }



// class Delay {
//     constructor(state) {
//         this.previousState = state;

//     }
//     call (state) {
//         let result = this.previousState;
//         this.previousState = state;
//         return result
//     }
// }


// class Pipeline {
//     constructor(...args) {
//         this.args = args;
//     }

//     call(el) {
//         for (let objet of this.args){       
//             let temp = objet.call(el);
//             // if (temp == null) continue ;
//             return temp;
//         }
//     }
// }

// const example = new Pipeline(new Filter('a', 'e', 'i', 'o', 'u'), new Delay('a'))
// for (let value of ['a' ,'b', 'c', 'd', 'e']) {
//   console.log(value, '->', example.call(value))
// }

// const example = new Filter('a', 'e', 'i', 'o', 'u')
// for (let value of ['a', 'b', 'c', 'd', 'e']) {
//   console.log(value, '->', example.call(value))
// }

// const example = new Delay('a')
// for (let value of ['b', 'c', 'd']) {
//   console.log(value, '->', example.call(value))
// }