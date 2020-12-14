import React, { createContext } from 'react';
import CompC from './CompC';
import ClassComp from './ClassComp';

export const userContext = React.createContext();
export const productContext = React.createContext();
export const productDetailsContext = createContext();
const App = () => {
  return ( 
    <>
    <userContext.Provider value={{UserName:'Dipankar Maity', Email:'somethin@gmail.com' }}>
        <productContext.Provider value={{ProductName:"Amway",ProductPrice:50}}>
          <productDetailsContext.Provider value="productCode:1">
            <CompC/>
          </productDetailsContext.Provider>           
        </productContext.Provider> 
    </userContext.Provider>
    <ClassComp/>
    </>
   );
}
 
export default App;