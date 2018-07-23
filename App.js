import React from "react";
import GamePlay from "./src/components/GamePlay";

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
    return <GamePlay />;
  }
}
