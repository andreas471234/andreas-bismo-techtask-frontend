import axios from 'axios'
import { queryBuilder, urlMapper } from '../helpers/utility'

export default ({ url = '', query = {}, payload = {}, params = {} }) => {
  const queryString = queryBuilder(query)
  const mappedUrl = urlMapper(url, params)
  const combinedUrl = `${mappedUrl}${queryString}`
  return axios
    .post(combinedUrl, payload)
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
