export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';

/// new code
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';

/// new code
export const TOGGLE_COMPLETE = 'qgo/assessment/TOGGLE_COMPLETE';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

/// new code
export const deleteItem = (id) => {
  return { type: DELETE_ITEM, id };
};

/// new code
export const toggleComplete = (id) => {
  return { type: TOGGLE_COMPLETE, id };
};

/// completed attribute added
export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: true },
  ],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    /// new code
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((el) => el.id !== action.id)],
      };

    /// new code
    case TOGGLE_COMPLETE:
      const todo = state.items.find((t) => t.id === action.id);
      todo.completed = !todo.completed;
      return { ...state, items: [...state.items] };
    default:
      return state;
  }
};

export default reducer;
