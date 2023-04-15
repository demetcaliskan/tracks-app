import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const TrackListNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Account' component={AccountScreen} />
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
      <Tab.Screen name='Track' component={TrackListNavigation} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='Signin' component={SigninScreen} />
        <Stack.Screen name='Home' component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
