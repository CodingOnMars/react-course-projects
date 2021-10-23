import { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

// If there is a value in sessionStorage, use it
// If not, use light-theme as default value
const getStorageTheme = () => {
  let theme = 'light-theme';

  if (sessionStorage.getItem('theme')) {
    theme = sessionStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    // console.log(document.documentElement); // returns the whole html tag
    document.documentElement.className = theme;
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <div className='btn' onClick={toggleTheme}>
            toggle
          </div>
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
