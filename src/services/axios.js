import axios from "axios";

const instance = axios.create({
  baseURL: "https://hai-amazon-clone-backend.herokuapp.com/",
});

export default instance;
