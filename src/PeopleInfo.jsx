import React, { Component } from 'react';

class PeopleInfo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const info = this.props.peopleInfo;
    return(
      <div className="user-details">
        <ul>
          <li><h4>Gender: {info.gender}</h4></li>
          <li><h4>Birthday: {info.birth_year}</h4></li>
        </ul>
      </div>
    )
  }
}

export default PeopleInfo;
