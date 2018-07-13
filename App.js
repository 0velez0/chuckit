import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import PlayerInput from './src/components/PlayerInput/PlayerInput';
import PlayerList from './src/components/PlayerList/PlayerList';
import PlayerDetail from './src/components/PlayerDetail/PlayerDetail';

import TrashList from './src/components/TrashList/TrashList';
import TrashDetail from './src/components/TrashDetail/TrashDetail';

import playerImage from './assets/images/players/player1.png';

export default class App extends React.Component {
  state = {
    playerName: '',
    players: [],
    trashPlural: [], // TODO maybe don't need this because user is not adding trash items to app
    selectedPlayer: null,
    selectedTrash: null // TODO maybe don't need this because user is not adding trash items to app
  }

  playerNameChangedHandler = (value) => {
    this.setState({
      knowYouTrash: '',
      playAGame: ''
    });
  };

  playerAddedHandler = playerName => {
    this.setState(prevState => {
        return {
          // add a new element and return a new array immutably
          players: prevState.players.concat({
            key: Math.random(),
            name: playerName,
            image: playerImage
          })
        };
    });
  };

  playerDeletedHandler = () => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => {
          // selectedPlayer is stored in the state of the app container so here we can say that the new players are simply the old players filtered by a player where the key is not equal to the key of the selectedPlayer; these keys should not be equal, if they are, that's the one I wanna filter out and delete
          return player.key !== prevState.selectedPlayer.key;
        }),
        selectedPlayer: null // this is to reset the modal
      };
    });
  };

  playerSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlayer: prevState.players.find(player => {
          // return true if it's object you're looking for, false if it's not the object;
          // return true if the key of the player we're running the function on right now is equal to the key I received in playerSelectedHandler... because then it's the key I'm interested in
          return player.key === key;
        })
      };
    });
  };

  trashSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedTrash: prevState.trashPlural.find(trashSingular => {
          // return true if it's object you're looking for, false if it's not
          return trashSingular.key === key;
        })
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlayer: null // will ensure that I can close the modal
    });
  };


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.logoText}>chuck it!</Text>

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
        source={require('./assets/images/garbage_truck.png')} />

        <PlayerDetail selectedPlayer={this.state.selectedPlayer} onItemDeleted={this.playerDeletedHandler} onModalClosed={this.modalClosedHandler}
        />

        <PlayerInput onPlayerAdded={this.playerAddedHandler}
        />

        <PlayerList
        players={this.state.players} onItemSelected={this.playerSelectedHandler}
        />

        <TrashList trash={this.state.trashPlural}
        onItemSelected={this.trashSelectedHandler}
        />

        <TrashDetail selectedTrash={this.state.selectedTrash}
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
    justifyContent: 'center',
  },
  textStyle: {
    width: 200,
    height: 100,
    borderColor: "black",
    borderWidth: 1
  },
  logoText: {
    fontFamily: 'Futura',
    fontSize: 80,
    fontWeight: '800'
  }
});
