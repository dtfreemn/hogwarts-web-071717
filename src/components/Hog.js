import React from 'react';

class Hog extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    }
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  myImage = () => {
    let url = `http://localhost:3000/hog-imgs/${this.props.hogDetails.name.toLowerCase().split(' ').join('_')}.jpg`
    return url
  }

  render() {
    if (!this.state.clicked) {
    return (
      <div className='ui four wide column pigTile' key={this.props.hogDetails.name} onClick={this.handleClick}>
        <h3>{this.props.hogDetails.name}</h3>
        <img src={this.myImage()}/>
      </div>
  )} else {
      return (
        <div className='ui four wide column pigTile' key={this.props.hogDetails.name} onClick={this.handleClick}>
          <div>
            <h3>{this.props.hogDetails.name}</h3>
            <h4>Weight: {this.props.hogDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} tons</h4>
            <h4>Specialty: {this.props.hogDetails['specialty']}</h4>
            <h4 className='achievementText'>Highest Medal Achieved: {this.props.hogDetails['highest medal achieved']}</h4>
          </div>

      </div>
      )
    }
  }
}

// const Hog = (props) => {
//   return (
//       <div className='ui four wide column pigTile' key={props.hogDetails.name}>
//         <h3>{props.hogDetails.name}</h3>
//         <h3>Weight: {props.hogDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} tons</h3>
//       </div>
//   )
// }

export default Hog;