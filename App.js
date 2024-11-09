import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  UserEntry,
  userotp,
  DriverEntry,
  DriverReg,
  driverotp
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="UserEntry" component={UserEntry} />
          <Stack.Screen name="userotp" component={userotp} />
          <Stack.Screen name="driverotp" component={driverotp} />
          <Stack.Screen name="DriverEntry" component={DriverEntry} />
          <Stack.Screen name="DriverReg" component={DriverReg} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
