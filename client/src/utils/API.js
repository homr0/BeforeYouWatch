import axios from "axios";

export default {
  movieSearch: query => axios.post("/api/movies/search", query)
}