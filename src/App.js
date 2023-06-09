import React, { useState } from 'react';
import MovieGrid from './MovieGrid';
import MoviePopup from './MoviePopup';
import posterImage1 from './постер 1.jpg';
import posterImage2 from './постер 2.jpg';
import posterImage3 from './постер 3.jpg';
import posterImage4 from './постер 4.jpg';
import posterImage5 from './постер 5.jpg';
import posterImage6 from './постер 6.jpg';
import posterImage7 from './постер 7.jpg';
import posterImage8 from './постер 8.jpg';
import posterImage9 from './постер 9.jpg';
import posterImage10 from './постер 10.jpg';
import posterImage11 from './постер 11.jpg';
import posterImage12 from './постер 12.jpg';
import posterImage13 from './постер 13.jpg';
import posterImage14 from './постер 14.jpg';
import posterImage15 from './постер 15.jpg';
import headerImage from './header.png';


const Header = () => {
  return (
    <header>
      <img src={headerImage} alt="Header" />
    </header>
  );
};

const moviesData = [
  {
    id: 1,
    title: 'Людина-павук',
    year: 2019,
    rating: 8.5,
    actors: ['Том Холланд', 'Зендея Марі'],
    director: 'Джон Уотс',
    trailerUrl: 'https://www.youtube.com/watch?v=37wpf2VS5B8',
    description: 'Люди́на-паву́к або Спа́йдермен, справжнє імя — Пітер Бенджамін Паркер — супергерой з коміксів американського видавництва Marvel Comics, вигаданий Стеном Лі та Стівом Дітко. Вперше Людина-павук зявився у серії коміксів Amazing Fantasy #15 у серпні 1962 року.',
    posterUrl: posterImage1
  },
  {
    id: 2,
    title: 'Аватар 2',
    year: 2022,
    rating: 8,
    actors: ['Сем Вортінгтон', 'Зої Салдана'],
    director: 'Джеймс Кемерон',
    trailerUrl: 'https://www.youtube.com/watch?v=d9MyW72ELq0&ab_channel=Avatar',
    description: 'Американський науково-фантастичний 3D-фільм режисера та сценариста Джеймса Кемерона, вихід якого у прокат відбувся 15 грудня 2022 року.',
    posterUrl: posterImage2
  },
  {
    id: 3,
    title: 'Пульс',
    year: 2020,
    rating: 6.5,
    actors: ['Наталія Бабенко'],
    director: 'Сергій Чеботаренко',
    trailerUrl: 'https://www.youtube.com/watch?v=yZx3solyoeg',
    description: 'Українська повнометражна спортивна драма режисера Сергія Чеботаренка, заснована на реальній історії української спортсменки, легкоатлетки.',
    posterUrl: posterImage3
  },
  {
    id: 4,
    title: 'Джон Уік 3',
    year: 2019,
    rating: 8.5,
    actors: ['Кіану Рівз'],
    director: 'Чад Стахелські',
    trailerUrl: 'https://www.youtube.com/watch?v=TzIbsaA94yY',
    description: 'Американський нео-нуар бойовик режисера Чада Стагельськи. Автори сценарію: Дерек Колстад, Кріс Коллінз і Марк Абрамс, і Шей Хаттен.',
    posterUrl: posterImage4
  },
  {
    id: 5,
    title: 'Світ Юрського періоду 2',
    year: 2018,
    rating: 8.5,
    actors: ['Кріс Прат'],
    director: 'Хуан Бейона',
    trailerUrl: 'https://www.youtube.com/watch?v=8rVb5c44KkM',
    description: 'Науково-фантастичний і пригодницький фільм, який є третім в серії «Парк юрського періоду». Це перший фільм франшизи, який не був знятий Стівеном Спілбергом і котрий не базувався книзі Майкла Крайтона, хоча багато сцен з фільму були взяті з його книг про Парк юрського періоду.',
    posterUrl: posterImage5
  },
  {
    id: 6,
    title: 'Маленькі жінки',
    year: 2019,
    rating: 6.0,
    actors: ['Сірша Ронан', 'Елайза Сканлен'],
    director: 'Грета Гервіг',
    trailerUrl: 'https://www.youtube.com/watch?v=rrqqzjNZGzQ',
    description: 'Американський драматичний фільм 2019 року режисерки Ґрети Ґервіґ. Це сьома повнометражна екранізація однойменного роману Луїзи Мей Олкотт 1868 року. ',
    posterUrl: posterImage6
  },
  {
    id: 7,
    title: 'Ми',
    year: 2019,
    rating: 5.5,
    actors: ['Гейб Вілсон'],
    director: 'Джордан Піл',
    trailerUrl: 'https://www.youtube.com/watch?v=7QNbAltq7Z0',
    description: 'Американський фільм жахів, американського режисера і актора Джордана Піла. Світова премєра фільму відбулася 8 березня 2019 року на кінофестивалі SXSW. На широкі екрани фільм вийшов 22 березня 2019 року.',
    posterUrl: posterImage7
  },
  {
    id: 8,
    title: 'Згадати все',
    year: 2012,
    rating: 7.8,
    actors: ['Кейт Бекінсейл'],
    director: 'Лен Вайсман',
    trailerUrl: 'https://www.youtube.com/watch?v=LX6G4OQlDQ4',
    description: 'Американський фантастичний фільм-бойовик із елементами постапокаліптики і антиутопії, знятий у 2012 році. Фільм є римейком однойменного фільму 1990-го року, хоча, насправді, сюжет дуже віддалено нагадує згаданий фільм.',
    posterUrl: posterImage8
  },
  {
    id: 9,
    title: 'Весільний спадок',
    year: 2020,
    rating: 8.2,
    actors: ['Марія Квітка'],
    director: 'Олексій Гуз',
    trailerUrl: 'https://www.youtube.com/watch?v=bNFEc_aKfUw&t=1s&ab_channel=FILM.UAGroup',
    description: 'Розповідь про весільні звичаї та обряди з різних куточків України. Завдяки цій картині глядач зануриться у світ багатої, яскравої та різноманітної весільної культури 8 областей країни.',
    posterUrl: posterImage9
  },
  {
    id: 10,
    title: 'Локі',
    year: 2021,
    rating: 9.3,
    actors: ['Том Хіддлстон'],
    director: 'Кейт Херрон',
    trailerUrl: 'https://www.youtube.com/watch?v=WkA0TligGOk',
    description: 'Локі загинув від рук неймовірного і могутнього Таноса. Хоч його оплакував зведений старший брат, важко називати його позитивним воїном честі. Він неодноразово намагався змістити великого Одіна з трону, підставляв Тора, намагався захопити Землю.',
    posterUrl: posterImage10
  },
  {
    id: 11,
    title: 'Капітан Марвел',
    year: 2019,
    rating: 6.7,
    actors: ['Брі Ларсон'],
    director: 'Раян Флек',
    trailerUrl: 'https://www.youtube.com/watch?v=X3wiIYuSWcE',
    description: 'Американський супергеройський фільм про Керол Денверс, персонажку коміксів видавництва Marvel Comics, спродюсований Marvel Studios з Walt Disney Studios Motion Pictures.',
    posterUrl: posterImage11
  },
  {
    id: 12,
    title: 'Одного разу в... Голлівуді',
    year: 2019,
    rating: 7.7,
    actors: ['Леонардо Ді Капріо'],
    director: 'Квентін Тарантіно',
    trailerUrl: 'https://www.youtube.com/watch?v=8X3hBNCM3Gw',
    description: 'Драмедійний фільм 2019 року режисера Квентіна Тарантіно. Стрічка розповідає історію про телевізійного актора Ріка Долтона 1969 року в Лос-Анджелесі та його дублера Кліффа Бута.',
    posterUrl: posterImage12
  },
  {
    id: 13,
    title: 'Кілер',
    year: 2021,
    rating: 5.4,
    actors: ['Брюс Вілліс'],
    director: 'Джессі Атлас',
    trailerUrl: 'https://www.youtube.com/watch?v=grAQE2K2Avk',
    description: 'Кримінальний трилер та бойовик «Кілер» зняв режисер-початківець Джессі Атлас. Разом з більш досвідченим Аароном Вульфом написали сценарій. Впродовж роботи над фільмом його назву змінювали двічі.',
    posterUrl: posterImage13
  },
  {
    id: 14,
    title: 'Чорне та синє',
    year: 2019,
    rating: 6.9,
    actors: ['Тайріз Гібсон'],
    director: 'Деона Тейлора',
    trailerUrl: 'https://www.youtube.com/watch?v=ACneyncfNp0',
    description: 'Американський гостросюжетний бойовик 2019 року режисера Деона Тейлора, знятий за сценарієм Пітера А. Давлінга, з Наомі Гарріс, Тайрізом Гібсоном, Френком Ґрілло, Майком Колтером, Рейдом Скоттом і Бо Кнаппом у головних ролях.',
    posterUrl: posterImage14
  },
  {
    id: 15,
    title: 'Гнів людський',
    year: 2021,
    rating: 9.6,
    actors: ['Джейсон Стейтем'],
    director: 'Ґай Річі',
    trailerUrl: 'https://www.youtube.com/watch?v=68oinNJUN-s',
    description: 'Художній фільм у жанрі бойовика і трилера, сценаристом і режисером якого є Гай Річі. Сюжет фільму заснований на французькому фільмі Інкасатор 2004 року режисера Ніколя Букрієфа. Головну роль виконує Джейсон Стейтем.',
    posterUrl: posterImage15
  },

];
const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSortChange = (e) => {
    const sortByValue = e.target.value;
    setSortBy(sortByValue);

    const sortedMovies = sortMovies(moviesData, sortByValue);
    setMovies(sortedMovies);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const sortMovies = (movies, sortBy) => {
    if (sortBy === 'title') {
      return movies.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'year') {
      return movies.slice().sort((a, b) => a.year - b.year);
    } else if (sortBy === 'rating') {
      return movies.slice().sort((a, b) => b.rating - a.rating);
    }
    return movies;
  };

  const filterMovies = (movies, searchQuery) => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.actors.some((actor) => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const updatedMovies = filterMovies(sortMovies(movies, sortBy), searchQuery);

  return (
    <div>
      <h1 className="site-title">Фільмотека</h1>
      <div className="sort-search-container">
        <div className="sort-container">
          <label className="sort-label">Сортувати за:</label>
          <select className="sort-select" value={sortBy} onChange={handleSortChange}>
            <option value="title">Назва</option>
            <option value="year">Рік</option>
            <option value="rating">Рейтинг</option>
          </select>
        </div>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Введіть назву фільму, актору або режисеру"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={() => setMovies(filterMovies(moviesData, searchQuery))}>
            Шукати
          </button>
        </div>
      </div>

      <MovieGrid movies={updatedMovies} />
    </div>
  );
};

export default App;