import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";

import _ from "lodash";

export default class Leaderboard extends React.Component {
  state = {
    leaderboard: []
  };

  componentDidMount() {
    // const config = {
    //   apiKey: API_KEY,
    //   authDomain: "chuckit-a6727.firebaseapp.com",
    //   databaseURL: "https://chuckit-a6727.firebaseio.com",
    //   projectId: PROJECT_ID,
    //   storageBucket: "chuckit-a6727.appspot.com",
    //   messagingSenderId: "933419915503"
    // };
    // firebase.initializeApp(config);
    // get all players from firebase
    firebase
      .database()
      .ref("players")
      .on("value", snapshot => {
        const players = snapshot.val();
        this.setState({
          leaderboard: _.sortBy(players, ["score", "name"]).reverse()
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>LEADERBOARD {this.state.leaderboard.length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 1
  }
});
