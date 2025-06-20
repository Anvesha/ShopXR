import React, { useState } from 'react';

const tutorials = {
  'Get started': {
    expanded: true,
    items: [
      {
        title: 'Basic walk through',
        videoUrl: 'https://youtu.be/eNKrfLSWNec?si=8_GkV9MiCppkFEU-',
      },
    ],
  },
  'App setup': {
    expanded: false,
    items: [],
  },
  'Storefront integration': {
    expanded: false,
    items: [],
  },
  'Binding (Coming soon)': {
    comingSoon: true,
  },
  'Demo examples (Coming soon)': {
    comingSoon: true,
  },
};

const VideoTutorials = () => {
  const [selectedSection, setSelectedSection] = useState('Get started');
  const [selectedVideo, setSelectedVideo] = useState(tutorials['Get started'].items[0]);

  const toggleSection = (section) => {
    tutorials[section].expanded = !tutorials[section].expanded;
    setSelectedSection(section);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r bg-gray-50 overflow-y-auto">
        <h2 className="text-xl font-semibold p-4 border-b">Video tutorials</h2>
        <ul className="space-y-2 p-4">
          {Object.entries(tutorials).map(([section, data]) => (
            <li key={section}>
              <button
                onClick={() => !data.comingSoon && toggleSection(section)}
                className={`flex items-center justify-between w-full font-medium text-left ${
                  selectedSection === section ? 'text-green-700' : 'text-gray-800'
                }`}
              >
                {section}
                {!data.comingSoon && (
                  <span>{data.expanded ? '▾' : '▸'}</span>
                )}
              </button>
              {data.comingSoon && <span className="text-sm text-gray-400">Coming soon</span>}
              {data.expanded && data.items && (
                <ul className="ml-4 mt-2 space-y-1">
                  {data.items.map((item) => (
                    <li key={item.title}>
                      <button
                        onClick={() => setSelectedVideo(item)}
                        className={`text-sm hover:text-green-600 ${
                          selectedVideo?.title === item.title ? 'text-green-700 font-medium' : ''
                        }`}
                      >
                        • {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 flex flex-col items-center justify-center">
        {selectedVideo ? (
          <div className="w-full max-w-5xl">
            <h3 className="text-lg font-semibold mb-4">{selectedVideo.title}</h3>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={selectedVideo.videoUrl}
                title="Video tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-center">Select a tutorial to start watching.</div>
        )}
      </main>
    </div>
  );
};

export default VideoTutorials;
