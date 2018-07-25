import React from "react";
import GamePlay from "./src/components/GamePlay";
import Homescreen from "./src/components/Homescreen";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("Homescreen", () => Homescreen);
Navigation.registerComponent("GamePlay", () => GamePlay);

export default class App extends React.Component {
  render() {
    return <Homescreen />;
  }
}
