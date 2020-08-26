import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {createStore, applyMiddleware, AnyAction} from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// create a makeStore function
const makeStore: MakeStore = (context: Context) => createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});