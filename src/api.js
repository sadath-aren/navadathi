import axios from "axios";

/* ln 4-8 creates client for axios to fetch data */
const client = axios.create({
  baseURL: "https://api.covidindiatracker.com",
  json: true
});

export default {
  /* ln 11-18 function to fetch data using the axios client */
  async execute(method, url, data) {
    return client({
      method,
      url,
      data
    }).then(resp => resp.data);
  },
  getAllData() {
    return this.execute("get", "/total.json");
  },
  getStateData() {
    return this.execute("get", "/state_data.json");
  }
};
