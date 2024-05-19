import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contacts_container}>
      <h2>Contacts</h2>
      <ul className={css.contacts_list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contacts_item} key={id}>
            <p className={css.contacts_name}>{name}</p>
            <p className={css.contacts_number}>{number}</p>
            <button
              onClick={() => dispatch(deleteContact(id))}
              className={css.contacts_btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';

// export function ContactList({ contacts, deleteContact }) {
//   return (
//     <div className={css.contacts_container}>
//       <h2>Contacts</h2>
//       <ul className={css.contacts_list}>
//         {contacts.map(({ id, name, number }) => (
//           <li className={css.contacts_item} key={id}>
//             <p className={css.contacts_name}>{name}</p>
//             <p className={css.contacts_number}>{number}</p>
//             <button
//               onClick={() => {
//                 deleteContact(id);
//               }}
//               className={css.contacts_btn}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
