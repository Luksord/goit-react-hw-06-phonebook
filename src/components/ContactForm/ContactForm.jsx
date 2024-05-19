import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <section className={css.form}>
      <h1 className={css.form_title}>Phonebook</h1>
      <form className={css.form_container} onSubmit={handleSubmit}>
        <label className={css.form_label}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          className={css.form_input}
          required
        />
        <label className={css.form_label}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
          pattern="[0-9+\-()\s]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          className={css.form_input}
          required
        />
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/actions';

// export const ContactForm = ({ addContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     // const value = form.elements.name.value
//     dispatch(addContact({ id: nanoid(), name, number }));
//     form.reset();
//   };

//   return (
//     <section className={css.form}>
//       <h1 className={css.form_title}>Phonebook</h1>
//       <form className={css.form_container} onSubmit={handleSubmit}>
//         <label className={css.form_label}>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={event => setName(event.target.value)}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter name"
//           className={css.form_input}
//           required
//         />
//         <label className={css.form_label}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={event => setNumber(event.target.value)}
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           pattern="[0-9+\-()\s]+"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number"
//           className={css.form_input}
//           required
//         />
//         <button className={css.form_btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     </section>
//   );
// };

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
