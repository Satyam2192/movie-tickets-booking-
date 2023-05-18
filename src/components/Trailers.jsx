import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Trailers() {
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: 'trailer',
            type: 'video',
            videoDefinition: 'high',
            videoEmbeddable: 'true',
            maxResults: 1,
            key: 'AIzaSyCL_GPmXz9wZMVpzwul4-rE5lKHxof6JLs'
          }
        }
      );
      const videoId = response.data.items[0].id.videoId;
      setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
    };
    fetchTrailer();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2">
        {trailerUrl && (
          <iframe
            className="w-full h-96 md:h-128 lg:h-144"
            src={trailerUrl}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        )}
      </div>
    </div>
  );
}

export default Trailers;