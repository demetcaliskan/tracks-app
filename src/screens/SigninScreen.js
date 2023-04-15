import React, { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import { StyleSheet, View } from 'react-native'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        title='Sign In to Your Account'
        handleButton={signin}
        errorMessage={state?.errorMessage}
        buttonTitle={'Sign In'}
      />
      <NavLink
        text={"Don't have an account? Sign up instead."}
        routeName={'Signup'}
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

export default SigninScreen
