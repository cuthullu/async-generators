const delay = seconds => new Promise(r => setTimeout(r, seconds + 1000))


function iterable() {
  let i = 0;
  return {
    next: async function () {
      if (i < 10) {
        i++
        await delay(1)
        return { value: i, done: false }
      }
      else {
        return { done: true }
      }
    }
  }
}

const it = {
  [Symbol.iterator]: iterable
}

// async function run() {
//   for await (let t of it) {
//     console.log(t)
//   }
// }


// run()

async function* generator() {
  let i = 0;
  while (true) {
    if (i < 10) {
      await delay(10)
      yield i
      i++
    } else return
  }
}

const asIterator = fun => ({[Symbol.iterator] : fun})

async function run() {
  for await (let t of asIterator(generator)) {
    console.log(t)
  }
}


run()

// async function* iterable1() {
//   let i = 0;
//   while(true) {
//     if(i < 10) {
//       await delay(10)
//       yield i
//     } 
//   }
// }