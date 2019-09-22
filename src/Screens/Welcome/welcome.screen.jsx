import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { Button } from 'react-native-paper'
import styles from './styles'
import { useNavigation } from 'react-navigation-hooks'


const WelcomeScreen = () => {

    const navigator = useNavigation()

    const handleNext = () => {
        navigator.push('Map')
    }

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground source={require('../../Assets/Images/welcomeScreenBackground.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.welcomeLabel}>Seja bem vindo ao Desinfurnator!</Text>
                    <Text style={styles.label}>Aqui te ajudamos a "desinfurnar" de casa! Encontre lugares de interesse e espante o tédio!</Text>
                </View>
                <View style={styles.actions}>
                    <Button color="black" style={styles.button} onPress={() => handleNext()}><Text style={styles.buttonLabel}>Entrar</Text></Button>
                </View>
            </ImageBackground>
        </>
    )

};

export default WelcomeScreen;
