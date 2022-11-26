import axios from "axios";

export default class ApiClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
      params: {
        key: process.env.REACT_APP_API_KEY,
      },
    });
  }

  async getSearchResult(params) {
    return this.httpClient.get("search", params);
  }

  async getMostPopular(params) {
    return this.httpClient.get("videos", params);
  }

  async getChannelDetail(params) {
    return this.httpClient.get("channels", params);
  }

  async getChannelThumbnail(params) {
    return this.httpClient.get("channels", params);
  }

  async getRelatedVideos(params) {
    return this.httpClient.get("search", params);
  }
}
