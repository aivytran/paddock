import React from 'react';
// import Regex from 'regex';

class Paddock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let coord = this.props.coord
    let parsedCoord = []
    if (coord) {
      let strings = coord.split(",")
      strings.forEach(str => parsedCoord.push(/[-]{0,1}[\d.]*[\d]+/g.exec(str)[0]))
    }
    console.log(parsedCoord);
    if (parsedCoord.length % 2 === 1) {
      return (
        <div>
          <p>Invalid input! Please put in another coordinates</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>The paddlock's area is</p>
        </div>
      );
    }
  }
};

export default Paddock;
