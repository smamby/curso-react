const FACT_URL = 'https://catfact.ninja/fact'

export const getNewFact = () => {
  return fetch(FACT_URL)
    .then(res => res.json())
    .then(data => {
      const onlyFact = data.fact
      return onlyFact
    })
}