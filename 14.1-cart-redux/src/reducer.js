import { DECREASE, INCREASE } from './actions';

const reducer = (state, action) => {
  return state;
};

export default reducer;

//SECTION: THEORY NOTES
// Before refactoring

/* 

NOTES: 

1. If we make a typo in action name when we dispatch actions, nothing will happen;

2. It's better to set up action names as variables so in case we made a typo in action name (i.e. in variable name), we could see an error right away;

3. We use uppercase for variable names that represent actions;

4. Since we have multiple actions, it's better to create a separate file for them and then import actions

const DECREASE = 'DECREASE';
const INCREASE = 'INCREASE';

*/

/* Reducer
// NOTE: as a default we should always return old state (state before the update).
// So, in case if none of actions match those that were set up in the app, we could return old state.
const reducer = (state, action) => {
  console.log({ state, action });
  
  Actions as string example
  if (action.type === 'DECREASE') {
    // NOTE: don't do that - we must create a copy
    // state.count = state.count - 1;

    // Now it's OK, we return a new object without mutating old state
    // return { count: state.count - 1 };

    // Return a new object using spread operator. We use it when initial state has multiple values
    return { ...state, count: state.count - 1 };
  }
  
  // Actions as variables
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  return state;
};

// Initial store
const initialStore = {
  count: 0,
};

const store = createStore(reducer, initialStore);
// NOTE: usually we use uppercase for type value name
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
console.log(store.getState()); // returns initial state, in our example, {count: 0}

*/
