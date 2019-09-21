import React from 'react';
import {StatusBar} from 'react-native'
import Map from './components/Map';

// import { Container } from './styles';

const App = () => (
    <>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <Map />
    </>
)

export default App;
