import {ContextCreator} from './MyContext'
import {useContext} from 'react'

//C.js is a consumer so we import the context on line 1 and then we import useContext in line 2 in order to be able to consume it

export default function () {
    //consuming the context 
    const context = useContext(ContextCreator);
    
    //updating the context by using the updater function ---> the updater function is the setState function of the state
    context.updater('I am changing it!')


    //rendering the contextData that now are changed from line 11
    return (
        <h3>{context.contextData}</h3>
    )
}