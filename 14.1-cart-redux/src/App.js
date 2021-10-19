// Components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// Items
import cartItems from './cart-items';

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
