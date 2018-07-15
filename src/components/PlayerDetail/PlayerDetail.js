// playerDetail holds our modal

import React from 'react';
import { Modal,
         View,
         Image,
         Text,
         Button,
         StyleSheet
        } from 'react-native';


// render selectedPlayer.playerImage and selectedPlayer.playerName if it has values
const playerDetail = props => {
  let modalContent = null;

  if (props.selectedPlayer) {
    modalContent = (
      <View>
        <Image source={props.selectedPlayer.image} style={styles.playerImage}/>
        <Text style={styles.playerName}>{props.selectedPlayer.name}</Text>
      </View>
    );
  }

  return (
      <Modal visible={props.selectedPlayer !== null} animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent}
          <View>
            <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
            <Button title="Close" onPress={props.onModalClosed}/>
          </View>
        </View>
      </Modal>
      );
};

const styles = StyleSheet.create({
  modalContainer: {
      margin: 22
  },
  playerImage: {
    width: "100%",
    height: 200
  },
  playerName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default playerDetail;
