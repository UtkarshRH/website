import { configureStore } from '@reduxjs/toolkit';
import activeComponentReducer from './activeComponentSlice';

const store = configureStore({
  reducer: {
    activeComponent: activeComponentReducer,
  },
});

export default store;