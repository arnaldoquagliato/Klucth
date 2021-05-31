import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardImage = () => {
  return(
    <View style={styles.imgContent}>
      <Image source={{ uri: "https://www.petlove.com.br/images/products/186932/large/Pedigree_Biscrok_Adulto_Pequenas_3101854-2.jpg?1556408192" }} style={{width: 100, height: 100}} resizeMode={'contain'}/>
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