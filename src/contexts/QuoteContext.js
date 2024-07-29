import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialQuoteState = {
  quotes: [],
};

// Create context
const QuoteContext = createContext(initialQuoteState);

// Quote reducer
const quoteReducer = (state, action) => {
    console.log(state)
  switch (action.type) {
    case 'ADD_QUOTE':
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
      };
    case 'REMOVE_QUOTE':
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote._id !== action.payload._id),
      };
    case 'UPDATE_QUOTE':
      return {
        ...state,
        quotes: state.quotes.map(quote =>
          quote._id === action.payload._id ? action.payload : quote
        ),
      };
    default:
      return state;
  }
};

// Quote provider component
export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialQuoteState);

  const addQuote = quote => {
    dispatch({ type: 'ADD_QUOTE', payload: quote });
  };

  const removeQuote = quote => {
    dispatch({ type: 'REMOVE_QUOTE', payload: quote });
  };

  const updateQuote = quote => {
    dispatch({ type: 'UPDATE_QUOTE', payload: quote });
  };

  return (
    <QuoteContext.Provider value={{ quote: state.quotes, addQuote, removeQuote, updateQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

// Custom hook to use quote context
export const useQuote = () => {
  return useContext(QuoteContext);
};
