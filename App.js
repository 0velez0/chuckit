import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import PlayerInput from './src/components/PlayerInput';
import PlayerList from './src/components/PlayerList';
import PlayerDetail from './src/components/PlayerDetail';
import ListItem from './src/components/ListItem';
import TrashList from './src/components/TrashList';
import TrashDetail from './src/components/TrashDetail';

import Icon from 'react-native-vector-icons/Ionicons'

import playerImage from './assets/images/players/player2.png';

class App extends React.Component {
  // constructor (
  //
  // )

  state = {
    playerName: '',
    players: [],
    selectedPlayer: null
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
    console.log('Hey! A player was added!!!');
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

  modalClosedHandler = () => {
    this.setState({
      selectedPlayer: null // this will ensure that I can close the modal
    });
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

  const querySamples = [
      {
        description: 'can',
        image: 'can_jpg',
        category: 'recycling'
      },
      {
        description: 'eggshell',
        image: 'egg_jpg',
        category: 'compost'
      },
      {
        description: 'lid',
        image: 'lid_jpg',
        category: 'trash'
      }
    ];



  const listofCategories = [
    'recycling',
    'compost',
    'trash'
  ]


  // given list of questions, give me a random one

  // given a random question, give me options for categories

  // given a question from list and category string, is that the right answer

  // shuffle a list of questions in constructor


  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>
          chuck it!
        </Text>
        <Text>save the earth!</Text>
        <Text>sort your trash!</Text>

        <Button
        title="KNOW YOUR TRASH"
        onknowYourTrashPress={this.knowYourTrash}
        />

        <Button
        title="PLAY A GAME"
        onPlayAGamePress={this.playAGame}
        />

        <Image
        style={{width: 300, height: 300}}
        source={require('./assets/images/garbage_truck.png')}
        />

        <PlayerDetail selectedPlayer={this.state.selectedPlayer} onItemDeleted={this.playerDeletedHandler} onModalClosed={this.modalClosedHandler}
        />

        <PlayerInput onPlayerAdded={this.playerAddedHandler}
        />

        <PlayerList
        players={this.state.players} onItemSelected={this.playerSelectedHandler}
        />

        <GamePlay />
       {/*<TrashList trash={this.state.trashPlural}
       onItemSelected={this.trashSelectedHandler}
       />

       <TrashDetail selectedTrash={this.state.selectedTrash}
       />*/}
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

// const mapStateToProps = state => {
//   return {
//     players: state.players.players,
//     selectedPlayer: state.players.selectedPlayer
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlayer: (name) => dispatch(addPlayer(name)),
//     onDeletePlayer: () => dispatch(deletePlayer()),
//     onSelectPlayer: (key) => dispatch(selectPlayer(key)),
//     onDeselectPlayer: () => dispatch(deselectPlayer())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
