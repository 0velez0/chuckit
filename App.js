import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

// import PlayerInput from './src/components/PlayerInput';
// import PlayerList from './src/components/PlayerList';
// import PlayerDetail from './src/components/PlayerDetail';
// import ListItem from './src/components/ListItem';
// import TrashList from './src/components/TrashList';
// import TrashDetail from './src/components/TrashDetail';
//
import Icon from "react-native-vector-icons/Ionicons";
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
import landfillBin from "./assets/images/bins/garbage-can-bnw.png";
import recyclingBin from "./assets/images/bins/recycling-bnw.png";
import compostBin from "./assets/images/bins/swirl-leaves-bnw.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      successMessage: false,
      failureMessage: false,
      trash: null,
      score: 0,
      time: 5,
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
        category: "compost"
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
        category: "compost"
      },
      {
        name: "waterbottle",
        image: waterbottle,
        category: "recycling"
      },
      {
        name: "crab",
        image: crab,
        category: "compost"
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
        <Text style={styles.successMsg}>{successMessage}</Text>
        <Text style={styles.failureMsg}>{failureMessage}</Text>

        <View style={styles.trashImage}>
          <Image source={this.state.trash.image} />
        </View>

        <View style={styles.bins}>
          <TouchableOpacity
            onPress={() => {
              this.checkBinChoice("recycling");
            }}
          >
            <Image
              source={recyclingBin}
              style={{ maxWidth: 70, maxHeight: 70 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.checkBinChoice("landfill");
            }}
          >
            <Image
              source={landfillBin}
              style={{ maxWidth: 70, maxHeight: 70 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.checkBinChoice("compost");
            }}
          >
            <Image
              source={compostBin}
              style={{ maxWidth: 70, maxHeight: 70 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    if (this.state.trash === null) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <View style={styles.topnav}>
          <Text style={styles.topNavButtons}>
            SCORE: {this.state.score} points
          </Text>

          <Text style={styles.topNavButtons}>
            TIME LEFT: {this.state.time} seconds
          </Text>

          <View>
            <TouchableOpacity
              onPress={this.state.isPlaying ? this.stopTimer : this.startTimer}
            >
              <Text style={styles.pauseStarttext}>
                {this.state.isPlaying ? "PAUSE" : "PLAY"}
              </Text>
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

        <View>
          <TouchableOpacity
            style={styles.newRoundButton}
            onPress={() => {
              this.newRound();
            }}
          >
            <Text style={styles.newRoundButtonText}> PLAY ANOTHER ROUND! </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Futura",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  // textStyle: {
  //   width: 200,
  //   height: 100,
  //   borderColor: "black",
  //   borderWidth: 1
  // },
  topnav: {
    flexDirection: "row",
    // fontSize: 40,
    height: 55,
    paddingTop: 15
    // backgroundColor: "#989292",
    // alignItems: "center",
    // justifyContent: "center"
    // textAlign: "center"
  },
  topNavButtons: {
    fontFamily: "Futura",
    // flex: 1,
    backgroundColor: "#e2e2e4",
    textAlign: "center",
    // width: 95,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  logoText: {
    fontFamily: "Futura",
    fontSize: 80,
    fontWeight: "800",
    backgroundColor: "#fafaff"
  },
  gameInstructions: {
    fontFamily: "Futura",
    fontSize: 30,
    fontWeight: "500",
    justifyContent: "flex-start",
    backgroundColor: "#e2e2e4"
  },
  successMsg: {
    textAlign: "center"
  },
  failureMsg: {
    textAlign: "center"
  },
  // scoreText: {
  //   // fontFamily: "Futura"
  //   // justifyContent: "flex-start",
  //   // paddingRight: 30
  // },
  // timeLeftText: {
  //   // fontFamily: "Futura"
  //   // justifyContent: "flex-end"
  // },
  // pauseStart: {
  //   // paddingLeft: 18
  // },
  pauseStarttext: {
    // backgroundColor: "#696464"
    fontWeight: "700",
    fontFamily: "Futura",
    // flex: 1,
    // backgroundColor: "#e2e2e4",
    // textAlign: "center",
    // width: 95,
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    borderColor: "#111112",
    borderWidth: 2
  },
  success: {
    color: "blue"
  },
  failure: {
    color: "red"
  },
  trashImage: {
    alignItems: "center"
  },
  bins: {
    marginTop: 5,
    height: 90,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
  },
  // indivBins: {
  // },
  newRoundButton: {
    backgroundColor: "#e4e4e2",
    marginTop: 12
  },
  newRoundButtonText: {
    fontFamily: "Futura"
  }
});

export default App;
