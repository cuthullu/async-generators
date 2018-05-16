export async function* fetchSubreddit(subreddit) {
  let after = ''
  while (true) {
    const url = `https://www.reddit.com/r/${subreddit}.json?limit=10&after=${after}`
    const resp = await fetch(url)
    const jsonResp = await resp.json()
    after = jsonResp.data.after
    yield jsonResp.data.children.map(({ data: { title } }) => title)
  }
}
