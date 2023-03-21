import axios from "axios";

const apiSearch = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=";

const DeezerAPI = {
  search: function (query) {
    return axios.get(apiSearch + query);
  },
};

// const DeezerAPI = {
//     search: function (query) {
//         return axios.request({
//             method: 'GET',
//             url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//             params: { q: query },
//             headers: {
//                 'X-RapidAPI-Key': '96022d9e17mshf465b491930cb39p1be751jsndfb674ee92e8',
//                 'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//             }
//         });
//     }
// };

export default DeezerAPI;