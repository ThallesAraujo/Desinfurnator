import React from 'react';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { View } from 'react-native';
import Search from '../Search';
import { useState, useEffect, useRef } from 'react'
import GetLocation from 'react-native-get-location'
import axios from 'axios'
import utils from '../../utils';

const Map = () => {

    const [region, setRegion] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [nearbyPlaces, setNearbyPlaces] = useState([]);
    const mapView = useRef(null)

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log('Current Location', location)
                setRegion({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0095,
                    longitudeDelta: 0.0095
                })
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=1000&key=${utils.GOOGLE_API_KEY}`).then(response => {
                    console.log('Nearby Places', response),
                    setNearbyPlaces([...response.data.results])
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }, [])

    const handleLocationSelected = (data, details) => {
        const place = {
            location: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
            },
            name: data.structured_formatting.main_text,
            rating: details.rating
        }
        console.log('Selected Location', { details, data })
        setMarkers([place]);
        console.log('mapView',mapView)
        mapView.current.animateToCoordinate(place.location)
    }

    const handlePlacePicked = (props) => {
        console.log('picked a place', props.nativeEvent)
        setMarkers([{location: props.nativeEvent.coordinate, name:'Local Selecionado'}])
                
    }

    
        return (
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
                    region={region}
                    ref={mapView}
                    onPress={e => handlePlacePicked(e)}>
                    {markers? markers.map(marker => (
                        <Marker
                            coordinate={marker.location}
                            title={marker.name}
                        />
                    )): <></>}
                    {nearbyPlaces.map(place => (
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
        )
    
}

export default Map
