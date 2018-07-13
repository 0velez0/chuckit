import React from 'react';
import { Modal,
         View,
         Image,
         Text,
         Button,
         StyleSheet
        } from 'react-native';


// render selectedTrash.trashImage and selectedTrash.trashName if it has values
const trashDetail = props => {
  let modalContent = null;

  if (props.selectedTrash) {
    modalContent = (
      <View>
        <Image source={props.selectedTrash.trashImage} />
        <Text>{props.selectedTrash.trashName}</Text>
      </View>
    );
  }
  return (
      <Modal visible={props.selectedTrash !== null}>
        <View style={styles.modalContainer}>
            {modalContent}
          <View>
            <Button title="Delete" color="red" />
            <Button title="Close"/>
          </View>
        </View>
      </Modal>
      );
};

const styles = StyleSheet.create({
  modalContainer: {
      margin: 22
  }
});

export default trashDetail;
