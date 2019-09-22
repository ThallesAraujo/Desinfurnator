import { createAppContainer } from 'react-navigation'
import { createStackNavigator,  } from 'react-navigation-stack'
import WelcomeScreen from '../Screens/Welcome/welcome.screen'
import MapController from '../Controllers/map.controller'

const AppNavigator = createStackNavigator({

    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
          }
    },
    Map: {
        screen: MapController,
        navigationOptions: {
            header: null
          }
    }

})
  
export default createAppContainer(AppNavigator)