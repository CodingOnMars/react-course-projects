import { connect } from 'react-redux';
// for reference
// import { INCREASE, DECREASE, REMOVE } from '../actions';

// replaced increase/decrease actions with toggle_amount
import { REMOVE, TOGGLE_AMOUNT } from '../actions';

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  // increase,
  // decrease,
  toggle,
}) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => remove()}>
          Remove
        </button>
      </div>
      <div>
        {/* Increase amount */}
        <button className='amount-btn' onClick={() => toggle('increase')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p className='amount'>{amount}</p>
        {/* Decrease amount */}
        <button
          className='amount-btn'
          // If amount = 1, remove item, else decrease amount by 1
          onClick={() => {
            if (amount === 1) {
              return remove();
            } else {
              return toggle('decrease');
            }
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps); // returns unique values for each item in the cart

  const { id, amount } = ownProps;

  // NOTE: we must use a fucntion to dispatch type, so the action will happen only if user click on Remove button. Otherwise action will fire on page load (in our case 3 times, because we have 3 items in the cart)
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),

    // NOTE: replaced increase/decrease actions with toggle_amount
    // increase: () => dispatch({ type: INCREASE, payload: { id } }),
    // decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),

    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
