import axios from "axios";

const SERVER_BASE_URL = "https://j0sal-organic-fishstick-g7gxj7v7x643wjpq-5000.preview.app.github.dev/";

const LOCAL_SERVER_URL = "http://127.0.0.1:5000/";

const axiosClient = axios.create({
  baseURL: SERVER_BASE_URL,
});

export default axiosClient;
