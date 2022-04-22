/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from './mocks/configureStore-mock';
import App from '../App';

describe('Countries snapshot', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={configureStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
