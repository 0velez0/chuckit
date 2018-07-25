import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";

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
import can from "../../assets/images/trash/can.png";
import meat from "../../assets/images/trash/meat.png";
import lightbulb from "../../assets/images/trash/lightbulb.png";
import balloons from "../../assets/images/trash/balloons.png";
import poop from "../../assets/images/trash/poop.png";
import log from "../../assets/images/trash/log.png";
import waterbottle from "../../assets/images/trash/waterbottle.png";
import knifeandfork from "../../assets/images/trash/knifeandfork.png";
import milkcarton from "../../assets/images/trash/milkcarton.png";
import crab from "../../assets/images/trash/crab.png";
import cherries from "../../assets/images/trash/cherries.png";
import diamond from "../../assets/images/trash/diamond.png";
import diaper from "../../assets/images/trash/diaper.png";
import stethoscope from "../../assets/images/trash/stethoscope.png";
import womenrazor from "../../assets/images/trash/womenrazor.png";
import papertowel from "../../assets/images/trash/paper-towel.png";
import leaves from "../../assets/images/trash/leaves.png";

import landfillBin from "../../assets/images/bins/garbage-can-bnw.png";
import recyclingBin from "../../assets/images/bins/recycling-bnw.png";
import compostBin from "../../assets/images/bins/swirl-leaves-bnw.png";

export default class GamePlay extends React.Component {
  constructor() {
    super();
    this.state = {
      successMessage: false,
      failureMessage: false,
      trash: null,
      score: 0,
      time: 5,
      isPlaying: false
    };

    this.countDown = this.countDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

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
      },
      {
        name: "cherries",
        image: cherries,
        category: "compost"
      },
      {
        name: "diamond",
        image: diamond,
        category: "compost"
      },
      {
        name: "diaper",
        image: diaper,
        category: "landfill"
      },
      {
        name: "papertowel",
        image: papertowel,
        category: "compost"
      },
      {
        name: "stethoscope",
        image: stethoscope,
        category: "landfill"
      },
      {
        name: "womenrazor",
        image: womenrazor,
        category: "landfill"
      },
      {
        name: "leaves",
        image: leaves,
        category: "compost"
      }
    ];

    let randomTrashPicked =
      trashSamples[Math.floor(Math.random() * trashSamples.length)];

    this.setState({
      trash: randomTrashPicked,
      failureMessage: false,
      successMessage: false
    });
  };

  newRound = () => {
    clearInterval(this.timer);
    this.setState({
      score: 0,
      time: 60,
      gameOver: false
    });
    this.startTimer();
  };

  roundIsOver = () => {
    this.setState({
      gameOver: true
    });
    const config = {
      apiKey: API_KEY,
      authDomain: "chuckit-a6727.firebaseapp.com",
      databaseURL: "https://chuckit-a6727.firebaseio.com",
      projectId: PROJECT_ID,
      storageBucket: "chuckit-a6727.appspot.com",
      messagingSenderId: "933419915503"
    };
    firebase.initializeApp(config);
    console.log(firebase);
    firebase
      .database()
      .ref("players")
      .push({
        name: "Ada",
        score: this.state.score
      })
      .then(() => {
        console.log("Saved player's score to firebase.");
      })
      .catch(error => {
        console.log(error);
      });
  };

  // write callback from player, callback will set state w new player name

  checkBinChoice = bin => {
    if (this.state.trash.category === bin) {
      this.setState({
        successMessage: true,
        failureMessage: false,
        score: this.state.score + 1
      });

      setTimeout(this.randomTrashGenerator, 1000);
    } else {
      this.setState({
        failureMessage: true,
        successMessage: false,
        score: this.state.score
      });

      setTimeout(() => this.setState({ failureMessage: false }), 1000);
    }
  };

  onPressLeaderboardHandler = () => {
    this.props.navigator.push({
      screen: "Leaderboard"
    });
  };

  _showSuccess() {
    if (this.state.successMessage) {
      return <Text style={styles.success}>CORRECT!</Text>;
    }
  }

  _showFailure() {
    if (this.state.failureMessage) {
      return <Text style={styles.failure}>WRONG! TRY AGAIN!</Text>;
    }
  }

  _toggleSuccessOrFailure() {}

  _showRandomTrash() {
    if (this.state.randomTrash) {
      return <View>{this.randomTrashGenerator()}</View>;
    }
  }

  _activeGamePlay() {
    // Have we asked for player name yet?
    // If not, display the Player component
    // and pass a callback prop, to
    // set the player name when they click "okay"
    // detect that i don't have a name for player and let player input
    if (!this.state.isPlaying) {
      return null;
    }
    if (this.state.gameOver) {
      return (
        <View>
          <Text style={styles.gameOverMessage}>GAME OVER!</Text>
          <TouchableOpacity
            style={styles.leaderboardButton}
            onPress={this.onPressLeaderboardHandler}
          >
            <Text style={styles.leaderBoardText}> LEADERBOARD </Text>
          </TouchableOpacity>
        </View>
      );
    }

    const successMessage = this._showSuccess();
    const failureMessage = this._showFailure();

    return (
      <View>
        <Text style={styles.gameInstructions}>sort the trash!</Text>

        <View style={styles.trashImage}>
          <Image source={this.state.trash.image} />

          <View style={styles.SuccessOrFailureMessages}>
            {this._showSuccess() ? (
              <Text>{successMessage}</Text>
            ) : (
              this._showFailure(<Text>{failureMessage}</Text>)
            )}
          </View>
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

        {this._activeGamePlay()}

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
    position: "absolute",
    top: 0,
    flex: 1,
    alignSelf: "stretch",
    right: 0,
    left: 0,
    flexDirection: "row",
    // fontSize: 40,
    height: 55,
    paddingTop: 15,
    // backgroundColor: "#989292",
    // alignItems: "center"
    justifyContent: "center"
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
    // backgroundColor: "#e2e2e4",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center"
  },
  // successMsg: {
  //   textAlign: "center",
  //   fontSize: 30
  // },
  // failureMsg: {
  //   textAlign: "center",
  //   fontSize: 30,
  //   color: "green"
  // },
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
  SuccessOrFailureMessages: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: "white",
    // opacity: 0.3,
    justifyContent: "center"
  },
  success: {
    fontFamily: "Futura",
    fontWeight: "900",
    color: "white",
    fontSize: 45,
    justifyContent: "center",
    textAlign: "center",
    fontStyle: "italic",
    backgroundColor: "#3b9d4a95"
  },
  failure: {
    fontFamily: "Futura",
    fontWeight: "700",
    color: "white",
    justifyContent: "center",
    fontSize: 45,
    textAlign: "center",
    fontStyle: "italic",
    backgroundColor: "#f90b0b95"
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
  gameOverMessage: {
    fontFamily: "Futura",
    color: "red",
    fontSize: 55,
    backgroundColor: "white"
  },
  newRoundButton: {
    backgroundColor: "#e4e4e2",
    marginTop: 12
  },
  newRoundButtonText: {
    fontFamily: "Futura",
    fontSize: 23
  },
  leaderBoardButton: {
    fontFamily: "Futura",
    fontSize: 23
  },
  leaderBoardText: {
    fontFamily: "Futura",
    color: "blue",
    fontSize: 35
  }
});
