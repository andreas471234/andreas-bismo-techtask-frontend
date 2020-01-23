export function getHeader() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export function queryBuilder(finalFilter) {
  let queryArray = []
  Object.keys(finalFilter).forEach((key) => {
    const keyValue = finalFilter[key]
    let query = ''
    let identifier = queryArray.length ? '&' : '?'
    if (Array.isArray(keyValue)) {
      keyValue.forEach((value) => {
        query += `${query ? '&' : ''}${key}=${value}`
      })
    } else if (keyValue) {
      query += `${key}=${keyValue}`
    }
    if (query) {
      queryArray.push(`${identifier}${query}`)
    }
  })
  return queryArray.join('')
}

export function urlMapper(url, params = {}) {
  let urlString = url
  Object.keys(params).forEach(key => urlString = urlString.replace(`{${key}}`, params[key]))
  return urlString
}
