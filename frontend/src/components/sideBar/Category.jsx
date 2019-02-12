import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';
import { handleGetCatList } from '../../redux/thunks';

class Category extends Component {
  componentDidMount = async () => {
    await this.props.handleGetCatList();
  }

  render(){
    const { categories } = this.props;
    return (
      <>
        <h3>Categories</h3>
        <ul className='category-list'>
          {
            categories && categories.data.map((category, i) => (
              <CategoryItem
                key={`cat_${i}`}
                category={category}
              />
            ))
          }
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ category }) => category;
const mapDispatchToProps = { handleGetCatList };
export default connect(mapStateToProps, mapDispatchToProps)(Category);