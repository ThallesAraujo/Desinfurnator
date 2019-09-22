import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native'
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper'
import styles from './styles';
import utils from '../../utils';
import axios from 'axios'

const Search = (props) => {

    const [places, setPlaces] = useState([]);

    const onPlaceSelected = (place) => {
        setPlaces([])
        props.onLocationSelected(place)
    }

    const searchPlace = (text) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&key=${utils.GOOGLE_API_KEY}`).then(response => {
            console.log('Search', response),
                setPlaces([...response.data.results.splice(0, 5)])
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholderTextColor="#EEB05C"
                placeholder='Digite um local'
                onChangeText={text => searchPlace(text)}
            />
            {places.length ? (
                <View style={styles.listView}>
                    <View style={styles.alignToLeft}>
                        {places.map(place => (<Button color="black" type="text" style={styles.row} onPress={() => onPlaceSelected(place)}><Text style={styles.rowLabel}>{place.name}</Text></Button>))}
                    </View>
                </View>
            ) : <></>}
        </View>

    )

}

export default Search
