import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  getTest = async () => {
    const instance = axios.create({
      baseURL: 'http://byeongkim.ca:8000/api/',
      timeout: 1000
    });

    try {
      const response = await instance.get('/tasks');
      console.log(response);
    } catch (error) {
      console.log(error);
      console.log(error.request);
      console.log(error.response);
    }
  }

  render() {
    return (
      <button onClick={this.getTest}>GET</button>
    );
  }
}

export default App;
