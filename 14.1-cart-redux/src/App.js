// Components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// Items
import cartItems from './cart-items';

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

// Initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
