import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className='menu section'>
        <div classname='title'>
        <h3>Our menu</h3>
        <div classname='underline'></div>
        </div>
        < Categories />
        < Menu />
      </section>
    </main>

  );
}

export default App;
