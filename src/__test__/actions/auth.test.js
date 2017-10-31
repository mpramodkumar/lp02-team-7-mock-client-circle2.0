import { authSuccess } from '../../actions/auth';

describe('login user actions', () => {
  it('handles the loginSuccess action creator', () => {
    const action = { type: 'AUTH__SUCCESS' };
    expect(authSuccess()).toEqual(action);
  });
});
