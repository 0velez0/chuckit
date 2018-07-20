import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

// import PlayerInput from './src/components/PlayerInput';
// import PlayerList from './src/components/PlayerList';
// import PlayerDetail from './src/components/PlayerDetail';
// import ListItem from './src/components/ListItem';
// import TrashList from './src/components/TrashList';
// import TrashDetail from './src/components/TrashDetail';
//
// import Icon from 'react-native-vector-icons/Ionicons'
//
// import playerImage from './assets/images/players/player2.png';

const trashSamples = [
  {
    name: 'can',
    image: 'can_jpg',
    category: 'recycling'
  },
  {
    name: 'eggshell',
    image: 'egg_jpg',
    category: 'food_waste'
  },
  {
    name: 'lid',
    image: 'lid_jpg',
    category: 'trash'
  }
];

let randomTrash = trashSamples[Math.floor(Math.random() * trashSamples.length)]


class App extends React.Component {

  state = {
    pickingScreen: true, // this one should be 'true' to start with because it's the first screen we see
    successScreen: false,
    failureScreen: false,
    randomTrash: randomTrash //TODO test to see if it's random
  }

  checkTrash(bin) {
    if (this.state.randomTrash.category === bin) {
      this.setState({successScreen: true });
    } else {
      this.setState({failureScreen: true }),
      this.setState({pickingScreen: false })
    }
  }

  // picking screen
  _showIsPicking() {
    if (this.state.pickingScreen) {
      return(
        <Text> we are picking! </Text>
      )
    }
  }

  _showSuccess() {
    if (this.state.success) {
      return(
        <Text> success! </Text>
      )
    }
  }

  _showFailure() {
    if (this.state.failure) {
      return(
        <Text> failure! </Text>
      )
    }
  }

  onSortLandfill() {
    console.log("we are inside onSortLandfill");
  }

  onSortRecycling() {
    console.log("we are inside onSortRecycling");
  }

  onSortFoodWaste() {
    console.log("we are inside onSortFoodWaste");
  }



  render() {

    const randomTrash = trashSamples[Math.floor(Math.random() * trashSamples.length)]

    const listofCategories = [
      'recycling',
      'compost',
      'trash'
    ]

    const pickerScreen = this._showIsPicking();
    const successScreen = this._showSuccess();
    const failureScreen = this._showFailure();

    return (
      <View style={styles.container}>
        <Text>Sort the trash</Text>
        {pickerScreen}
        {successScreen}
        {failureScreen}

        <Button
        onPress={this.onSortRecycling}
        title="Recycling"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        <Button
        onPress={this.onSortFoodWaste}
        title="Food Waste"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        <Button
        onPress={this.onSortLandfill}
        title="Landfill"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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


export default App;
