// import { combineReducers } from 'redux';
import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

// ver. 3 - redux-toolkit
export const contactsReducer = createReducer(filtersInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [filterContacts]: (state, action) => {
    return state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed,
      };
    });
  },
});
// ver. 2 - redux
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addContact':
//       return [...state, action.payload];
//     case 'tasks/deleteContact':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/filterContacts':
//     //   return state.map(task => {
//     //     if (task.id !== action.payload) {
//     //       return task;
//     //     }
//     //     return { ...task, completed: !task.completed };
//     //   });
//     // default:
//     //   return state;
//   }
// };

const filtersInitialState = {
  status: statusFilters.all,
};

// ver. 3 - redux-toolkit
export const filterReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});

// ver. 2 - redux
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
