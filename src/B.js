import MyContext from './MyContext'
import C from './C'

export default function () {
    

    return (
        <div>
            <C/>
            <MyContext.Provider value='my second value from B.js'>
                <C/>
            </MyContext.Provider>
        </div>

    )
}