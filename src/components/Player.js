import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import Homescreen from "./Homescreen";
import Leaderboard from ".Leaderboard";

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };
  }

  // TODO I know I need to track state of score

  onPressPlayGameHandler = () => {
    this.props.navigator.push({
      screen: "GamePlay"
    });
  };

  playerNameChangedHandler = value => {
    console.log(value);
    this.setState({
      playerName: value
    });
  };

  playerSubmitHandler = () => {
    // Doing this because I don't want to allow user to add an empty playerName
    if (this.state.playerName.trim() === "") {
      return;
    }

    // lets you check the validity of the name inside the playerInput component
    this.props.onPlayerAdded(this.state.playerName);
  };

  // put your name
  // okay button with callback
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textStyle}
          placeholder="player name"
          value={this.state.playerName}
          onChangeText={this.playerNameChangedHandler}
        />

        <Button
          title="Add"
          style={styles.playerButton}
          onPress={this.playerSubmitHandler}
          // Above can be this instead:
          // onPress={() => this.onPlayerAdded(this.state.playerName)}
        />

        <View>
          <TouchableOpacity
            onPress={this.onPressPlayGameHandler}
            style={styles.playGameButton}
          >
            <Text> PLAY GAME </Text>
          </TouchableOpacity>
        </View>

        <GamePlay playerName={this.state.playerName} />
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
  },
  inputContainer: {
    // flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  onPressPlayGameHandler: {
    borderWidth: 1,
    padding: 20,
    borderColor: "black",
    backgroundColor: "#d5dfdc"
  }
});
