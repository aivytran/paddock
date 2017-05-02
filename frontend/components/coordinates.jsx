import React from 'react';

class Coordinates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coord : ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveCoord(this.state.coord);
    this.setState({
      coords : ""
    });
  }

  render() {
    return (
      <form className="coord-form" onSubmit={this.handleSubmit}>
        <label>Please enter Paddock's coordinates in the format [[x1, y1], [x2, y2], [x3, y3], ...]:
          <br/>
          <br/>
          <input
            className="input"
            ref="coords"
            value={this.state.coord}
            placeholder="[[200, 280], [310, 120], [240, 50], [135, 90]]"
            onChange={this.update('coord')}
            required/>
        </label>
        <br/>
        <br/>
        <button className="create-button">Generate Paddock!</button>
      </form>
    );
  }
};

export default Coordinates;
