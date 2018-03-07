import { Map } from 'immutable';

const initialState = Map({});
const actionsMap = {};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
