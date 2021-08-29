import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const YOUTUBE_API = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
  },
});

const API = {
  VIDEOS: {
    trending: () => {
      return YOUTUBE_API.get(`/videos`, {
        params: {
          part: "snippet,statistics,contentDetails",
          chart: "mostPopular",
          regionCode: "US",
          fields:
            "nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)",
        },
      })
        .then(({ data }) => {
          return data;
        })
        .then(({ nextPageToken, pageInfo, items }) => {
          return {
            nextPageToken,
            totalResults: pageInfo.totalResults,
            data: items.reduce((all, one) => {
              return {
                ...all,
                [one.id]: one,
              };
            }, {}),
          };
        });
    },
    categories: () => {
      return YOUTUBE_API.get(`/videoCategories`, {
        params: {
          part: "snippet",
          regionCode: "US",
        },
      })
        .then(({ data }) => {
          return data;
        })
        .then(({ items }) => {
          return items.reduce((all, one) => {
            return {
              ...all,
              [one.id]: one.snippet.title,
            };
          }, {});
        });
    },
  },
};

export default API;
