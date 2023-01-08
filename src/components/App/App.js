import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [
        {id: 0, name: 'Mo Bamba', artist: 'Lucas Sellem', album: 'Cren Bamba'}
      ]
    }
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
         <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
