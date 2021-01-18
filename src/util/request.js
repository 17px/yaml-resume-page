import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development" ? "/" : "./";

const ins = axios.create({
  timeout: 7000,
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
  },
});

export default ins;
