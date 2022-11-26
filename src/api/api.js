export default class Api {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getSearchResult(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#getMostPopular();
  }

  async getChannelDetail(channelId) {
    return this.apiClient
      .getChannelDetail({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet);
  }

  async getChannelThumbnail(channelId) {
    return this.apiClient
      .getChannelThumbnail({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async getRelatedVideo(videoId) {
    return this.apiClient
      .getSearchResult({
        params: {
          part: "snippet",
          maxResults: 25,
          relatedToVideoId: videoId,
          type: "video",
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .getSearchResult({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #getMostPopular() {
    return this.apiClient
      .getMostPopular({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
