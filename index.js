import GamePlay from "./src/components/GamePlay";
import Homescreen from "./src/components/Homescreen";
import { Navigation } from "react-native-navigation";

Navigation.registerComponent("Homescreen", () => Homescreen);
Navigation.registerComponent("GamePlay", () => GamePlay);

Navigation.startSingleScreenApp({
  screen: {
    screen: "Homescreen", // unique ID registered with Navigation.registerScreen
    title: "Welcome", // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
