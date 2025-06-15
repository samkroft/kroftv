import axios from 'axios';

export const YoutubeData = (apiKey, playlistId) => {
  return axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 10,
      playlistId,
      key: apiKey,
    },
  });
};
