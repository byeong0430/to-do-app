import React, { Component } from 'react';
import SearchBar from './sideBar/SearchBar';
import Category from './sideBar/Category';


export default class SideBar extends Component {
  render() {
    return (
      <aside className='col'>
        <SearchBar />
        <Category />
      </aside>
    );
  }
}