import React from 'react';
import { useParams,Link } from 'react-router';
import Layout from '../components/Layout';
import '../styles/ArtistProfile.css';

const TrackItem = ({ track, onAddToPlaylist, showAddButton }) => {
  return (
    <div className="track-item">
      <div className="track-item__position">{track.position}</div>
      <div className="track-item__image">
        <img src={track.image} alt={track.title} />
      </div>
      <div className="track-item__info">
        <div className="track-item__title">{track.title}</div>
        <Link 
          to={`/artist/${encodeURIComponent(track.artist)}`} 
          className="track-item__artist"
        >
          {track.artist}
        </Link>
      </div>
      <div className="track-item__duration">{track.duration}</div>
      {showAddButton && (
        <button 
          className="track-item__add-button"
          onClick={() => onAddToPlaylist(track)}
        >
          +
        </button>
      )}
    </div>
  );
};
const chartData = [
  {
    id: 201,
    image: 'https://avatars.yandex.net/get-music-content/10960834/43f74ef6.a.31799677-1/200x200',
    title: 'BABYBARS 3',
    artist: 'Мейби Бейби',
    duration: '2:22'
  },
  {
    id: 202,
    image: 'https://avatars.yandex.net/get-music-content/9837803/efd3bf76.a.28250622-1/200x200',
    title: 'Зайка',
    artist: 'Мейби Бейби',
    duration: '2:20'
  },
  {
    id: 203,
    image: 'https://avatars.yandex.net/get-music-content/10139807/9f7443a6.a.27368077-1/200x200',
    title: 'BABYBARS 2',
    artist: 'Мейби Бейби',
    duration: '2:12'
  },
  {
    id: 204,
    image: 'https://avatars.yandex.net/get-music-content/6201394/c86d6264.a.23264043-1/200x200',
    title: 'sH1pu4Ka!',
    artist: 'Мейби Бейби',
    duration: '2:52'
  },
  {
    id: 205,
    image: 'https://avatars.yandex.net/get-music-content/6201394/c86d6264.a.23264043-1/200x200',
    title: 'Мэйбилэнд',
    artist: 'Мейби Бейби',
    duration: '2:22'
  },
 
];
const VideoCard = ({ videoUrl, title, description }) => {
  return (
    <div className="video-card">
      <div className="video-card__frame">
        <iframe 
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      <h3 className="video-card__title">{title}</h3>
      <p className="video-card__description">{description}</p>
    </div>
  );
};

const videosData = [
  {
    id: 1,
    videoUrl: "https://rutube.ru/play/embed/b341e5cb40aa04e293019c267e4b42c4/?r=plwd",
    title: 'ЗАЙКА',
    description: 'Мэйби Бэйби'
  },
  {
    id: 2,
    videoUrl: "https://rutube.ru/play/embed/75567fa1b19d73ddac99dcd912bbc370/",
    title: 'Барби из трущоб',
    description: 'Мэйби Бэйби'
  },
  {
    id: 3,
    videoUrl: "https://rutube.ru/play/embed/c11feca3aad2a9d3ef70a7a6ebc9f8f3/",
    title: 'Аскорбинка',
    description: 'Мэйби Бэйби'
  }
];

const ArtistProfile = () => {
  const { artistId } = useParams();
  const [activeTab, setActiveTab] = React.useState('clips');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'clips':
        return (
          <div className="artist-content">
            <h2 className="content-title">Клипы</h2>
            <div className="videos-grid">
              {videosData.map(video => (
                <VideoCard
                  key={video.id}
                  videoUrl={video.videoUrl}
                  title={video.title}
                  description={video.description}
                />
              ))}
            </div>
          </div>
        );
        case 'info': 
        return (
          <div className="artist-content">
            <h2 className="content-title">Информация</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3 className="info-title">Биография</h3>
                <p className="info-description">
                  Мейби Бейби — Российская и белорусская певица, бывшая участница российской группы «Френдзона».
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page">
      <Layout>
        <div className="artist-profile">
          <div className="artist-header">
            <div className="artist-info">
              <div className="artist-image">
                <img src="https://avatars.yandex.net/get-music-content/9837803/2b4eb108.p.6019372/200x200" alt={artistId} />
              </div>
              <div className="artist-details">
                <span className="artist-type">ИСПОЛНИТЕЛЬ</span>
                <h1 className="artist-name">Мэйби Бэйби</h1>
                <span className="artist-listeners">5 368 847 слушателей за месяц</span>
                <div className="artist-actions">
                  <button className="btn-primary">
                    <span className="play-icon">▶</span>
                    Слушать
                  </button>
                  <button className="btn-like">
                    <span className="heart-icon">♡</span>
                    <span>288 037</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav className="artist-nav">
            <ul className="artist-nav-list">
  
              <li 
                className={`artist-nav-item ${activeTab === 'clips' ? 'artist-nav-item--active' : ''}`}
                onClick={() => handleTabClick('clips')}
              >
                ГЛАВНОЕ
              </li>
              <li 
                className={`artist-nav-item ${activeTab === 'info' ? 'artist-nav-item--active' : ''}`}
                onClick={() => handleTabClick('info')}
              >
                ИНФО
              </li>
            </ul>
          </nav>

          {renderContent()}
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Популярные треки</h2>
              <div className="home__section-description">
                Треки, популярные на MusicApp прямо сейчас
              </div>
            </div>
            
            <div className="track-list">
              {chartData.map((track, index) => (
                <TrackItem
                  key={track.id}
                  track={{ ...track, position: index + 1 }}
                  showAddButton={true}
                />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default ArtistProfile; 