import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({name, uriImg, price, promoPrice, size}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContent}>
        <Image source={{ uri: uriImg }} style={{width: 100, height: 100}} resizeMode={'contain'}/>
      </View>
      <View style={styles.contentValue}>
        <Text style={styles.mainValue}>
          {price}
        </Text>
        <Text style={styles.promotionValue}>
          {price-(price*0.1)}
        </Text>
      </View>
      
      <View style={styles.contentPromotion}>
        <View style={styles.promotionBackgrond}>
          <Text style={styles.promotionPercentage}>
            -10%
          </Text>
        </View>
        <Text style={styles.promotionSave}>
          Poupe R$ {(price*0.1).toFixed(2)}
        </Text>
      </View>
      
      <View style={styles.contentName}>
        <Text style={styles.productText} numberOfLines={1} ellipsizeMode='tail' allowFontScaling={false}>
          {name}
        </Text>
      </View>
      
      <View style={styles.contentQuantity}>
        <Text style={styles.productQuantity}>
          {size} g
        </Text>
      </View>

      <View style={styles.contentButtons}>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="minus" size={24} color="#56C66A" />
        </TouchableOpacity>
        <Text style={styles.quantityIncremented}>0</Text>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="plus" size={24} color="#56C66A" />
        </TouchableOpacity>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: 120
  },
  imgContent:{
    paddingVertical: windowHeight/50,
    marginLeft: windowWidth/40
  },
  contentValue:{
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  mainValue:{
    fontFamily: 'roboto-bold', 
    fontSize: 18,
    paddingRight: 10
  },
  promotionValue:{
    fontFamily: 'roboto-bold', 
    color: '#CACECF',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  contentPromotion:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  promotionBackgrond:{
    backgroundColor: '#F77175',
    height: 18,
    width: 36,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  promotionPercentage:{
    fontFamily: 'roboto-bold', 
    color: 'white',
    fontSize: 12
  },
  promotionSave:{
    color: '#F77175',
    fontFamily: 'roboto-bold',
    fontSize: 13
  },
  contentName:{
    marginVertical: 5,
    width: 130
  },
  productText:{
    fontFamily: 'roboto-regular',
    fontSize: 16,
  },
  productQuantity:{
    color: '#D6D6D7',
    fontFamily: 'roboto-regular',
    fontSize: 18
  },
  contentButtons:{
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    shadowColor: "#F3F3F3",
    elevation: 0.3,
    borderWidth: 0.2,
    borderEndColor: '#D6D6D7',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  quantityIncremented:{
    fontFamily: 'roboto-regular',
    fontSize: 20
  },
})
export default Card;