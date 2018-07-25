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

  // renderLeaderBoard = () => {
  //   const leaderBoardMap = this.state.leaderboard.map((player, index) => {
  //     return (
  //       <View key={index}>
  //         <Text>{player.name}</Text>
  //         <Text>{player.score}</Text>
  //       </View>
  //     );
  //   });
  //
  //   return leaderBoardMap;
  // };

  render() {
    console.log("This is the leaderboard!", this.state.leaderboard);

    return (
      <View style={styles.container}>
        <Text style={styles.leaderboardTitle}>LEADERBOARD</Text>
        <FlatList
          data={this.state.leaderboard}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.score}</Text>
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
  leaderboardTitle: {
    fontFamily: "Futura",
    fontSize: 35
  }
});
