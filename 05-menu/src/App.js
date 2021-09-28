import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// NOTES:
// We want to get an array with unique categories
// 1. First, we use map() method to get an array with categories
// 2. Then we use new Set() to get unique values
// 3. Since set returns an object, we wrap it to an array and since we wanted to have 'all' category, we add it in the beginning and then use spread operator to get remaining categories
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// console.log(allCategories); // returns an array of 4 items with 'all' in the beginning

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
