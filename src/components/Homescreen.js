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
  onPressPlayGameHandler = () => {
    this.props.navigator.push({
      screen: "GamePlay"
    });
  };

  componentDidMount() {
    // put fetch data function in here
    const config = {
      apiKey: API_KEY,
      authDomain: "chuckit-a6727.firebaseapp.com",
      databaseURL: "https://chuckit-a6727.firebaseio.com",
      projectId: PROJECT_ID,
      storageBucket: "chuckit-a6727.appspot.com",
      messagingSenderId: "933419915503"
    };
    firebase.initializeApp(config);
    console.log(firebase);
    firebase
      .database()
      .ref("players/001")
      .set({
        name: "Ada",
        score: 3
      })
      .then(() => {
        console.log("I GOT IN THERE!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // const myRequest = new Request('https://chuckit-a6727.firebaseio.com/');
  //
  // const myURL = myRequest.url;

  //   fetch('https://chuckit-a6727.firebaseio.com/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'name',
  //     secondParam: 'value',
  //   }),
  // });

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
