import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { useNavigation } from '@react-navigation/native'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => {
  const navigation = useNavigation()
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })
      navigation.navigate('Home')
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up.',
      })
    }
  }
}

const signin = (dispatch) => {
  const navigation = useNavigation()
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/sigin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })
      navigation.navigate('Home')
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in.',
      })
    }
  }
}

const signout = () => {
  return () => {
    // make api req to signout
    // if signout, modify signedIn => false
    // if signout fails, show error message
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
)
