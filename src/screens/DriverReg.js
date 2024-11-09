import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Image, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

// Dummy theme replacement for missing theme import
const theme = {
  colors: {
    primary: '#FFA500', // Orange color
    secondary: '#008CBA', // Blue color
  },
};

export default function DriverEntry({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');  // Added phone state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState(''); // Added phone error state
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSignUpPressed = () => {
    // Dummy validation logic
    if (!name || !phone || !email || !password) {
      setNameError('Please enter your name');
      setPhoneError('Please enter your phone number');  // Validation for phone number
      setEmailError('Please enter your email');
      setPasswordError('Please enter your password');
      return;
    }

    // Navigate to driverotp
    navigation.reset({
      index: 0,
      routes: [{ name: 'driverotp' }], 
    });
  };

  useEffect(() => {
    console.log('DriverEntry.js is loaded');
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Top Image */}
      <Image
        source={require('../assets/car.jpeg')} // Ensure this path is correct
        style={styles.image}
      />

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={text => setPhone(text)}
            keyboardType="phone-pad"
          />
          {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <Button mode="contained" onPress={onSignUpPressed} style={styles.signUpButton}>
            Sign Up
          </Button>

          <View style={styles.footer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('DriverEntry')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollView: {
    flexGrow: 1, 
    paddingBottom: 20, // Padding to prevent bottom content from being cut off
  },
  image: {
    width: '100%',
    height: '60%', // Covers 60% of the screen, like in LoginScreen
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  signUpButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  loginLink: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
