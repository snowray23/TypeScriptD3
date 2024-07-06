//Task 2: Create a functional component named ShoppingCart using the useReducer hook.

import React, { useReducer } from 'react';
import { ShoppingCartItem } from './ShoppingCartItem';
import { shoppingCartReducer} from './CartReducer';

const initialCart: ShoppingCartItem[] = [];


export const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCart);

  
  const addItem = (item: ShoppingCartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

 
  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

 
  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  //Task 3: Implement functionalities to add items, remove items, and calculate the total cost.
  return (
    <div>
      <h1>WK Liquors</h1>
      <button onClick={() => addItem({ id: 1, name: 'Vodka', price: 19.99 })}>Add Grey Goose Vodka</button>
      <button onClick={() => addItem({ id: 2, name: 'Whiskey', price: 14.99 })}>Add Jim Bean</button>
      <button onClick={() => addItem({ id: 3, name: 'Cognac', price: 39.99 })}>Add Hennesy </button>
      <button onClick={() => addItem({ id: 4, name: 'Tequila', price: 14.99 })}>Add Patron</button>
      <button onClick={() => removeItem(1)}>Remove Item1</button>
      <button onClick={() => removeItem(2)}>Remove Item2</button>
      <button onClick={() => removeItem(3)}>Remove Item3</button>
      <button onClick={() => removeItem(4)}>Remove Item4</button>
      <h2>Total: ${calculateTotal()}</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};