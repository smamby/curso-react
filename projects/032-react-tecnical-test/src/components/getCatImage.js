import { useState, useEffect } from 'react'
const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'
const params = '?fontSize=100&fontColor=orange'

export function useGetImageUrl ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const treeFirstWord = fact ? fact.split(' ', 3).join(' ') : null
    fetch(CAT_IMAGE_URL + treeFirstWord + params)
      .then(res => {
        if (!res.ok) throw new Error('Network response wasnt ok')
        setImageUrl(res.url)
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }, [fact])
  return { imageUrl }
}