import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class AppText extends Component {
  constructor(props) {
    super(props)
    this.state= {
      titleText: "Chuck It!"
    }
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
        {this.state.titleText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'VT323',
  },
  titleText: {
    fontSize: 200,
    fontWeight: 'bold'
  },
});
