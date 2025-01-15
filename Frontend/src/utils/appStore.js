import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import contentReducer from "./contentSlice";
import bookReducer from "./bookSlice";
import postReducer from './postSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenReducer from './tokenSlice';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
  key: 'root',  
  storage,      
};


const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined;
    }
    return combineReducers({
      user: userReducer,
      post: postReducer,
      token: tokenReducer,
      content : contentReducer,
      book : bookReducer,
    })(state, action);
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);


const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(appStore);

export { appStore, persistor };
