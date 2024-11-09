import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmitPressed = () => {
    // Handle the submit action here, such as form validation and API calls.
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={require('../assets/car.jpeg')} // Path to your image
        style={styles.image}
      />

      {/* Login Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your phone number for verification"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <Button mode="contained" onPress={onSubmitPressed} style={styles.submitButton}>
          Submit
        </Button>
      </View>
    </View>
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
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#FFA500', // Orange color for the button
  },
});
