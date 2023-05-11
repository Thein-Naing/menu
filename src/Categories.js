import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (

      <div className='btn-container'>
        <button classname='filter-btn' onClick={(()=> {
          filterItems('all')
        })}>
          all
        </button>

        <button classname='filter-btn' onClick={(()=> {
          filterItems('breakfast')
        })}>
          breakfast
        </button>

      </div>

  )
};

export default Categories;
