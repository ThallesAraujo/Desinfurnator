import GetLocation from 'react-native-get-location'
import axios from 'axios'
import utils from '../utils';


export const updateLocationState = (store, property, value) => {
    try {
        const locationState = {
            ...store.state.locationState,
            [property]: value
        }
        store.setState({ ...store.state, locationState })
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentLocation = (store) => {

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
        .then(({ latitude, longitude }) => {
            console.log('Current Location', { latitude, longitude })
            store.actions.updateLocationState('region', {
                latitude,
                longitude,
                latitudeDelta: 0.0095,
                longitudeDelta: 0.0095
            })
            store.actions.getNearbyPlaces({ latitude, longitude })
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

}

export const getNearbyPlaces = (store, location) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1000&key=${utils.GOOGLE_API_KEY}`).then(response => {
        console.log('Nearby Places', response),
            store.actions.updateLocationState('nearbyPlaces', [...response.data.results])
    })
}