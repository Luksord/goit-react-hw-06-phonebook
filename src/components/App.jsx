import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/filterSlice';
import { addContact, deleteContact } from './redux/contactsSlice';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  color: '#010101',
};

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      dispatch(setContacts(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div style={appStyles}>
      <ContactForm addContact={data => dispatch(addContact(data))} />
      <Filter filter={filter} onChangeInput={onChangeInput} />
      <ContactList
        deleteContact={id => dispatch(deleteContact(id))}
        contacts={filterContacts()}
      />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch } from 'react-redux';

// const appStyles = {
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'start',
//   alignItems: 'center',
//   // fontSize: 40,
//   color: '#010101',
// };

// export function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const onChangeInput = event => {
//     const { name, value } = event.currentTarget;
//     if (name === 'filter') {
//       setFilter(value);
//     }
//   };

//   const addContact = ({ name, number }) => {
//     const exists = contacts.some(
//       contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
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
//   };

//   const filterContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   const deleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   return (
//     <div style={{ appStyles }}>
//       <ContactForm addContact={addContact} />
//       <Filter filter={filter} onChangeInput={onChangeInput} />
//       <ContactList deleteContact={deleteContact} contacts={filterContacts()} />
//     </div>
//   );
// }

// export default App;
