import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function clearToken() {
  cookies.remove('agent_code')
  cookies.remove('agent_token')
  cookies.remove('agent_id')
}

export function getHeader() {
  return {
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
