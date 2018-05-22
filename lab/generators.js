function* generator() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  let i = 0
  while (true) {
    if (i < arr.length)
      yield arr[i++]
    else return 
  }
}

for(const l of generator()) {
  console.log(l)
}

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

// const fibIt = fib(10)
// console.log(fibIt.next())


function* idMaker(prefix) {
  var index = 0;
  while (true)
    yield `${prefix}_${index++}`;
}


// for (const id of idMaker('guid')) {
//   console.log(id)
// }



function* yieldStar() {
  yield* [1,2,3,4,5,6,7]
}

// const it = yieldStar() 
// console.log(it.next())

function* pauseResume() {
  yield
  console.log('s')
  yield
  console.log('ss')
}

// const prIt = pauseResume()
// console.log('No s\'s')
// prIt.next()
// console.log('One S')
// prIt.next()
// console.log('Two S\'s')
// prIt.next()