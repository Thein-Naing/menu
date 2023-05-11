import React from 'react';

// {items} meaning we will render new values from this argument.
const Menu = ({items}) => {
return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id, title, img, desc} = menuItem;

    })}

    </div>
)};

export default Menu;
