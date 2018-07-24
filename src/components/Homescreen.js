import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Homescreen extends React.Component {
  onPressHandler = () => {
    this.props.navigator.push({
      screen: "GamePlay"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressHandler}
          title="Play Game"
          color="#841584"
        />
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
  }
});
