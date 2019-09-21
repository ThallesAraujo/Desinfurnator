import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import style from './style';

const Search = (props) =>  {

        const [searchFocused, setSearchFocused] = useState();

        return (
        <GooglePlacesAutocomplete
            placeholder="Digite um local"
            placeholderTextColor="#333"
            onPress={props.onLocationSelected}
            listViewDisplayed={searchFocused}
            query={{
                key: 'AIzaSyBvA3_-a4XwtVKyE7YojCraeplfN_Sbqh0',
                language: 'pt'
            }}
            textInputProps={{
                onFocus: () => { setSearchFocused(true) },
                onBlur: () => { setSearchFocused(false) },
                autoCapitalize: 'none',
                autoCorrect: false
            }}
            styles={style}
            fetchDetails
            enablePoweredByContainer={false}
        />
        )
    
}

export default Search
