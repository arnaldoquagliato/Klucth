import React from 'react';
import { View, Image, Text } from 'react-native';


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// import { Container } from './styles';
import Button from "./Button";

const CardCarrinho = () => {
  return (
    <View style={{flex: 1,backgroundColor: 'white', width: '100%', height: 90, marginVertical: 10, alignContent: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15}}>
      <View>
        <Image source={{uri:'https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg'}} style={{width: 80, height: 80}} resizeMode={'contain'}/>
      </View>
      <View style={{marginVertical: 5,width: 170}}>
        <Text style={{fontSize: 16, fontFamily: 'roboto-bold'}} numberOfLines={1} ellipsizeMode='tail' allowFontScaling={false}>
          Petisco pra cahorro muito bom
        </Text>
        <Text style={{fontSize: 14, color: '#AEAFB1', marginVertical: 3}}>
          45 g
        </Text>
        <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontFamily: 'roboto-bold', fontSize: 14, color: '#AEAFB1'}} >
            R$ 5,70
          </Text>
          <Text style={{fontFamily: 'roboto-bold',  color: 'black', fontSize: 14, textDecorationLine: 'line-through', paddingRight: windowWidth/8}} >
            R$ 5,00
          </Text>
        </View>
      </View>
      <View style={{marginRight: 20, marginTop: 10}}>
        <Button />
      </View>
    </View>
  );
}

export default CardCarrinho;