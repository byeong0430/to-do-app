import React, { Component } from 'react';

export default class ToDoListItem extends Component {
  renderTime = (startDate, endDate) => {
    const timeConfig = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      hour12: true
    };
    const sDate = new Date(startDate).toLocaleString('en-us', timeConfig);
    const eDate = new Date(endDate).toLocaleString('en-us', timeConfig);

    // e.g. Feb 12, 10 pm - Feb 12, 11 pm
    return `${sDate} - ${eDate}`;
  }

  render(){
    const {
      pk,
      title,
      starred,
      start_date: startDate,
      end_date: endDate
    } = this.props.task;

    return(
      <li>
        <div className='task-wrapper'>
          <h4>
            { title }
            <span>{ starred && (<i class="star material-icons">star</i>)}</span>
          </h4>
          <p>{ this.renderTime(startDate, endDate)}</p>
        </div>
      </li>
    );
  }
}