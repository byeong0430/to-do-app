import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar';
import MainMenu from './components/MainMenu';

import { handleGetTaskList } from './redux/thunks';

class App extends Component {
  render() {
    return (
      <>
      <div className='container'>
        <div className='row'>
          <SideBar/>
          <MainMenu/>
        </div>
      </div>
      <button onClick={this.props.handleGetTaskList}>
        GET
      </button>
      </>
    );
  }
}

const mapDispatchToProps = { handleGetTaskList }

export default connect(null, mapDispatchToProps)(App);
