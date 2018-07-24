import React from "react";
import GamePlay from "./src/components/GamePlay";
import Homescreen from "./src/components/Homescreen";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("Homescreen", () => Homescreen);
Navigation.registerComponent("GamePlay", () => GamePlay);

// // TODO: bind play/pause to not letting game play continue
// // TODO: make failureMessage disappear?
// // TODO: move to new components
// // TODO: use Firebase, hide API key
// // TODO: add navigation
// // TODO: add players
// // TODO: add Leaderboard screen
// // TODO put only score after game over

export default class App extends React.Component {
  render() {
    return <Homescreen />;
  }
}
