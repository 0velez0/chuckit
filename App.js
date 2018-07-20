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
import can from './assets/images/trash/can.png';
import meat from './assets/images/trash/meat.png';
import lightbulb from './assets/images/trash/lightbulb.png';
import balloons from './assets/images/trash/balloons.png';
import poop from './assets/images/trash/poop.png';
import log from './assets/images/trash/log.png';
import waterbottle from './assets/images/trash/waterbottle.png';
import knifeandfork from './assets/images/trash/knifeandfork.png';
import milkcarton from './assets/images/trash/milkcarton.png';
import crab from './assets/images/trash/crab.png';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      successDisplay: false,
      failureDisplay: false,
      trash: null
    }
  }

  randomTrashGenerator = () => {
    const trashSamples = [
      {
        name: 'can',
        image: can,
        category: 'recycling'
      },
      {
        name: 'meat',
        image: meat,
        category: 'food_waste'
      },
      {
        name: 'lightbulb',
        image: lightbulb,
        category: 'landfill'
      },
      {
        name: 'balloons',
        image: balloons,
        category: 'landfill'
      },
      {
        name: 'poop',
        image: poop,
        category: 'landfill'
      },
      {
        name: 'log',
        image: log,
        category: 'food_waste'
      },
      {
        name: 'waterbottle',
        image: waterbottle,
        category: 'recycling'
      },
      {
        name: 'crab',
        image: crab,
        category: 'food_waste'
      },
      {
        name: 'knifeandfork',
        image: knifeandfork,
        category: 'trash'
      },
      {
        name: 'milkcarton',
        image: milkcarton,
        category: 'recycling'
      }
    ];

    console.log(trashSamples);

    let randomTrashPicked = trashSamples[Math.floor(Math.random() * trashSamples.length)]

    console.log(randomTrashPicked);
    this.setState({
      trash: randomTrashPicked,
      successDisplay: false,
      failureDisplay: false
    });
  }

  checkBinChoice = (bin) => {
    console.log('we are inside the checkBinChoice function');
    console.log(bin);
    if (this.state.trash.category === bin) {
      this.setState({successDisplay: true, failureDisplay: false })
      // then get it to cycle to the next image somehow!
    } else {
      this.setState({failureDisplay: true , successDisplay: false })

    }
  }

  _showSuccess() {
    if (this.state.successDisplay) {
      return(
        <Text> You did it correctly! </Text>
      )
    }
  }

  _showFailure() {
    if (this.state.failureDisplay) {
      return(
        <Text> No that is wrong! </Text>
      )
    }
  }

  _showRandomTrash() {
    if (this.state.randomTrash) {
      return(
        <View>
          {this.randomTrashGenerator()}
        </View>
      )
    }
  }

  // onSortLandfill() {
  //   console.log("we are inside onSortLandfill");
  // }
  //
  // onSortRecycling() {
  //   console.log("we are inside onSortRecycling");
  // }
  //
  // onSortFoodWaste() {
  //   console.log("we are inside onSortFoodWaste");
  // }

  componentDidMount() {
    this.randomTrashGenerator();
  }

  render() {
    if (this.state.trash === null) {
      return (<Text>Loading...</Text>)
    }

    const listofCategories = [
      'recycling',
      'compost',
      'trash'
    ]
    console.log(listofCategories);

    const successDisplay = this._showSuccess();
    const failureDisplay = this._showFailure();

    return (
      <View style={styles.container}>

        <Text style={styles.logoText}>chuck it!</Text>

        <Text style={styles.gameInstructions}>sort the trash!</Text>

        {successDisplay}
        {failureDisplay}
        <View>
          <Image source={this.state.trash.image}/>
        </View>

        <Button
        onPress={ () => {this.checkBinChoice('recycling')} }
        title="Recycling"
        color="blue"
        accessibilityLabel="Learn more about this blue button"
        />

        <Button
        onPress={ () => {this.checkBinChoice('food_waste')} }
        title="Food Waste"
        color="green"
        accessibilityLabel="Learn more about this green button"
        />

        <Button
        onPress={ () => {this.checkBinChoice('landfill')} }
        title="Landfill"
        color="brown"
        accessibilityLabel="Learn more about this brown button"
        />

        <Button
        onPress={ () => {this.randomTrashGenerator()} }
        title="PLAY AGAIN!"
        color="pink"
        accessibilityLabel="Learn more about this pink button"
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
  },
  gameInstructions: {
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: '500'
  }
});

export default App;
