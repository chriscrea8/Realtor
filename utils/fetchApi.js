import axios from 'axios'

const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fc618951fbmsh9215c8eea44b624p1320ccjsn616711cd18b3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
}