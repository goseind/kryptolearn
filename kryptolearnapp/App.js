import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './screens/start';
import EuclideanAlgorithm from './screens/ggt-euclid';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            title: 'Willkommen bei Krypto Learn', //Set Header Title
            headerStyle: {
              backgroundColor: '#4C5866', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="EuclideanAlgorithm"
          component={EuclideanAlgorithm}
          options={{
            title: 'Euklidischer Algorithmus', //Set Header Title
            headerStyle: {
              backgroundColor: '#4C5866', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;