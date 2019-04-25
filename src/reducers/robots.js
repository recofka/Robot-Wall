import { ROBOTS_FETCHED } from '../actions/action';

export default (state = [], action) => {
  switch (action.type) {
    case ROBOTS_FETCHED:
      return [...action.robots];
    default:
      return state;
  }
};
