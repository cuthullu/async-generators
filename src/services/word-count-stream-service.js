export async function* createWordCountStream(subreddit) {
  let after = ''
  while (true) {
    const url = `https://www.reddit.com/r/${subreddit}.json?limit=05&after=${after}`
    const resp = await fetch(url)
    const jsonResp = await resp.json()
    after = jsonResp.data.after
    const permalinks = jsonResp.data.children.map(({ data }) => data.permalink)
    yield* createPageStream(permalinks)
  }
}

async function* createPageStream(permalinks) {
  let i = 0
  while (i < permalinks.length) {
    const permalink = permalinks[i++]
    const url = `https://www.reddit.com${permalink}.json`
    const resp = await fetch(url)
    const jsonResp = await resp.json()
    const [pageInfo, comments] = jsonResp
    const title = pageInfo.data.children[0].data.title
    const words = comments.data.children
      .map(({ data }) => data.body)
      .reduce(bodyWordConcat, [])
      .reduce(countWords, {})
    const topWordTups = Object.entries(words).sort(maxWord).slice(0, 9)

    yield {
      title: title,
      topWordTups
    }
  }
}

const bodyWordConcat = (acc, body) => body ? [...acc, ...body.split(' ')] : acc


function countWords(acc, word) {
  if (acc[word] === undefined) acc[word] = 0
  else acc[word]++
  return acc
}

const maxWord = (aTup, bTup) => bTup[1] - aTup[1]