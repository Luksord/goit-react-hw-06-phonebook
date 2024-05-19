import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter_container}>
      <label className={css.filter_label}>Find contacts by name </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={css.filter_input}
        placeholder="Enter contact"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';
// import css from '../Filter/Filter.module.css';

// export const Filter = ({ filter, onChangeInput }) => {
//   return (
//     <div className={css.filter_container}>
//       <label className={css.filter_label}>Find contacts by name </label>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={onChangeInput}
//         className={css.filter_input}
//         placeholder="Enter contact"
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
// };
