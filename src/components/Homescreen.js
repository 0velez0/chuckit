import React from "react";
import firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";
import Player from "./Player";

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
          <Text> ADD PLAYER </Text>
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
    borderWidth: 1,
    padding: 20,
    borderColor: "black",
    backgroundColor: "#d5dfdc"
  }
  // playGameText: {
  //   fontFamily: "Futura",
  //   fontSize: 10
  // }
});
