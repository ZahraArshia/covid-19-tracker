/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from './mocks/configureStore-mock';
import Countries, { Country } from '../components/HomePage';

describe('Home page test', () => {
  const id = 'iran';
  const name = 'Iran';
  const today_confirmed = 100;
  test('country cards test', () => {
    const tree = renderer
      .create(
        <Provider store={configureStore}>
          <BrowserRouter>
            <Country id={id} name={name} today_confirmed={today_confirmed} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('countries container test', () => {
    const tree = renderer
      .create(
        <Provider store={configureStore}>
          <BrowserRouter>
            <Countries />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
