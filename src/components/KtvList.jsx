import React from 'react';

const KtvList = ({ videos }) => {
  const renderedList = videos.map((video) => (
    <div key={video.id.videoId || video.id}>
      {video.snippet.title}
    </div>
  ));

  return <div>{renderedList}</div>;
};

export default KtvList;
