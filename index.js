import GamePlay from "./src/components/GamePlay";
import Homescreen from "./src/components/Homescreen";
import Player from "./src/components/Player";
import PlayerInput from "./src/components/PlayerInput";
import PlayerDetail from "./src/components/PlayerDetail";
import Leaderboard from "./src/components/Leaderboard";

import { Navigation } from "react-native-navigation";

import * as firebase from "firebase";
import { API_KEY, PROJECT_ID } from "react-native-dotenv";
const config = {
  apiKey: API_KEY,
  authDomain: "chuckit-a6727.firebaseapp.com",
  databaseURL: "https://chuckit-a6727.firebaseio.com",
  projectId: PROJECT_ID,
  storageBucket: "chuckit-a6727.appspot.com",
  messagingSenderId: "933419915503"
};
firebase.initializeApp(config);

Navigation.registerComponent("Homescreen", () => Homescreen);
Navigation.registerComponent("GamePlay", () => GamePlay);
Navigation.registerComponent("Player", () => Player);
// Navigation.registerComponent("PlayerInput", () => PlayerInput);
// Navigation.registerComponent("PlayerDetail", () => PlayerDetail);
Navigation.registerComponent("Leaderboard", () => Leaderboard);

Navigation.startSingleScreenApp({
  screen: {
    screen: "Homescreen", // unique ID registered with Navigation.registerScreen
    title: "Home", // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
