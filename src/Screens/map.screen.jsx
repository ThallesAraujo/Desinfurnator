import React from 'react';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { View, StatusBar } from 'react-native';
import Search from './Search';
import { useRef } from 'react'
import useGlobal from '../Store';

const MapScreen = () => {

    const [state, actions] = useGlobal()
    const mapView = useRef(null)

    const handleLocationSelected = (place) => {
        const placeFormatted = {
            location: {
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng
            },
            name: place.name,
            rating: place.rating
        }
        console.log('Selected Location', placeFormatted.location.latitude, placeFormatted.location.longitude)
        console.log('mapView', mapView)
        mapView.current.animateToCoordinate(placeFormatted.location, 1)
        actions.updateLocationState('markers', [placeFormatted]);
    }

    const handlePlacePicked = (props) => {
        console.log('picked a place', props.nativeEvent)
        actions.updateLocationState('markers', [{ location: props.nativeEvent.coordinate, name: 'Local Selecionado' }])
    }


    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    showsUserLocation
                    loadingEnabled
                    followsUserLocation
                    showsMyLocationButton={false}
                    showsCompass={false}
                    zoomEnabled={true}
                    moveOnMarkerPress
                    initialRegion={state.locationState.region}
                    ref={mapView}
                    onPress={e => handlePlacePicked(e)}>
                    {state.locationState.markers ? state.locationState.markers.map(marker => (
                        <Marker
                            coordinate={marker.location}
                            title={marker.name}
                        />
                    )) : <></>}
                    {state.locationState.nearbyPlaces.map(place => (
                        <Marker
                            coordinate={{ latitude: place.geometry.location.lat, longitude: place.geometry.location.lng }}
                            title={place.name}
                            description={`Nota: ${place.rating}`}
                            pinColor="orange"
                        />
                    ))}
                </MapView>
                <Search onLocationSelected={handleLocationSelected} />
            </View>
        </>
    )

}

export default MapScreen
