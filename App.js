import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/sections/components/loading';
import AppLayout from './src/app-layout';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
