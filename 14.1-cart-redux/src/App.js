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

// Initial store
const initialStore = {
  count: 0,
};

// Reducer
// NOTE: as a default we should always return old state (state before the update).
// So, in case if none of actions match those that were set up in the app, we could return old state.
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === 'DECREASE') {
    // NOTE: can't do that - we must create a copy
    // state.count = state.count - 1;

    // Now it's OK, we return a new object without mutating old state
    return { count: state.count - 1 };
  }
  return state;
};

const store = createStore(reducer, initialStore);
// NOTE: usually we use uppercase for type value name
store.dispatch({ type: 'DECREASE' });
console.log(store.getState()); // returns initial state, in our example, {count: 0}

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
