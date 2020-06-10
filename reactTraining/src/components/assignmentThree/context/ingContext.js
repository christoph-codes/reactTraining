import React,{useState} from 'react';

export const IngContext = React.createContext();

export const IngProvider = ({children}) => {
const [stuff, setStuff] = useState({
    ingredients: {
      lettuce: 0,
      cheese: 0,
      onions: 0,
      pickles: 0,
      tomatos: 0,
      meat: 0
    },
    totalPrice: 2
  })
    
    return (
        <IngContext.Provider
          value={{
            stuff,
            setStuff
          }}
        >
          {children}
        </IngContext.Provider>
      );
}