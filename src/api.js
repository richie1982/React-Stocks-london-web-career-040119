const baseUrl = "http://localhost:3000/stocks"

const getStocks = () => {
    return fetch(baseUrl)
        .then(resp => resp.json())
}

export { getStocks }