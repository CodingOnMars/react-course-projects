// Components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// Items were moved to reducer
// import cartItems from './cart-items';

/*

 NOTES:
 1. Store - stores data (think of state).

 2. Reducer - function that used to update store;

 Two arguments: state, action;

 State - old state/state before update;

 Action - what happened/what update;

 Return updated or old state.

 3. Dispatch method - send actions to the store.

 Actions (objects) - must have type property - what kind of action

 Don't mutate the state - Redux built in on immutability. We need to build a copy and then return it from Reducer.

*/

import { createStore } from 'redux';
import reducer from './reducer';
/* NOTES: 

1. react-redux: Provider - wraps app, Connect - used in components;

2. Each component wrapped into Provider can access store and dispatch methods


*/
import { Provider } from 'react-redux';

/* 
NOTE: when we work with a larger app, we split reducer to separate files and start to combine them

This code stays for reference and it was moved to reducer

Initial store
const initialStore = {
  cart: cartItems,
  total: 12,
  amount: 5,
};

const store = createStore(reducer, initialStore);

*/

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
