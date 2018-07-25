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

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      playerName: ""
    };
  }

  // TODO I know I need to track state of score

  onPressPlayGameHandler = () => {
    if (this.state.playerName === "") {
      return alert("Oops, must enter a name!");
    } else {
      this.props.navigator.push({
        screen: "GamePlay",
        passProps: { playerName: this.state.playerName }
      });
    }
  };

  playerNameChangedHandler = value => {
    console.log(value);
    this.setState({
      playerName: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textStyle}
          placeholder="player name"
          value={this.state.playerName}
          onChangeText={this.playerNameChangedHandler}
        />

        <View>
          <TouchableOpacity
            onPress={this.onPressPlayGameHandler}
            style={styles.playGameButton}
          >
            <Text> PLAY GAME </Text>
          </TouchableOpacity>
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
