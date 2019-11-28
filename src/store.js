import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import appReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';


const persistConfig = {
    transforms: [immutableTransform({
        whitelist: ['user'],
    })],
    key: 'root',
    whitelist: ['user'],
    storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, appReducer);

let store = compose(
    applyMiddleware(ReduxThunk),
)(createStore)(persistedReducer);

persistStore(store);

export default store;
