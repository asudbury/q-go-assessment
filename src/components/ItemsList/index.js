import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, toggleComplete } from '../../logic/todos';
import './styles.css';

export const ItemsList = ({
  showCompleted,
  items,
  onDelete,
  onToggleComplete,
}) => {
  let itemsToDisplay = items.filter((item) => !item.completed);

  if (showCompleted) {
    itemsToDisplay = items;
  }

  return (
    <div>
      {itemsToDisplay.length < 1 && <p>Add some tasks :-)</p>}

      <table class="center">
        <tbody>
          {itemsToDisplay.map((item) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => {
                    onToggleComplete(item.id);
                  }}
                />
              </td>
              <td>{item.content}</td>
              <td>
                <button
                  onClick={() => {
                    onDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return { items: state.todos.items };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteItem(id)),
  onToggleComplete: (id) => dispatch(toggleComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
