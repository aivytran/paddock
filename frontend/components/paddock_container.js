import { connect } from 'react-redux';
import Paddock from './paddock';

const mapStateToProps = state => ({
  coord: state.coord.coord,
});

export default connect(
  mapStateToProps,
  null
)(Paddock);
