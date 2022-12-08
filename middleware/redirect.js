export default function ({ route, redirect }) {
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
