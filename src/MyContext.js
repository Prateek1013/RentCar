import React from 'react';
import Data from './Data';
export const MyContext = React.createContext({
  myArray: Data,
  setMyArray: () => {},
});