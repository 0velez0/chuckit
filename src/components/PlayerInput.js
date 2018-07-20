import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Button } from "react-native";


class PlayerInput extends Component {
  state = {
    playerName: ""
  };

  playerNameChangedHandler = value => {
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

  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="An awesome player"
        value={this.state.playerName}
        onChangeText={this.playerNameChangedHandler}
        style={styles.playerInput}
        />

        <Button
        title="Add"
        style={styles.playerButton}
        onPress={this.playerSubmitHandler}
        // Above can be this instead:
        // onPress={() => this.onPlayerAdded(this.state.playerName)}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  playerInput: {
    width: "80%"
  },
  playerButton: {
    width: "20%"
  }
});

export default PlayerInput;
