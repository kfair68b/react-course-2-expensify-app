import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change',() => {
  const myValue = 'rent'
  wrapper.find('input').first().simulate('change', { target: { value: myValue } });;
  expect(setTextFilter).toHaveBeenLastCalledWith(myValue);
});

test('should handle sort by date',() => {
  const myValue = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').first().simulate('change', { target: { value: myValue } });;
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount',() => {
  const myValue = 'amount';
  wrapper.find('select').first().simulate('change', { target: { value: myValue } });;
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const myStartDate = moment(0).add(4, 'years');
  const myEndDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: myStartDate, endDate: myEndDate });
  expect(setStartDate).toHaveBeenLastCalledWith(myStartDate);
  expect(setEndDate).toHaveBeenLastCalledWith(myEndDate);
});

test('should handle date focus change', () => {
  const myCalendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(myCalendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(myCalendarFocused);
});
