import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import PlayerInput from './src/components/PlayerInput/PlayerInput';
import PlayerList from './src/components/PlayerList/PlayerList';
import PlayerDetail from './src/components/PlayerDetail/PlayerDetail';
import { addPlayer, deletePlayer, selectPlayer, deselectPlayer } from './src/store/actions/index';

import TrashList from './src/components/TrashList/TrashList';
import TrashDetail from './src/components/TrashDetail/TrashDetail';

import playerImage from './assets/images/players/player1.png';

class App extends React.Component {

  // playerNameChangedHandler = (value) => {
  //   this.setState({
  //     knowYouTrash: '',
  //     playAGame: ''
  //   });
  // };

  playerAddedHandler = playerName => {
    this.props.onAddPlayer(playerName);
  };

  playerDeletedHandler = () => {
    this.props.onDeletePlayer();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlayer();
  };

  playerSelectedHandler = key => {
    this.props.onSelectPlayer(key);
  };

  // trashSelectedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       selectedTrash: prevState.trashPlural.find(trashSingular => {
  //         // return true if it's object you're looking for, false if it's not
  //         return trashSingular.key === key;
  //       })
  //     };
  //   });
  // };



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

        <PlayerDetail selectedPlayer={this.props.selectedPlayer} onItemDeleted={this.playerDeletedHandler} onModalClosed={this.modalClosedHandler}
        />

        <PlayerInput onPlayerAdded={this.playerAddedHandler}
        />

        <PlayerList
        players={this.props.players} onItemSelected={this.playerSelectedHandler}
        />

        {/*
        // <TrashList trash={this.state.trashPlural}
        // onItemSelected={this.trashSelectedHandler}
        // />
        //
        // <TrashDetail selectedTrash={this.state.selectedTrash}
        // />
        */}

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

const mapStateToProps = state => {
  return {
    players: state.players.players,
    selectedPlayer: state.players.selectedPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: (name) => dispatch(addPlayer(name)),
    onDeletePlayer: () => dispatch(deletePlayer()),
    onSelectPlayer: (key) => dispatch(selectPlayer(key)),
    onDeselectPlayer: () => dispatch(deselectPlayer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
