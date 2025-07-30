import { useState, useEffect } from 'react'

const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'
const PARAMS = '?fontSize=40&fontColor=orange&json=true'

export const useGetImageUrl = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const treeFirstWords = fact.split(' ', 3).join(' ')
    console.log(CAT_IMAGE_URL + treeFirstWords)
    fetch(CAT_IMAGE_URL + treeFirstWords + PARAMS)
      .then(res => res.json())
      .then(
        newImageUrl => setImageUrl(newImageUrl.url)
      )
    }, [fact])
  return { imageUrl }
}