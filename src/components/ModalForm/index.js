import React, {useState, useEffect} from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Button } from 'react-native';

const ModalForm = ({modalVisible, handleModal}) => {
  
  return(
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >

          <View style={{flex: 1}}>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <TouchableOpacity onPress={handleModal}>
              <Text>FECHAR AQUI</Text>
            </TouchableOpacity>
          </View>
      </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
 
})
export default ModalForm;