import { createStore } from 'redux';
import applicationReducer from '../reducers/applicationReducer';
import initialState from '../state/initialState';

const applicationStore = createStore(
  applicationReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default applicationStore;
