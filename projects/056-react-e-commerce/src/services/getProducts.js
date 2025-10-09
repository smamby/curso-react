export default function getProduct ( keyword ) {
  const API_URL = 'https://dummyjson.com/products'
  const SEARCH_BY_KEYWORD = '/search?q=' + keyword
  const PARAMS = '?skip=112&limit=60'

  const url = () => {
    if (keyword !== '') {
      return API_URL + SEARCH_BY_KEYWORD + 'limit=60'
    }
    return API_URL + PARAMS
  }
  console.log(url())

  return fetch(url())
    .then(res => res.json())
    .then(data => {
      return data
    })
}