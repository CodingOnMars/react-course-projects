import CartItem from './CartItem';
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';
import { useEffect } from 'react';

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total
            <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch({ type: CLEAR_CART });
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

// NOTE: instead of store we could use any name. Just a showcase that we can use names other than state
const mapStateToProps = (store) => {
  const { cart, total } = store;
  return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
