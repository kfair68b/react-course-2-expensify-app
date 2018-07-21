import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense with valid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  }
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should add an expense',() => {
  const newExpense = {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses,newExpense]);
});

test('should edit expenes',() => {
  const updatedExpense = {
    description: 'Gummy Bears',
    amount: 1195,
  };
  const newExpense = {
    ...expenses[0],
    description: 'Gummy Bears',
    amount: 1195
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: updatedExpense
  }
  const state = expensesReducer(expenses,action);
  expect(state[0]).toEqual(newExpense);
});

test('should not edit expenes',() => {
  const updatedExpense = {
    description: 'Gummy Bears',
    amount: 1195,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    expense: updatedExpense
  }
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should not edit expenes if not found');