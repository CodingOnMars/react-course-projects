import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {/* Manual appraoch
      
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        Breakfast
      </button>
      <button className='filter-btn' onClick={() => filterItems('all')}>
        All
      </button> */}

      {/* Dynamic approach */}
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
