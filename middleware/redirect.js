// 旧Contentful IDのコミュニティURLを新URLへ転送
const legacyCommunityIds = {
  '1q0aXzj2r1O0pC5soNRQok': '2dcg',
  '5Ay58j7CHdYFqKShRbr5tD': '3dcg',
  '21AY3pJOP214Gsw1d9u6cD': 'game',
  '39t5DaMrgq579LDvqWGKZK': 'hack',
  'mlIRfpRrISVzKc6K0l181': 'music',
}

export default function ({ route, redirect }) {
  const legacy = route.path.match(/^\/community\/([^/]+)\/?$/)
  if (legacy && legacyCommunityIds[legacy[1]]) {
    return redirect(301, `/community/${legacyCommunityIds[legacy[1]]}`)
  }
  const path = route.path
  const hash = route.hash
  const query = route.query
  const queryKeys = Object.keys(query)
  let redirectQuery = ''
  const redirectPath = path.slice(0, -1)
  if (path !== '/' && path.slice(-1) === '/' && path !== '/404') {
    if (hash) {
      redirect(301, redirectPath + '#' + hash)
    } else if (query) {
      queryKeys.forEach((key) => {
        redirectQuery += redirectQuery === '' ? '?' : '&'
        redirectQuery += `${key}=${query[key]}`
      })
      redirect(301, redirectPath + redirectQuery)
    } else {
      redirect(301, redirectPath + '')
    }
  }
}
