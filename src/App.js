import React, { useState, useEffect } from 'react';
import { YoutubeData } from './youtube';
import KtvList from './KtvList';

const App = () => {
  const [videos, setVideos] = useState([]);

  const playlistId = 'YOUR_PLAYLIST_ID'; // Replace with actual ID
  const apiKey = 'YOUR_API_KEY';         // Replace with actual API key

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
      <h1>YouTube videos list</h1>
      <KtvList videos={videos} />
    </div>
  );
};

export default App;
