import React, { useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemsList from './components/ItemsList';
import ItemsFilter from './components/ItemsFilter';
import './app.css';

const store = configureStore();

function App() {
  const [showCompleted, setShowCompleted] = useState(true);

  function updateShowCompleted() {
    setShowCompleted(!showCompleted);
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ItemCreator />
        <ItemsFilter
          showCompleted={showCompleted}
          updateShowCompleted={updateShowCompleted}
        />
        <ItemsList showCompleted={showCompleted} />
      </div>
    </Provider>
  );
}

export default App;
