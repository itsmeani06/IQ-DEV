import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../core/theme';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';

export default function StartScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Replace with your background image path
      style={styles.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(230, 247, 255, 0.6)', 'rgba(255, 255, 255, 0.6)']}
        style={styles.overlay}
      >
        {/* Welcome Text */}
        <Animated.View entering={FadeIn.delay(300)} style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.saathiText}>SAATHI</Text>
        </Animated.View>

        {/* User Option */}
        <Animated.View entering={ZoomIn.delay(600)} style={styles.optionBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserEntry')}
            style={styles.touchableOption}
          >
            <Image
              source={require('../assets/user.png')}
              style={styles.logo}
            />
            <Text style={styles.optionText}>Enter as User</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Driver Option */}
        <Animated.View entering={ZoomIn.delay(900)} style={styles.optionBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DriverEntry')}
            style={styles.touchableOption}
          >
            <Image
              source={require('../assets/driver.png')}
              style={styles.logo}
            />
            <Text style={styles.optionText}>Enter as Driver</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Ensures the overlay fills the entire container
    alignItems: 'center',
    paddingTop: 60,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 5,
  },
  saathiText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  optionBox: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  touchableOption: {
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
