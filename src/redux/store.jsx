import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './reducer';
// import { tasksReducer } from './tasksSlice';
// import { filtersReducer } from './filtersSlice';
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
