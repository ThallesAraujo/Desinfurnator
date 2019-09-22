import * as React from 'react'
import Navigator from './Navigator'

const App = () => {
    console.disableYellowBox = true
    return <Navigator keyboardShouldPersistTaps='always' />
}

export default App;
