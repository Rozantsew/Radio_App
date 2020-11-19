import React from 'react';
import {StyleSheet, Image, Button, SafeAreaView, Text, View} from "react-native";
import AppButton from "../components/atoms/Button"

function WelcomeScreen(props) {

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentWrapper}>
        <Image resizeMode="contain" source={require("../assets/images/Hero-icon.png")} style={styles.heroImage} />
        <Text style={styles.mainHeader}>
          Radio którę porawi twój humor, coś dla ciebie!
        </Text>
        <Text style={styles.headerDescription}>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text
          of the printing and typesetting
          industry. Lorem is loren amet. Wertre.
        </Text>
        <View style={styles.buttonContainer}>
          <AppButton title="Słuchaj" background="#8A49CC" color="#fff"/>
          <AppButton title="Więcej . . ." background="#444" color="#fff"/>
        </View>
      </SafeAreaView>
    </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#060A2F',
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 38,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    color: '#fff',
    marginBottom: 0,
  },
  headerDescription: {
    color: '#fff',
    width: '80%',
    fontSize: 16,
    lineHeight: 22,
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 0,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    bottom: 10,
    width: '85%',
    alignSelf: 'center',
  },
  heroImage: {
    // flex: 1,
    width: '100%',
    height: 350,
    borderRadius: 50,
  }

})
