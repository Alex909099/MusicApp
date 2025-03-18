import React from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout';
import { useTab } from '../context/TabContext';
import '../styles/Home.css';
import { usePlaylist } from '../context/PlaylistContext';

const PodcastCard = ({ image, title, description, age }) => {
  return (
    <div className="podcast-card">
      <div className="podcast-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="podcast-card__title">{title}</h3>
      <p className="podcast-card__description">{description}</p>
      <span className="podcast-card__age">{age}+</span>
    </div>
  );
};

const podcastsData = [
  {
    id: 1,
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    title: 'Листай вправо',
    description: 'Подкаст о современных технологиях',
    age: 18
  },
  {
    id: 2,
    image: 'https://avatars.yandex.net/get-music-content/14270105/6537af0c.a.35177317-1/400x400',
    title: 'TED: The Best',
    description: 'Лучшие выступления TED',
    age: 18
  },
  {
    id: 3,
    image: '//avatars.yandex.net/get-music-content/14707562/c1c63f93.a.33747239-8/200x200',
    title: 'Святые из подполья',
    description: 'Документальный подкаст',
    age: 18
  },
  {
    id: 4,
    image: 'https://avatars.yandex.net/get-music-content/13663712/7e294c2d.a.18837614-9/400x400',
    title: 'Время и деньги',
    description: 'Финансовый подкаст',
    age: 18
  },
];
const NewRealses = [
  {
    id: 1,
    image: 'https://avatars.yandex.net/get-music-content/14369544/8fc00570.a.34022624-2/400x400',
    title: 'На костре',
    description: '5sta Family',
    age: 18
  },
  {
    id: 2,
    image: 'https://avatars.yandex.net/get-music-content/14707562/013a0b48.a.35274301-1/400x400',
    title: 'Химера',
    description: 'BEARWOLF',
    age: 18
  },
  {
    id: 3,
    image: 'https://avatars.yandex.net/get-music-content/14082060/3d976178.a.34929485-1/400x400',
    title: 'Hymn for the Weekend',
    description: 'ONEIL, KANVISE, FAVIA',
    age: 18
  },
  {
    id: 4,
    image: 'https://avatars.yandex.net/get-music-content/13663712/c79cfb0b.a.35101118-1/400x400',
    title: 'Баю Бай',
    description: 'ONEIL, MURANA, VOVALOVA',
    age: 18
  },
];
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
    image: 'https://avatars.yandex.net/get-music-content/10874616/5698760d.a.29858213-1/200x200',
    title: 'Дорога дальняя',
    artist: 'Jakone',
    duration: '2:33'
  },
  {
    id: 203,
    image: 'https://avatars.yandex.net/get-music-content/13911897/0d708539.a.33620485-1/200x200',
    title: 'Худи',
    artist: 'Джиган, Artik & Asti, NILETTO',
    duration: '2:46'
  },
  {
    id: 204,
    image: 'https://avatars.yandex.net/get-music-content/13449652/5468eee1.a.32966628-1/200x200',
    title: 'Бобр',
    artist: 'SLAVA SKRIPKA',
    duration: '2:09'
  },
  {
    id: 205,
    image: 'https://avatars.yandex.net/get-music-content/9737237/e1f864dc.a.24773100-2/400x400',
    title: 'Самолеты',
    artist: 'Леонид Агутин, DJ DANI WOO',
    duration: '2:03'
  },
  {
    id: 206,
    image: 'https://avatars.yandex.net/get-music-content/14247687/724f19c3.a.33758970-1/200x200',
    title: 'Остров',
    artist: 'Леонид Агутин, DJ DANI WOO',
    duration: '2:15'
  },
  {
    id: 207,
    image: 'https://avatars.yandex.net/get-music-content/13663712/ef6817a8.a.33549512-1/200x200',
    title: 'Знаю',
    artist: 'Полка',
    duration: '2:46'
  },
  {
    id: 208,
    image: 'https://avatars.yandex.net/get-music-content/10874616/1b5b816d.a.30134601-1/200x200',
    title: 'Харизма',
    artist: 'Wallem',
    duration: '2:36'
  },
  {
    id: 209,
    image: 'https://avatars.yandex.net/get-music-content/10918712/1ce3cf76.a.31579940-1/200x200',
    title: 'Айдахар',
    artist: 'Ирина Кайратовна',
    duration: '2:56'
  },
  {
    id: 210,
    image: 'https://avatars.yandex.net/get-music-content/15142616/a05f3946.a.35467504-1/200x200',
    title: 'В здании',
    artist: '1ches',
    duration: '1:14'
  },
  {
    id: 211,
    image: 'https://avatars.yandex.net/get-music-content/14439424/196fe38e.a.35298590-1/200x200',
    title: 'chess',
    artist: 'joyful',
    duration: '2:16'
  },
  {
    id: 212,
    image: 'https://avatars.yandex.net/get-music-content/9837405/3b718ef0.a.26654240-1/200x200',
    title: 'Океаны',
    artist: 'XOLIDAYBOY',
    duration: '2:53'
  },
  {
    id: 213,
    image: 'https://avatars.yandex.net/get-music-content/9837803/81f99638.a.27856013-1/200x200',
    title: 'Прощание',
    artist: 'Три дня дождя, MONA',
    duration: '2:16'
  },
  {
    id: 214,
    image: 'https://avatars.yandex.net/get-music-content/14369544/16bd1ac3.a.34062038-1/200x200',
    title: 'Завтра',
    artist: 'ЕГОР КРИД, Баста',
    duration: '3:26'
  },
  {
    id: 215,
    image: 'https://avatars.yandex.net/get-music-content/10874616/4e607017.a.30001312-1/200x200',
    title: 'Были бы крылья',
    artist: 'Merab Amzoevi',
    duration: '2:36'
  },
];

