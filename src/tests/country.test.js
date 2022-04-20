import countriesReducer, { get } from '../redux/modules/country';

const initialState = [];
describe('test redux code', () => {
  it('empty res', () => {
    expect(countriesReducer(initialState, [])).toEqual([]);
  });

  it('full res', () => {
    expect(countriesReducer(initialState, get(['Brazil', 'Germany', 'Afganistan']))).toEqual(['Brazil', 'Germany', 'Afganistan']);
  });

  it('single item', () => {
    expect(countriesReducer(initialState, get(['Albania']))).toEqual(['Albania']);
  });
});
