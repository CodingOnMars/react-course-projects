import data from './data';
import Article from './Article';

function App() {
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <div className='btn'>toggle</div>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
