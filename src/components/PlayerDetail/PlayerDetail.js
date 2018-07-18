// playerDetail holds our modal

import React from 'react';
import { Modal,
         View,
         Image,
         Text,
         Button,
         StyleSheet,
         TouchableOpacity
        } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
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
            <TouchableOpacity onPress={props.onItemDeleted}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red"/>
              </View>
            </TouchableOpacity>
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
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default playerDetail;
