import React, { Component } from 'react';

export default class CategoryItem extends Component {
  render(){
    const { pk, name } = this.props.category;
    return(
      <li>{ name }</li>
    );
  }
}