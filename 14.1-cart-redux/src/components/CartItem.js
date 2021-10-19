import { connect } from 'react-redux';
import { INCREASE, DECREASE, REMOVE } from '../actions';

const CartItem = ({ img, title, price, amount, remove }) => {
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
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
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

  const { id } = ownProps;

  // NOTE: we must use a fucntion to dispatch type, so the action will happen only if user click on Remove button. Otherwise action will fire on page load (in our case 3 times, because we have 3 items in the cart)
  return { remove: () => dispatch({ type: REMOVE, payload: { id } }) };
};

export default connect(null, mapDispatchToProps)(CartItem);
