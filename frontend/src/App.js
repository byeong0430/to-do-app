import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { handleGetTaskList } from './redux/thunks';

class App extends Component {
  render() {
    return (
      <button onClick={this.props.handleGetTaskList}>
        GET
      </button>
    );
  }
}

const mapDispatchToProps = { handleGetTaskList }

export default connect(null, mapDispatchToProps)(App);
