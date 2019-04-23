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
    .catch(console.error);
};
