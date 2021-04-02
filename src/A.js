import MyContext from './MyContext'
import {useContext} from 'react'

export default function () {
    const context = useContext(MyContext);

    return (
        <h3>{context}</h3>
    )
}