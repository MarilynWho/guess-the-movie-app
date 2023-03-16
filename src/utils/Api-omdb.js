import axios from "axios";

const APIKEY = "http://www.omdbapi.com/?apikey=trilogy&t=";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
  search: function (query) {
    return axios.get(APIKEY + query);
  }
};

export default API;