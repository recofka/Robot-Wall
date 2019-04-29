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


// Fetch single Robot
export const SINGLE_ROBOT_FETCHED = 'SINGLE_ROBOT_FETCHED';

const robotSingleFetched = SingleRobot => ({
  type: SINGLE_ROBOT_FETCHED, SingleRobot,
});

export const fetchSingleRobot = id => (dispatch) => {
  request(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      dispatch(robotSingleFetched(response.body));
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};