const playlistsData = []; // Пустой массив для плейлистов

const Home = () => {
  const { activeTab, setActiveTab } = useTab();
  const { searchResults, playlists, addToPlaylist, removeFromPlaylist } = usePlaylist();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return (
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Результаты поиска</h2>
            </div>
            <div className="track-list">
              {searchResults.map((track, index) => (
                <TrackItem
                  key={track.id}
                  track={{ ...track, position: index + 1 }}
                  onAddToPlaylist={addToPlaylist}
                  showAddButton={true}
                />
              ))}
            </div>
          </section>
        );
      case 'playlists':
        return (
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Мой плейлист</h2>
            </div>
            <div className="track-list">
              {playlists.map((track, index) => (
                <TrackItem
                  key={track.id}
                  track={{ ...track, position: index + 1 }}
                  onAddToPlaylist={() => removeFromPlaylist(track.id)}
                  showAddButton={false}
                />
              ))}
            </div>
          </section>
        );
      case 'chart':
        return (
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Чарт</h2>
              <div className="home__section-description">
                Треки, популярные на MusicApp прямо сейчас
              </div>
            </div>
            
            <div className="track-list">
              {chartData.map((track, index) => (
                <TrackItem
                  key={track.id}
                  track={{ ...track, position: index + 1 }}
                  onAddToPlaylist={addToPlaylist}
                  showAddButton={true}
                />
              ))}
            </div>
          </section>
        );
      case 'playlists':
        return (
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Плейлисты</h2>
              <Link to="/podcasts" className="home__section-link">Смотреть всё</Link>
            </div>
            <div className="home__cards">
              {playlistsData.map(item => (
                <PodcastCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  age={item.age}
                />
              ))}
            </div>
          </section>
        );
      default:
        return (
          <section className="home__section">
            <div className="home__section-header">
              <h2 className="home__section-title">Все</h2>
              <Link to="/podcasts" className="home__section-link">Смотреть всё</Link>
            </div>
            <div className="home__cards">
              {podcastsData.map(item => (
                <PodcastCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  age={item.age}
                />
                
              ))}
              <div className="home__section-header">
              <h2 className="home__section-title">Новые Релизы</h2>
            </div>
            </div>
            <div className="home__cards">
              {NewRealses.map(item => (
                <PodcastCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  age={item.age}
                />
              ))}
            </div>
          </section>
        );
    }
  };
  // const handleTabClickk = (tab) => {
  //   setActiveTab(tab);
  // };
  // const renderRealaes = () => {
  //   switch (activeTab) {
  //     default:
  //       return (
  //         <section className="home__section">
  //           <div className="home__section-header">
  //             <h2 className="home__section-title">Новые Релизы</h2>
  //             <Link to="/podcasts" className="home__section-link">Смотреть всё</Link>
  //           </div>
  //           <div className="home__cards">
  //             {NewRealses.map(item => (
  //               <PodcastCard
  //                 key={item.id}
  //                 image={item.image}
  //                 title={item.title}
  //                 description={item.description}
  //                 age={item.age}
  //               />
  //             ))}
  //           </div>
  //         </section>
  //       );
     
  //   }
  // };
  // case 'NewReales':
  //   return (
  //     <section className="home__section">
  //       <div className="home__section-header">
  //         <h2 className="home__section-title">Новые релизы</h2>
  //         <div className="home__section-description">
  //           Треки, популярные на MusicApp прямо сейчас
  //         </div>
  //       </div>
        
  //       <div className="track-list">
  //         {NewRealses.map((track, index) => (
  //           <TrackItem
  //             key={track.id}
  //             track={{ ...track, position: index + 1 }}
  //             onAddToPlaylist={addToPlaylist}
  //             showAddButton={true}
  //           />
  //         ))}
  //       </div>
  //     </section>
  //     )
  return (
    <div className="page">
      <Layout>
        <div className="home">
          <h1 className="home__title">Главное</h1>
          
          <nav className="home__nav">
            <ul className="home__nav-list">
              <li 
                className={`home__nav-item ${activeTab === 'all' ? 'home__nav-item--active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                <span>ВСЁ</span>
              </li>
              <li 
                className={`home__nav-item ${activeTab === 'chart' ? 'home__nav-item--active' : ''}`}
                onClick={() => handleTabClick('chart')}
              >
                
                <span>ЧАРТ</span>
              </li>
              <li 
                className={`home__nav-item ${activeTab === 'playlists' ? 'home__nav-item--active' : ''}`}
                onClick={() => handleTabClick('playlists')}
              >
                <span>ПЛЕЙЛИСТЫ</span>
              </li>
              
            </ul>
          </nav>

          {renderContent()}
        </div>
      </Layout>
    </div>
  );
};

export default Home; 