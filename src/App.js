import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
     <h3>Our menu</h3>
    </main>

  );
}

export default App;
