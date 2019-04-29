import { combineReducers } from 'redux';
import robots from './robots';
import filteredRobots from './filterRobot';
import SingleRobot from './singleRobot';

export default combineReducers({
  robots,
  filteredRobots,
  SingleRobot,
});
