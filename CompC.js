import React, {useContext} from 'react';
import {userContext, productContext,productDetailsContext} from './App';

const CompC = () => {
const UserContextValue =  useContext(userContext);
const ProductContextValue =  useContext(productContext);
const productDetailsContextValue = useContext(productDetailsContext);

    return ( 
        <>
          <h1>User Name:- {UserContextValue.UserName}</h1>
          <h1>User Email:- {UserContextValue.Email}</h1>
            <br/>
          <h1>Product Name:- {ProductContextValue.ProductName}</h1>
          <h1>Product Price:- {ProductContextValue.ProductPrice}</h1>
          <h1>Product Code:-{productDetailsContextValue}</h1>


        </>
     );
}
 
export default CompC;