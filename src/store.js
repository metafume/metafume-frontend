import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import saga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(saga);

export default store;
