import React from "react";
// import firebase from "firebase";

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
  onPressPlayGameHandler = () => {
    this.props.navigator.push({
      screen: "GamePlay"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>chuck it!</Text>

        <Image style={{ width: 290, height: 290 }} source={garbageTruck} />

        <TouchableOpacity
          onPress={this.onPressPlayGameHandler}
          style={styles.playGameButton}
        >
          <Text> Play Game </Text>
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
  playGameButton: {
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
