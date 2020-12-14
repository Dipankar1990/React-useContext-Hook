import { Component } from "react";
import React from 'react';

  class ClassComp extends React.Component{
    state = {
        fName:"Rahul",
        lName:"Maity"
    };
    render ()
    {
        return(
            <>
                <h1>Hello Dear my first name is{this.state.fName} 
                and my last is{this.state.lName}</h1>
            </>
        )
    }
}
export default ClassComp;
