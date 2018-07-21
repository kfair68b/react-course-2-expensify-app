import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined,{type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount',()=>{
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',() => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE', sortBy: 'date' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const myText = 'absqweasdasda';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: myText });
  expect(state.text).toBe(myText);
});

test('should set start date',() => {
  const myDate = moment(1000);
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: myDate });
  expect(state.startDate).toEqual(myDate);
});

test('should set end date',() => {
  const myDate = moment(1000);
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: myDate });
  expect(state.endDate).toEqual(myDate);
});
