import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      } else {
        console.log("SignIn or SignUp flow required.");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  return (
    <LinearGradient colors={['#4CAF50', '#ffffff']} style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./../../assets/images/logo2.png')} style={styles.logoImage} />
        <Image source={require('./../../assets/images/login3.png')} style={styles.bgImage} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Ultimate EV Charging Station Finder App</Text>
          <Text style={styles.desc}>
            Find your EV charging station near you, plan trips, and so much more in just one click.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logoImage: {
    width: 400,
    height: 50,
    objectFit: 'contain',
    justifyContent: 'center',
  },
  bgImage: {
    width: "100%",
    height: 500,
    objectFit: 'contain',
    padding:10,
  },
  textContainer: {
    alignitems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
  },
  desc: {
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0BDA51',
    padding: 16,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 99,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
