function* generator() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  let i = 0
  while (true) {
    if (i < arr.length)
      yield arr[i++]
  }
}

// for(const l of generator()) {
//   console.log(l)
// }

function* idMaker(prefix) {
  var index = 0;
  while (true)
    yield `${prefix}_${index++}`;
}


// for (const id of idMaker('guuid')) {
//   console.log(id)
// }

function* fib(number) {
  let fm2 = 0
  let fm1 = 1
  let i = 0
  while (i < number) {
    const f = fm2
    fm2 = fm1
    fm1 = f + fm2
    yield f;
    i++
  }
}

// for (let f of fib(10)) {
//   console.log(f)
// }


function* yieldStar() {
  yield* [1,2,3,4,5,6,7]
}

// const it = yieldStar() 
// console.log(it.next())

function* pauseResume() {
  yield
  const s = 's'
  console.log(s)
  yield
  console.log('sssaa')
  
}


// for (let f of pauseResume(10)) {
//   console.log(f)
// }
