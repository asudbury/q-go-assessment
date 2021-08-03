/// deleteItem and toggleComplete added
import reducer, { initialState, addItem, deleteItem, toggleComplete, } from '../todos';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first', completed: false }, { id: 2, content: 'second', completed: false }],
    };
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  /// new code
  it('should delete an item', () => {
    const state = {
      items: [{ id: 1, content: 'first', completed: false }, { id: 2, content: 'second', completed: false }],
    };
    const mockAction = deleteItem(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
  });

  /// new code
  it('complete an item', () => {
    const state = {
      items: [{ id: 1, content: 'first', completed: false }, { id: 2, content: 'second', completed: false }],
    };
    const mockAction = toggleComplete(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[1].completed).toEqual(true);
  });

  /// new code
  it('uncomplete an item', () => {
    const state = {
      items: [{ id: 1, content: 'first', completed: true }, { id: 2, content: 'second', completed: true }],
    };
    const mockAction = toggleComplete(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[1].completed).toEqual(false);
  });
});
