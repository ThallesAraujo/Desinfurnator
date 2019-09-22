import { Platform } from 'react-native';

const style = {

    container: {
        position: 'absolute',
        top: Platform.select({ ios: 60, android: 40 }),
        width: '100%'
    },
    textInput: {
        height: 45,
        margin: 0,
        borderRadius: 50,
        backgroundColor: '#FFF',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 15,
        color: '#EEB05C',
        marginRight: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shaddowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        fontSize: 18
    },
    listView: {
        width: '90%',
        textAlign: 'left',
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        elevation: 1,
        shadowColor: '#FFF',
        shadowOpacity: 0.1,
        shaddowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        marginTop: 50,
        position: 'absolute',
        zIndex: 500,
        borderRadius: 20
    },
    row: {
        color: 'black',
    },
    rowLabel: {
        paddingLeft: '1%'
    },
}

export default style