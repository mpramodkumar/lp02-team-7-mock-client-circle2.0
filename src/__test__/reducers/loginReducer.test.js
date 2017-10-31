import messages from '../../reducers/loginReducer';

describe('message reducer', () => {
  const initialState = { currentUser: {}, isAdmin: false, message: '' };

  it('handles default state', () => {
    expect(messages(undefined, {})).toEqual(initialState);
  });

  it('handles FLASH_MESSAGE__FAILURE action', () => {
    const message = 'Authentication failed please contact admin!';
    const action = {
      type: 'FLASH_MESSAGE__FAILURE',
      message,
    };
    const expected = {
      currentUser: {},
      isAdmin: false,
      message: 'Authentication failed please contact admin!',
    };
    expect(messages(initialState, action)).toEqual(expected);
  });
});
