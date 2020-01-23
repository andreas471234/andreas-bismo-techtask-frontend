import axios from 'axios'
import { queryBuilder, urlMapper, getHeader } from '../helpers/utility'

export default ({ url = '', query = {}, params = {} }) => {
  const queryString = queryBuilder(query)
  const mappedUrl = urlMapper(url, params)
  const combinedUrl = `${mappedUrl}${queryString}`
  return axios
    .get(combinedUrl, { headers: getHeader() })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}
