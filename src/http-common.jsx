import axios from "axios";

export default axios.create({
  baseURL: "http://my.devpradip.in/api",
  headers: {
    "Content-type": "application/json"
  }
});