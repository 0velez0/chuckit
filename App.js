import React from "react";
import GamePlay from "./src/components/GamePlay";
import Homescreen from "./src/components/Homescreen";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("Homescreen", () => Homescreen);
Navigation.registerComponent("GamePlay", () => GamePlay);

// TODO pin topnav to top of screen when hit pause
// // TODO: use Firebase
// // TODO: add players
// // TODO: add Leaderboard screen
// // TODO put only score after game over

export default class App extends React.Component {
  render() {
    return <Homescreen />;
  }
}
