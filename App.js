import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from "react-native";

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
import can from "./assets/images/trash/can.png";
import meat from "./assets/images/trash/meat.png";
import lightbulb from "./assets/images/trash/lightbulb.png";
import balloons from "./assets/images/trash/balloons.png";
import poop from "./assets/images/trash/poop.png";
import log from "./assets/images/trash/log.png";
import waterbottle from "./assets/images/trash/waterbottle.png";
import knifeandfork from "./assets/images/trash/knifeandfork.png";
import milkcarton from "./assets/images/trash/milkcarton.png";
import crab from "./assets/images/trash/crab.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      successMessage: false,
      failureMessage: false,
      trash: null,
      score: 0,
      time: 60,
      isPlaying: false
      // round: null,
      // paused: false,
      // start: true,
      // stop: false
    };
    this.countDown = this.countDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // const isPlaying = this.state.isPlaying;

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
    this.setState({
      isPlaying: true
    });
  };

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      isPlaying: false
    });
  }

  // componentWillUnmount() {
  //   stopTimer();
  // }

  countDown() {
    let { time } = this.state;
    if (time === 0) {
      clearInterval(this.timer);
      this.roundIsOver();
    } else {
      this.setState({
        time: time - 1
      });
    }
  }

  componentDidMount() {
    this.randomTrashGenerator();
    this.startTimer();
  }

  randomTrashGenerator = () => {
    const trashSamples = [
      {
        name: "can",
        image: can,
        category: "recycling"
      },
      {
        name: "meat",
        image: meat,
        category: "food_waste"
      },
      {
        name: "lightbulb",
        image: lightbulb,
        category: "landfill"
      },
      {
        name: "balloons",
        image: balloons,
        category: "landfill"
      },
      {
        name: "poop",
        image: poop,
        category: "landfill"
      },
      {
        name: "log",
        image: log,
        category: "food_waste"
      },
      {
        name: "waterbottle",
        image: waterbottle,
        category: "recycling"
      },
      {
        name: "crab",
        image: crab,
        category: "food_waste"
      },
      {
        name: "knifeandfork",
        image: knifeandfork,
        category: "landfill"
      },
      {
        name: "milkcarton",
        image: milkcarton,
        category: "recycling"
      }
    ];

    let randomTrashPicked =
      trashSamples[Math.floor(Math.random() * trashSamples.length)];

    this.setState({
      trash: randomTrashPicked,
      failureMessage: false
    });
    const disappearingMessage = setTimeout(
      () => this.setState({ successMessage: false }),
      1000
    );
    // clearTimeout(disappearingMessage);
  };

  newRound = () => {
    clearInterval(this.timer);
    this.setState({
      score: 0,
      time: 60,
      round: null
    });
    this.startTimer();
  };

  roundIsOver = () => this.setState({ round: "GAME OVER!" });

  checkBinChoice = bin => {
    if (this.state.trash.category === bin) {
      this.setState({
        successMessage: true,
        failureMessage: false,
        score: this.state.score + 1
      });
      this.randomTrashGenerator();
    } else {
      this.setState({
        failureMessage: true,
        successMessage: false,
        score: this.state.score
      });
    }
  };

  _showSuccess() {
    if (this.state.successMessage) {
      return <Text style={styles.success}> You did it correctly!</Text>;
    }
  }

  _showFailure() {
    if (this.state.failureMessage) {
      return <Text style={styles.failure}> No that is wrong! </Text>;
    }
  }

  _showRandomTrash() {
    if (this.state.randomTrash) {
      return <View>{this.randomTrashGenerator()}</View>;
    }
  }

  _activeGamePlay() {
    const successMessage = this._showSuccess();
    const failureMessage = this._showFailure();

    return (
      <View>
        {successMessage}
        {failureMessage}

        <View>
          <Image source={this.state.trash.image} />
        </View>

        <Button
          onPress={() => {
            this.checkBinChoice("recycling");
          }}
          title="Recycling"
          color="black"
          accessibilityLabel="Learn more about this blue button"
        />

        <Button
          onPress={() => {
            this.checkBinChoice("food_waste");
          }}
          title="Food Waste"
          color="black"
          accessibilityLabel="Learn more about this green button"
        />

        <Button
          onPress={() => {
            this.checkBinChoice("landfill");
          }}
          title="Landfill"
          color="black"
          accessibilityLabel="Learn more about this brown button"
        />

        <Button
          onPress={() => {
            this.randomTrashGenerator();
          }}
          title="MORE TRASH NOW!"
          color="pink"
          accessibilityLabel="Learn more about this pink button"
        />
      </View>
    );
  }

  render() {
    if (this.state.trash === null) {
      return <Text>Loading...</Text>;
    }

    const listofCategories = ["recycling", "compost", "trash"];
    console.log(listofCategories);

    return (
      <View style={styles.container}>
        <View style={styles.topnav}>
          <Text style={styles.scoreText}>SCORE: {this.state.score} points</Text>

          <Text style={styles.timeText}>
            TIME LEFT: {this.state.time} seconds
          </Text>

          <View style={styles.pauseStart}>
            <TouchableOpacity
              onPress={this.state.isPlaying ? this.stopTimer : this.startTimer}
            >
              <Text>{this.state.isPlaying ? "PAUSE" : "START"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.logoText}>chuck it!</Text>

        <Text style={styles.gameInstructions}>sort the trash!</Text>

        {this.state.round ? (
          <Text> {this.state.round} </Text>
        ) : (
          this._activeGamePlay()
        )}

        <Button
          onPress={() => {
            this.newRound();
          }}
          title="PLAY ANOTHER ROUND!"
          color="green"
          accessibilityLabel="Learn more about this green button"
        />
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
  logoText: {
    fontFamily: "Futura",
    fontSize: 80,
    fontWeight: "800"
  },
  gameInstructions: {
    fontFamily: "Futura",
    fontSize: 30,
    fontWeight: "500"
  },
  topnav: {
    flexDirection: "row",
    fontSize: 20
  },
  scoreText: {
    justifyContent: "flex-start",
    paddingRight: 50
  },
  timeText: {
    justifyContent: "flex-end"
  },
  pauseStart: {
    paddingLeft: 20
  },
  success: {
    color: "blue"
  },
  failure: {
    color: "red"
  }
});

export default App;
