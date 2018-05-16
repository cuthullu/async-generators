function* gen() {
  let i = 0
  while (true) {
    if (i < 10) {
      yield "hi" + i
      i++
    } else {
      return
    }
  }
}

const delay = s => new Promise(r => setTimeout(r, s * 1000))

function* count(n) {
  let i = 0
  while (true) {
    const result = i
    i++
    if (i < n) {
      yield result
    } else {
      return result
    }
  }
}

export async function* fetch(search) {
  let i = 0
  while (true) {
    await delay(0)
    const results = [...count(10)].map(j => `${search} result ${i}${j}`)
    i++
    console.log(results)
    if (i < 10) {
      yield results
    } else {
      return results
    }
  }
}
