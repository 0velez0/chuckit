import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const playerList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.players}
      renderItem={(info) => (
        <ListItem
          playerName={info.item.name}
          playerImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default playerList;
