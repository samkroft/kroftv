import React from 'react';

const KtvList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    const { title, resourceId } = video.snippet;
    const videoId = resourceId?.videoId || video.id?.videoId || video.id;

    return (
      <div key={videoId} style={{ marginBottom: '2rem' }}>
        <h3>{title}</h3>
        <iframe
          width="360"
          height="215"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default KtvList;
