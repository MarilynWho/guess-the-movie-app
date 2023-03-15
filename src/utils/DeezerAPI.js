import axios from "axios";

export default {
    search: function (query) {
        return axios.request({
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: { q: query },
            headers: {
                'X-RapidAPI-Key': '96022d9e17mshf465b491930cb39p1be751jsndfb674ee92e8',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });
    }
};