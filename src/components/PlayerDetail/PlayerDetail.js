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
        <Image source={props.selectedPlayer.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlayer.name}</Text>
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
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default playerDetail;
