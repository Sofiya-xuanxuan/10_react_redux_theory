import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import fruitReducer from './fruit.redux';
import user from './user.redux'


//参数2是中间件
const store=createStore(combineReducers({fruit:fruitReducer,user}),applyMiddleware(logger,thunk));

export default store;