import React from 'react'
import {useState} from 'react'

//!! we are exporting 2 different functions here so we are not using 'export default..'
export const ContextCreator = React.createContext();

/* in order to pass a state with context we have to create a function that returns a component which is a provider.  
As a value we pass an object that has 2 properties. one for the state variable and one for the serState function
In order for all elements that we wrap with our component (all the children)to be able to get these values we put {props.children}*/
export const StateHolder = function (props) {
    const [state, setState] = useState('I am state!')

    return (
        <ContextCreator.Provider value = {{contextData: state, updater: setState}}>
            {props.children}
        </ContextCreator.Provider>
    )
}