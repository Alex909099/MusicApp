import React from 'react';

import { Link } from 'react-router';
import '../styles/Home.css';
import PodcastCard from './PodcastCard';

const podcastsData = [
  {
    id: 1,
    image: '/path/to/image1.jpg',
    title: 'Листай вправо',
    description: 'Подкаст о современных технологиях',
    age: 18
  },
  {
    id: 2,
    image: '/path/to/image2.jpg',
    title: 'TED: The Best',
    description: 'Лучшие выступления TED',
    age: 18
  },
  // Добавьте больше подкастов по необходимости
];

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__title">Главное</h1>
        
        <nav className="home__nav">
          <ul className="home__nav-list">
            <li className="home__nav-item home__nav-item--active">
              <Link to="/home">ВСЁ</Link>
            </li>
            <li className="home__nav-item">
              <Link to="/new">НОВЫЕ РЕЛИЗЫ</Link>
            </li>
            <li className="home__nav-item">
              <Link to="/charts">ЧАРТ</Link>
            </li>
            <li className="home__nav-item">
              <Link to="/collections">ПОДБОРКИ</Link>
            </li>
            <li className="home__nav-item">
              <Link to="/neural">НЕЙРОМУЗЫКА</Link>
            </li>
          </ul>
        </nav>

        <section className="home__section">
          <div className="home__section-header">
            <h2 className="home__section-title">Подкасты и книги</h2>
            <Link to="/podcasts" className="home__section-link">Смотреть всё</Link>
          </div>
          <div className="home__cards">
            {podcastsData.map(podcast => (
              <PodcastCard
                key={podcast.id}
                image={podcast.image}
                title={podcast.title}
                description={podcast.description}
                age={podcast.age}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home; 