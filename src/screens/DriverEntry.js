import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // Clear previous errors
    setPhoneError('');
    setPasswordError('');

    // Validation checks
    if (!phoneNumber) {
      setPhoneError('Please enter your phone number');
    }
    if (!password) {
      setPasswordError('Please enter your password');
    }

    // If both fields are filled, proceed with submission
    if (phoneNumber && password) {
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);

      // Navigate to the userotp screen
      navigation.navigate('driverotp');
    }
  };

  const onBackPressed = () => {
    // Navigate to the StartScreen
    navigation.navigate('StartScreen');
  };

  const onCreateAccountPressed = () => {
    // Navigate to DriverReg.js for account creation
    navigation.navigate('DriverReg');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Top Image */}
      <Image
        source={require('../assets/car.jpeg')} // Path to your image
        style={styles.image}
      />

      {/* Login Form Container in ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            returnKeyType="next"
          />
          {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="done"
            onSubmitEditing={onSubmitPressed}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          {/* Submit Button */}
          <Button mode="contained" onPress={onSubmitPressed} style={styles.submitButton}>
            Sign In
          </Button>

          {/* Create Account Option */}
          <View style={styles.footer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={onCreateAccountPressed}>
              <Text style={styles.createAccountLink}>Create an Account</Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <Button mode="outlined" onPress={onBackPressed} style={styles.backButton}>
            Back
          </Button>
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
  image: {
    width: '100%',
    height: '60%', // Covers 60% of the screen
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#FFA500', // Orange color for the button
  },
  createAccountLink: {
    color: '#FFA500', // Orange color for the link
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  backButton: {
    marginTop: 10,
    borderColor: '#FFA500', // Orange color outline for the button
  },
});
