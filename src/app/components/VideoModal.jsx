'use client';

import React from 'react';

const VideoModal = ({ video, onClose }) => {
    if (!video || !video.url) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-4xl mx-4 relative">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors !rounded-button"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        {/* <div className="relative pt-[56.25%]">
          <div className="absolute inset-0 p-4">
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-film text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-600">Video player placeholder</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* YouTube Embed */}
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-b-xl"
            src={`https://www.youtube.com/embed/${extractVideoId(video.url)}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Helper to extract video ID from a YouTube URL
function extractVideoId(url) {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : '';
}

export default VideoModal;