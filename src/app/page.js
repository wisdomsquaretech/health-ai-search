'use client';

import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoModal from './components/VideoModal';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const recentSearches = ['Headache remedies', 'Anxiety treatment', 'Natural sleep aids', 'Vitamin D benefits'];

  const searchResults = [
    {
      id: 1,
      title: 'Natural Headache Relief Methods That Actually Work',
      description: 'Discover evidence-based natural remedies for headaches including essential oils, hydration techniques, and pressure point massage.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20woman%20applying%20essential%20oil%20to%20temples%20for%20headache%20relief%20in%20bright%20natural%20lighting%20with%20soft%20green%20background%20minimalist%20wellness%20setting&width=400&height=225&seq=1&orientation=landscape',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=0FL2F7gz5q8',

    },
    {
      id: 2,
      title: 'Understanding Anxiety: Symptoms and Treatment Options',
      description: 'Comprehensive guide to anxiety disorders, their symptoms, and effective treatment approaches including therapy and lifestyle changes.',
      image: 'https://readdy.ai/api/search-image?query=calm%20meditation%20scene%20with%20person%20sitting%20peacefully%20in%20serene%20environment%20soft%20blue%20and%20green%20tones%20wellness%20healthcare%20background&width=400&height=225&seq=2&orientation=landscape',
      hasVideo: false,
    },
    {
      id: 3,
      title: 'Sleep Better Tonight: Science-Backed Natural Sleep Aids',
      description: 'Learn about melatonin, valerian root, magnesium, and lifestyle habits that promote better sleep without medications.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20scene%20with%20soft%20lighting%20lavender%20plants%20and%20comfortable%20bedding%20in%20calming%20blue%20and%20white%20tones%20wellness%20sleep%20environment&width=400&height=225&seq=3&orientation=landscape',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=Rt3qxrFKCo0',

    },
    {
      id: 4,
      title: 'Vitamin D Benefits: Energy, Immunity & Bone Health',
      description: 'Everything you need to know about vitamin D deficiency, its health impacts, and how to maintain optimal levels naturally.',
      image: 'https://readdy.ai/api/search-image?query=bright%20sunny%20outdoor%20scene%20with%20healthy%20foods%20rich%20in%20vitamin%20D%20on%20wooden%20table%20natural%20lighting%20wellness%20nutrition%20background&width=400&height=225&seq=4&orientation=landscape',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=Wge-9tl6Pp8',

    },
    {
      id: 5,
      title: 'Stress Management Techniques for Daily Life',
      description: 'Practical stress management strategies that you can implement immediately to reduce anxiety and improve your mental wellbeing.',
      image: 'https://readdy.ai/api/search-image?query=person%20practicing%20yoga%20in%20peaceful%20garden%20setting%20with%20soft%20green%20plants%20and%20natural%20lighting%20wellness%20mindfulness%20background&width=400&height=225&seq=5&orientation=landscape',
      hasVideo: false,
    },
    {
      id: 6,
      title: 'Immune System Boosters: Foods and Habits',
      description: 'Discover the best foods and lifestyle habits that can naturally strengthen your immune system and keep you healthy.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20healthy%20foods%20fruits%20vegetables%20and%20herbs%20arranged%20beautifully%20on%20white%20background%20wellness%20nutrition%20immune%20system%20boosting&width=400&height=225&seq=6&orientation=landscape',     
      hasVideo: false,
    },

    // Add more as needed...
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) setShowResults(true);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleRecentSearchClick = (query) => {
    setSearchQuery(query);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <header className="px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-heartbeat text-2xl text-green-500"></i>
          <span className="text-xl font-semibold text-gray-800">HealthAI</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <i className="fas fa-robot"></i>
          <span>Powered by AI</span>
        </div>
      </header>

      {!showResults ? (
        <div className="flex flex-col items-center justify-center px-6 py-20">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Health Answers</h1>
            <p className="text-xl text-gray-600 mb-12">AI-powered search for reliable health information</p>
            <form onSubmit={handleSearch} className="mb-16">
              <div className="relative max-w-3xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 700+ health topics, symptoms, or remedies..."
                  className="w-full px-6 py-4 pr-14 text-lg border-none rounded-xl bg-white shadow-lg focus:shadow-xl focus:scale-105 transition-all duration-300 outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors cursor-pointer"
                >
                  <i className="fas fa-search text-xl"></i>
                </button>
              </div>
            </form>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Recent Searches</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-full hover:bg-green-100 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <i className="fas fa-clock text-sm"></i>
                    <span>{search}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto mb-8">
            <form onSubmit={handleSearch}>
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 700+ health topics, symptoms, or remedies..."
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors cursor-pointer"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <button
              onClick={() => setShowResults(false)}
              className="mt-4 text-green-600 hover:text-green-700 transition-colors cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Search
            </button>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Search Results</h2>
              <p className="text-gray-600">Found {searchResults.length} results for "{searchQuery}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  <div className="relative">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-48 object-cover object-top"
                  />
                      {result.hasVideo && result.videoUrl && (
                      <div
                        onClick={() =>
                          handleVideoClick({ title: result.title, url: result.videoUrl })
                        }
                        className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition-all"
                      >
                        <i className="fas fa-play text-blue-500 text-sm"></i>
                      </div>
                    )}                      
                      
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}  
    <>
    <VideoModal
      video={selectedVideo}
      onClose={() => {
        setShowVideoModal(false);
        setSelectedVideo(null);
      }}
    />
    </>
    </div>
  );
}