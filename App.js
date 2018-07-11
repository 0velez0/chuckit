import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    playerName: ''
  }

  playerNameChangedHandler = (value) => {
    this.setState({
      // knowYouTrash: '',
      // playAGame: ''
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.logoText}>
            chuck it!
          </Text>
          <Text>save the earth!</Text>
          <Text>sort your trash!</Text>

          <Button
          title="know your trash"
          onknowYourTrashPress={this.knowYourTrash}
          accessibilityLabel="Learn more about this purple button"
          />

          <Button
          title="play a game"
          onPlayAGamePress={this.playAGame}
          accessibilityLabel="Learn more about this pink button"
          />

          <Image
          style={{width: 300, height: 300}}
          source={require('./src/assets/garbage_truck.png')} />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 1
  },
  logoText: {
    fontFamily: ''
    fontSize: 80,
    fontWeight: '800'
  }
});
