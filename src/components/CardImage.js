import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardImage = ({uriImg}) => {
  return(
    <View style={styles.imgContent}>
      <Image source={{ uri: uriImg }} style={{width: 100, height: 100}} resizeMode={'contain'}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  imgContent:{
    paddingVertical: windowHeight/50,
    marginLeft: windowWidth/13
  },
})
export default CardImage;