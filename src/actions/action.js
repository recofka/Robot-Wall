import request from 'superagent';

export const ROBOTS_FETCHED = 'ROBOTS_FETCHED';

const robotsFetched = robots => ({
  type: ROBOTS_FETCHED, robots,
});

export const fetchRobots = () => (dispatch) => {
  request('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      dispatch(robotsFetched(response.body));
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};


// Dispatch onchange searchField
export const ROBOTS_FILTERED = 'ROBOTS_FILTERED';

const filteredRobot = robotFiltered => ({
  type: ROBOTS_FILTERED,
  payload: robotFiltered,
});

export const robotSearch = robotFiltered => (dispatch) => {
  dispatch(filteredRobot(robotFiltered));
};
