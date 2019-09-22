import React from 'react'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '20%',
        padding: '5%'
    },
    welcomeLabel: {
        fontSize: 35,
        fontFamily: 'Quicksand-Regular',
        color: '#EEB05C',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    label: {
        color: 'white',
        fontFamily: 'FiraSans-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.95)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    button: {
        borderRadius: 50,
        padding: 5,
        fontSize: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'transparent',
        marginTop: 20
    },
    buttonLabel: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: '#FFF'
    },
    actions: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        padding: '5%'
    }
})

export default style