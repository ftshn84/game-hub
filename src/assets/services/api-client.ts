import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "a12ef49e2afe47b79503646977101940" },
});
