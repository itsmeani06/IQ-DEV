import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';
import { theme } from '../core/theme';

export default function OtpVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(true);
  const refs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) refs.current[index + 1].focus();
  };

  const onVerifyPressed = () => {
    const otpString = otp.join('');
    if (otpString.length === 4 && otpString === '1234') {
      navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
    } else {
      setIsValid(false);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['#e6f7ff', '#ffffff']} style={styles.container}>
      <Animated.View entering={FadeIn.delay(300)} style={styles.otpBoxContainer}>
        <Text style={styles.instructionText}>Please enter OTP received to the phone number</Text>
        <View style={styles.otpContainer}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              style={[styles.otpBox, !isValid && otp[index] === '' ? styles.error : null]}
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(text) => handleOtpChange(text, index)}
              ref={(ref) => (refs.current[index] = ref)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <Animated.View entering={ZoomIn.delay(600)}>
          <TouchableOpacity onPress={onVerifyPressed} style={styles.verifyButtonContainer}>
            <Button mode="contained" onPress={onVerifyPressed} style={styles.verifyButton}>
              Verify
            </Button>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      <Text style={styles.footerText}>
        If you didn't receive the OTP,{' '}
        <Text style={styles.resendText}>Resend OTP</Text>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  otpBoxContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.primary,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  otpBox: {
    width: 60,
    height: 60,
    borderColor: '#333',
    backgroundColor: '#444',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginHorizontal: 5,
  },
  error: {
    borderColor: 'red',
  },
  verifyButtonContainer: {
    alignItems: 'center',
  },
  verifyButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 10,
    color: theme.colors.secondary,
  },
  resendText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
