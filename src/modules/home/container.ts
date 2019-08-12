import { connect } from 'react-redux';
import HomeComponent from './component';
import { homeClear, getHomeData } from './actions';

interface HomePropsActions {
  homeClear: typeof homeClear,
  getHomeData: typeof getHomeData
}

const mapDispatchToProps: HomePropsActions = {
  homeClear,
  getHomeData
};

export default connect(
  null,
  mapDispatchToProps,
)(HomeComponent);