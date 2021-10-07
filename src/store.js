import reducer from './reducers/index';
import {createStore,applyMiddleware} from 'redux'
import ThunkMiddleWare from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(ThunkMiddleWare));

export default store;