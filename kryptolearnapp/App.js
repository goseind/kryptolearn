import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './screens/start';
import EuclideanAlgorithm from './screens/euclid';
import ExtendedEuclideanAlgorithm from './screens/extendedEuclid';
import ChineseRemainderTheorem from './screens/crt';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            title: 'Willkommen bei Krypto Learn',
            headerStyle: {
              backgroundColor: '#4C5866',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="EuclideanAlgorithm"
          component={EuclideanAlgorithm}
          options={{
            title: 'Euklidischer Algorithmus',
            headerStyle: {
              backgroundColor: '#4C5866',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ExtendedEuclideanAlgorithm"
          component={ExtendedEuclideanAlgorithm}
          options={{
            title: 'Erweiterter Euklidischer Algorithmus',
            headerStyle: {
              backgroundColor: '#4C5866',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ChineseRemainderTheorem"
          component={ChineseRemainderTheorem}
          options={{
            title: 'Chinesischer Restsatz',
            headerStyle: {
              backgroundColor: '#4C5866',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
