import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveTaskList } from '../../redux/actions/taskActions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Make a GET request
    // this.props.saveTaskList(this.state.value);
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  saveTaskList: dispatch(saveTaskList)
};
export default connect(null, mapDispatchToProps)(SearchBar);