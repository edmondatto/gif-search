import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';
export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
    }
  }

  componentDidMount() {


  }

  performSearch = (query) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=pEC4gYDzDgd16U9oZVONW9uY6JVqAblU&q=${query}&limit=24&offset=0&rating=G&lang=en`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  };

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
