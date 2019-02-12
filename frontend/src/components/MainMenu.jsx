import React, { Component } from 'react';
import ToDoList from './mainMenu/ToDoList';

export default class SideBar extends Component {
  render() {
    return (
      <main className='col'>
        <ToDoList />
      </main>
    );
  }
}