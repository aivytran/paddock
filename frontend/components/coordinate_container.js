import { connect } from 'react-redux';
import Coordinates from './coordinates';

// Actions
import { receiveCoord } from '../actions/coord_actions';


const mapDispatchToProps = dispatch => ({
  receiveCoord: coord => dispatch(receiveCoord(coord))
});

export default connect(
  null,
  mapDispatchToProps
)(Coordinates);
