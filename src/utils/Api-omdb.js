import axios from "axios";

const APIKEY = "http://www.omdbapi.com/?apikey=trilogy&i=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(APIKEY + query);
  },
};