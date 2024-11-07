import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/search/geocode/v6/forward?q=',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoiam9yZ2Vyb2QyNTI1IiwiYSI6ImNtMzZreWYzdTA2c20ybHBwb3AzMWpleHEifQ.ZQifMNXoZF9zZsxPrg9VTA'
    }
})

export default searchApi;