import React, { createContext, useState, useContext } from 'react';

const PlaylistContext = createContext();

// Общая база всех треков
const allTracksDatabase = [
  // Треки из поиска
  {
    id: 101,
    title: 'ПОВОД',
    artist: 'MORGENSHTERN',
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    duration: '2:33'
  },
  {
    id: 102,
    title: 'ДОМ (Лондон, Прага, Ницца)',
    artist: 'MORGENSHTERN',
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    duration: '2:33'
  },
  // Треки из чарта
  {
    id: 201,
    title: 'ПОВОД',
    artist: 'MORGENSHTERN',
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    duration: '2:33'
  },
  {
    id: 202,
    title: 'ДОМ (Лондон, Прага, Ницца)',
    artist: 'MORGENSHTERN',
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    duration: '2:33'
  },
  // Треки из раздела "Все"
  {
    id: 301,
    title: 'Листай вправо',
    artist: 'Подкаст о современных технологиях',
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    duration: '45:00'
  },
  {
    id: 302,
    title: 'TED: The Best',
    artist: 'Лучшие выступления TED',
    image: 'https://avatars.yandex.net/get-music-content/14270105/6537af0c.a.35177317-1/400x400',
    duration: '32:15'
  }
];

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchTracks = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = allTracksDatabase.filter(track => 
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase())
    );
    
    // Удаляем дубликаты по ID
    const uniqueResults = Array.from(new Map(results.map(item => [item.id, item])).values());
    
    // Сортируем результаты: сначала точные совпадения, потом частичные
    const sortedResults = uniqueResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const query_lower = query.toLowerCase();
      
      if (aTitle === query_lower && bTitle !== query_lower) return -1;
      if (bTitle === query_lower && aTitle !== query_lower) return 1;
      return 0;
    });

    setSearchResults(sortedResults);
  };

  const addToPlaylist = (track) => {
    if (!playlists.some(item => item.id === track.id)) {
      setPlaylists(prev => [...prev, track]);
    }
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylists(prev => prev.filter(track => track.id !== trackId));
  };

  return (
    <PlaylistContext.Provider value={{ 
      playlists, 
      searchResults, 
      searchTracks,
      addToPlaylist,
      removeFromPlaylist
    }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylist must be used within a PlaylistProvider');
  }
  return context;
}; 