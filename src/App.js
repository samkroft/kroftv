import React, { useState, useEffect } from 'react';
import { YoutubeData } from './components/YoutubeData';
import KtvList from './components/KtvList';

const App = () => {
  const [videos, setVideos] = useState([]);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const playlistId = process.env.REACT_APP_PLAYLIST_ID;

  const fetchVideos = async () => {
    const youtube = YoutubeData(apiKey, playlistId);

    try {
      const response = await youtube.get('/playlistItems');
      setVideos(response.data.items);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>KroftTV</h1>
      <KtvList videos={videos} />
    </div>
  );
};

export default App;
