import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ title, buttonTitle, handleButton, errorMessage }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label='Password'
        value={password}
        onChangeText={(password) => setPassword(password)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => handleButton({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
  link: {
    color: 'blue',
  },
})

export default AuthForm
