import { addExpense, EditExpense, RemoveExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense( {id: '123abc'} );
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
  
});

test('should set up edit expense action object', () => {
  const action = editExpense( '123abc', { amount: 123 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      amount: 123
    }
  })
});

test('should set up add expense action object with defined values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: "This was last month's rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with default values', () => {
  const expenseData = {
    
  }
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});