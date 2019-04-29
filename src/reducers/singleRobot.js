import { SINGLE_ROBOT_FETCHED } from '../actions/action';

export default (state = {}, action) => {
  switch (action.type) {
    case SINGLE_ROBOT_FETCHED:
      return { ...action.SingleRobot };
    default:
      return state;
  }
};
