import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from './mocks/configureStore-mock';
import Navigation from '../components/Navigator';

test('router test', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
