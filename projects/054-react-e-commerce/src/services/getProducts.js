export default function getProducts( keyword ) {
  const API_URL = 'https://dummyjson.com/products'
  const CATEGORY_LIST_URL = '/category-list'
  const SEARCH_BY_KEYWORD = '/search?q=' + keyword
  const PARAMS = '?skip=112&limit=60'

  const url = () => {
    if (keyword !== '') {
      return API_URL + SEARCH_BY_KEYWORD + '&limit=50'
    }
    if (keyword === '') {
      return API_URL + PARAMS
    }
  }
  console.log(url())

  return fetch(url())
    .then(res => res.json())
    .then(data => {
      return data
    })

}