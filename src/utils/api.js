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
    categories: () => {
      return YOUTUBE_API.get(`/videoCategories`, {
        params: {
          part: "snippet",
          regionCode: "US",
        },
      }).then(({ data }) => {
        return data;
      });
    },
  },
};

export default API;
