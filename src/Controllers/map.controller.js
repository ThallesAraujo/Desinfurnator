import React, {useEffect} from 'react'
import MapScreen from '../Screens/map.screen'
import useGlobal from '../Store'

const MapController = () => {

    const [,actions] = useGlobal()

    useEffect(() => {
        try{
            actions.getCurrentLocation()
            actions.getNearbyPlaces()
        }catch(error){
            const { code, message } = error;
            console.warn(code, message);
        }
    },[])

    return <MapScreen />
}

export default MapController