import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// ver. 3 - redux-toolkit
export const addContact = createAction('tasks/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
}www);
// ver. 2 - redux
// export const addContact = (name, number) => {
//   return {
//     type: 'tasks/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
// ver. 1 - JSX
// const addContact = ({ name, number }) => {
//     const exists = contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//     );
//     if (exists) {
//       alert(`${name} is already in contacts`);
//     } else {
//       const newContact = {
//         id: nanoid(),
//         name: name,
//         number: number,
//       };
//       setContacts(prevContacts => [...prevContacts, newContact]);
//     }
// };

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const deleteContact = id => {
  setContacts(
    prevContacts => prevContacts.filter(contact => contact.id !== id) // <-- prevContacts.filter(...) tworzy nową tablicę kontaktów, w której każdy kontakt jest filtrowany na podstawie jego id. Warunek 'contact.id !== id' oznacza, że tylko kontakty których id nie jest równy id przekazanemu do usunięcia, zostaną zachowane.
  );
};
// ver. 1 - Class Components
// deleteContact = id => {
//   const { contacts } = this.state;
//   const filtered = contacts.filter(item => item.id !== id);
//   this.setState({ contacts: filtered });
// };
// ver. 2
// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id)
//   }));
// };

const deleteContact = () => dispatch(deleteContact(task.id));

export const deleteContact = createAction('tasks/deleteContact');

export const filterContacts = createAction('tasks/filterContacts');

// export const filterContacts = () => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
