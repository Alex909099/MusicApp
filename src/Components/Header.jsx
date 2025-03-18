import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useTab } from '../context/TabContext';
import { usePlaylist } from '../context/PlaylistContext';
import '../styles/Header.css';

// Create a wrapper component that handles navigation
function NavigationWrapper({ children }) {
  const navigate = useNavigate();
  return children(navigate);
}

const Header = () => {
  const { setActiveTab } = useTab();
  const { searchTracks, searchResults } = usePlaylist();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchTracks(searchQuery);
    setActiveTab('search'); // Переключаемся на вкладку с результатами поиска
  };

  return (
    <NavigationWrapper>
      {(navigate) => (
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <div className="header__logo">
                <Link to="/home" onClick={() => setActiveTab('all')}>MusicApp</Link>
              </div>
              <nav className="header__nav">
                <ul>
                  <li className="header__nav-item">
                    <Link to="/home" onClick={() => setActiveTab('all')}>Главное</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__right">
              <div className="header__search">
                <button 
                  className="header__search-button"
                  onClick={() => setIsSearchVisible(!isSearchVisible)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
                  </svg>
                </button>
                {isSearchVisible && (
                  <form className="header__search-form" onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Поиск треков"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button type="submit">Найти</button>
                  </form>
                )}
              </div>
              <button className="header__button" onClick={() => navigate("/")}>Войти</button>
            </div>
          </div>
        </header>
      )}
    </NavigationWrapper>
  );
};

export default Header; 