// cd-movie-app terminale yazdım API için gerekli
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MovieList from './Components/MovieList';
import SearchBox from './Components/SearchBox';
import EmptyPage from './Components/EmptyPage';

function App() {
  const [theme, setTheme] = useState('light');
  const [movies, setMovies] = useState([]);
  // API'den alınan film verileri çekmek için (getter ve setter) kullandım
  const [searchValue, setSearchValue] = useState('');
    // Arama kutusuna yazılan değer
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');

  // Arama terimini debounce eder ve 0.5 saniye sonra güncellemek için
  // Arama terimi en az 3 karakter olmalı
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchValue.length >= 3) {
        setDebouncedSearchValue(searchValue);
        
      }
      console.log('Debounced search value:', searchValue);
    }, 500);

    return () => {
      clearTimeout(handler);
      // Önceki zaman aşımını temizle
      console.log('Previous search request cancelled');
    };

  }, [searchValue]);
// Debounce edilmiş arama terimi ile API'den veri alır
  useEffect(() => {
    const controller = new AbortController();
  // İstek iptali için AbortController oluştur
    const fetchMovies = async () => {
      const url = `https://www.omdbapi.com/?s=${debouncedSearchValue}&apikey=43c8aeae`;
      console.log('Fetching movies for:', debouncedSearchValue);
      try {
        const response = await fetch(url, { signal: controller.signal });
        const responsJson = await response.json();// API isteği yap
        if (responsJson.Search) {
          setMovies(responsJson.Search);// Filmleri güncelle
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request canceled');// İstek iptal edildi mesajı
        } else {
          console.error('An error occurred:', error);// Hata durumunda hata mesajı
        }
      }
    };

    if (debouncedSearchValue) {
      fetchMovies();// Debounce edilmiş arama terimi değiştiğinde tetiklenir
    }

    return () => {
      controller.abort();
      console.log('AbortController signal triggered');
       // Debounce edilmiş arama terimi değiştiğinde tetiklenir
    };
  }, [debouncedSearchValue]);
//  bosstrap kullanmadım istenmediği için ama ana şemayı oluşturmak için claaasname adlarını projemde kullanıyorum 
// boostrap kullanlarak da çok daha kolay responsive edilebilir (proje gelişimi açısından)
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className={`container ${theme}`}>
              <Navbar theme={theme} setTheme={setTheme} />
              <div className="movie-app">
                <div className="row1">
                  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="row2">
                  <MovieList movies={movies} />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/empty-page" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
}

export default App;































































































