import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    // Handle the submit action here, such as form validation and API calls.
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);

    // Navigate to the userotp screen
    navigation.navigate('userotp');
  };

  const onBackPressed = () => {
    // Navigate to the StartScreen
    navigation.navigate('StartScreen');
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

      {/* Login Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
          returnKeyType="next"
          onSubmitEditing={() => phoneInputRef.current.focus()} // Moves to phone number field on submit
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your phone number for verification"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          returnKeyType="done"
          onSubmitEditing={onSubmitPressed} // Calls submit when done is pressed
        />

        <Button mode="contained" onPress={onSubmitPressed} style={styles.submitButton}>
          Submit
        </Button>

        {/* Back Button */}
        <Button mode="outlined" onPress={onBackPressed} style={styles.backButton} labelStyle={{ color: '#FFA500' }} >
          Back
        </Button>
      </View>
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
  backButton: {
    marginTop: 10,
    borderColor: '#FFA500', // Orange color outline for the button
    color: '#FFA500',
  },
});
