import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [products,setProducts]=useState({
    products:[
      {title:"book1",price:35},
      {title:"book2",price:30},
      {title:"book3",price:25},
    ]
  })
  return (
    <div>
<div>{products.products[0].title}</div>
    </div>
  );
}

export default App;
