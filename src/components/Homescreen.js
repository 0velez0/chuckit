import React from "react";
import firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";
import Player from "./Player";
// import Button from "react-native-button";

import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import garbageTruck from "../../assets/images/trash/garbage-truck.png";

export default class Homescreen extends React.Component {
  onPressStartPlayerHandler = () => {
    this.props.navigator.push({
      screen: "Player"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>chuck it!</Text>

        <Image style={{ width: 290, height: 290 }} source={garbageTruck} />

        <TouchableOpacity
        onPress={this.onPressStartPlayerHandler}
        style={styles.addPlayerButton}
        >
        <Text style={styles.buttonText}> ADD PLAYER </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    fontFamily: "Futura",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    fontFamily: "Futura",
    fontSize: 85,
    fontWeight: "800",
    position: "absolute",
    top: 0,
    flex: 1,
    right: 0,
    left: 0,
    textAlign: "center",
    paddingTop: 15
  },
  addPlayerButton: {
    marginTop: 35,
    borderWidth: 1,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderColor: "black",
    backgroundColor: "#090909",
    borderRadius: 5
  },
  buttonText: {
    fontFamily: "Futura",
    color: "white",
    fontSize: 25
  }
  // playGameText: {
  //   fontFamily: "Futura",
  //   fontSize: 10
  // }
});
