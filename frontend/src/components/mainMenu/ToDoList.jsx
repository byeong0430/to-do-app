import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';
import { connect } from 'react-redux';
import { handleGetTaskList } from '../../redux/thunks';

class ToDoList extends Component {
  componentDidMount = async () => {
    await this.props.handleGetTaskList();
  }

  render(){
    const { tasks } = this.props;
    return(
      <>
        <h3>Tasks</h3>
        <ul className='task-list'>
          {
            tasks && tasks.data.map((task, i) => (
              <ToDoListItem
                key={`task_${i}`}
                task={task}
              />
            ))
          }
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = { handleGetTaskList };
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);