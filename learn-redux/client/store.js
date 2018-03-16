import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './recucers/index';

import comments from './data/comments';
import posts from './data/posts';

// ceate an object for the default data
const defaultStore = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultStore);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;