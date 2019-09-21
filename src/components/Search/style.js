import { Platform } from 'react-native';

const style = {
        container: {
            position: 'absolute',
            top: Platform.select({ ios: 60, android: 40 }),
            width: '100%'
        },
        textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0

        },
        textInput: {
            height: 45,
            margin: 0,
            borderRadius: 50,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shaddowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            fontSize: 18
        },
        listView: {
            borderWidth: 1,
            borderColor: 'transparent',
            backgroundColor: '#FFF',
            marginHorizontal: 20,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shaddowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 0,
            borderRadius: 20
        },
        description: {},
        row: {}
}

export default style