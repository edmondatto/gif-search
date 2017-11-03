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
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=pEC4gYDzDgd16U9oZVONW9uY6JVqAblU&limit=25&rating=G')
      .then(response => {
        this.setState({
          gifs: response.data.data,
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
