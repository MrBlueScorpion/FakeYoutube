import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyC5e0rOjeh-KK3PgkjXxKxDvVF9r-lanVI';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

const App = () => {
  "use strict";
  return (
    <div>
      <SearchBar />
    </div>
  )  
};

ReactDOM.render(<App />, document.querySelector('.container'));
