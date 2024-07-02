import React, { createContext, useReducer } from 'react';

const initialState = {
  products: [],
  likedProducts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'TOGGLE_LIKE_PRODUCT':
      return state.likedProducts.includes(action.payload)
        ? { ...state, likedProducts: state.likedProducts.filter(id => id !== action.payload) }
        : { ...state, likedProducts: [...state.likedProducts, action.payload] };
    default:
      return state;
  }
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
