import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Player from "./Player";

import firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";

import _ from "lodash";

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      leaderboard: []
    };
  }
  componentDidMount() {
    // this gets all players from firebase
    firebase
      .database()
      .ref("players")
      .on("value", snapshot => {
        const players = snapshot.val();
        this.setState({
          leaderboard: _.sortBy(players, ["score", "name"]).reverse()
        });

        console.log("These are the players!", players);
        console.log(
          "This is the first player's name",
          Object.values(players)[0].name
        );
        console.log(
          "This is the first player's score",
          Object.values(players)[0].score
        );
      });
  }

  render() {
    console.log("This is the leaderboard!", this.state.leaderboard);

    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>chuck it!</Text>
        <Text style={styles.leaderboardTitle}>LEADERBOARD</Text>
        <View style={styles.playerScore}>
          <Text style={styles.playerTitle}>NAME</Text>
          <Text style={styles.scoreTitle}>SCORE</Text>
        </View>
        <FlatList
          data={this.state.leaderboard}
          renderItem={({ item }) => (
            <View style={styles.playerScore}>
              <Text style={styles.player}>{item.name}</Text>
              <Text style={styles.score}>{item.score}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    fontFamily: "Futura",
    fontSize: 80,
    fontWeight: "800"
  },
  leaderboardTitle: {
    fontFamily: "Futura",
    fontSize: 45
  },
  playerScore: {
    // flex: 1,
    flexDirection: "row",
    // alignSelf: "stretch",
    justifyContent: "space-between"
  },
  player: {
    fontFamily: "Futura",
    justifyContent: "flex-start"
  },
  score: {
    fontFamily: "Futura",
    marginLeft: 80
  },
  playerTitle: {
    fontFamily: "Futura",
    fontWeight: "bold",
    fontSize: 25,
    justifyContent: "flex-start"
  },
  scoreTitle: {
    fontFamily: "Futura",
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 25
  }
});
