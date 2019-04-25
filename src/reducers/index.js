import { combineReducers } from 'redux';
import robots from './robots';
import filteredRobots from './filterRobot';

export default combineReducers({
  robots,
  filteredRobots,
});
