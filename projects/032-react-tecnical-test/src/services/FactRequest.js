const FACT_URL = 'https://catfact.ninja/fact'

export const factRequest = () => {
  return fetch(FACT_URL)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
