import { ROBOTS_FILTERED } from '../actions/action';

const initialStateSearch = {
  searchField: '',
};

export default (state = initialStateSearch, action) => {
  switch (action.type) {
    case ROBOTS_FILTERED:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
