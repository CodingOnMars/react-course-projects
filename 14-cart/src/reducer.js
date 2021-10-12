const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  // NOTE: the following functionality was replaced with TOGGLE_AMOUNT in order to avoid repeating code
  /* If item id match, increase amount by 1
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  */

  /* If item id match, decrease amount by 1. If amount is 0, remove item
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  */

  // Display total price and number of items in the cart
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        // console.log(price, amount); // return item price and current amount

        // Calculate total price
        const itemTotal = price * amount;
        // Display total price of all items;
        cartTotal.total += itemTotal;
        // Display current number of items in cart icon
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    // Limit amount of numbers returned after dot to 2 digits
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  // Increase or decrease values
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'increase') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'decrease') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: tempCart };
  }
  // Display an error if there is no matching type
  throw new Error('No matching action type');
};

export default reducer;
