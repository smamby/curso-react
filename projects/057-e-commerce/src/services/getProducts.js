

function getProducts (keyword) {
    const API_URL = 'https://dummyjson.com/products'
    const SEARCH_BY_KEYWORD = '/search?q=' + keyword
    const PARAMS = '?skip=112&limit=60'

    const url = () => {
        if (keyword.length > 0) {
            return API_URL + SEARCH_BY_KEYWORD + '&limit=60'
        }
        return API_URL + PARAMS
    }

    return fetch(url())
        .then(res => res.json())
        .then(data => {
            return data.products
        })
}

export default getProducts