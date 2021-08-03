import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ItemsFilter = ({ showCompleted, updateShowCompleted }) => {
  return (
    <div>
      <input
        id="show-completed-filter"
        type="checkbox"
        checked={showCompleted}
        onChange={() => updateShowCompleted()}
      />
      <label htmlFor="show-completed-filter" className="label">
        Show completed items
      </label>
    </div>
  );
};

ItemsFilter.propTypes = {
  showCompleted: PropTypes.bool.isRequired,
  updateShowCompleted: PropTypes.func.isRequired,
};

export default ItemsFilter;
