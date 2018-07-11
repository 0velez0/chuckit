import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default class Player extends React.Component {
  state = {
    playerName: ''
  }

  playerNameChangedHandler = (value) => {
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 1
  },

});
