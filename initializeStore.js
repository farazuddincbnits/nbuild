// import { createStore, applyMiddleware, compose } from 'redux';
// import { fromJS } from 'immutable';
// import createSagaMiddleware from 'redux-saga';
// import createReducer from './reducers';
// import initialState from './redux-initial-store';
// import sagas from './Middleware';
// // import { AsyncStorage } from 'react-native';
// import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage'
// import immutableTransform from 'redux-persist-transform-immutable';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function configStore() {
//   const preloadedState = fromJS(initialState);
//   const persistConfig = {
//     transforms: [immutableTransform()],
//     key: 'weclikStorage',
//     storage: AsyncStorage,
//   }
//   const composeEnhancers =
//     process.env.NODE_ENV === 'production'
//       ? compose
//       : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const saga = createSagaMiddleware();
//   const middlewares = [saga];
//   const persistedReducer = persistReducer(persistConfig, createReducer())
//   // if (__DEV__) {
//   //   middlewares.push(createLogger());
//   // }
//   const store = createStore(
//     persistedReducer,
//     undefined,
//     composeEnhancers(applyMiddleware(...middlewares)),
//   );
//   const persistor = persistStore(store);
//   saga.run(sagas);
//   return { store, persistor };   
// }
import { createSlice, configureStore } from '@reduxjs/toolkit';
import createReducer from './reducers/index'
// import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import sagas from './Middleware/index';

const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
  key: 'weclikStorage',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig, createReducer());


export const store = configureStore({
  reducer: persistedReducer,
  // undefined,
  // middleware: [sagaMiddleware]
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
})

sagaMiddleware.run(sagas);


export const persistor = persistStore(store);




// sagaMiddleware.run(mySaga)




// export default store;
