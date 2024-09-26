import { Component } from 'react';
export default class University extends Component {
  render() {
    const { rank } = this.props;
    return (
      <div className='university-data'>
        <p>University name: {this.props.name}</p>
        <p>University location: {this.props.location}</p>
        <p>University rank: {rank}</p>
      </div>
    );
  }
}
