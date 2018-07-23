import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = 'ASDDASDSDASD';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({},action);
  expect(state.uid).toBe(uid);
});

test('should clear uid on logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'anything'},action);
  expect(state.uid).toBeUndefined();
});
