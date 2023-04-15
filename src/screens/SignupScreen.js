import React, { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { StyleSheet, View } from 'react-native'

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        title='Sign Up for Tracker'
        handleButton={signup}
        errorMessage={state?.errorMessage}
        buttonTitle={'Sign Up'}
      />
      <NavLink
        text={'Already have an account? Sign in instead.'}
        routeName={'Signin'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
})

export default SignupScreen
