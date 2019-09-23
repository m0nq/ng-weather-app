import { initialState, zipCodeReducer } from './zip-codes.reducer';

describe('ZipCodes Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = zipCodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
