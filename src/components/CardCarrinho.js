import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// import { Container } from './styles';
import Button from "./Button";

const CardCarrinho = ({name, uriImg, price, size, id}) => {

  const [valor, setValor] = useState(0)
  const [valorPromo, setValorPromo] = useState(0)

 
  return (
    <View style={{flex: 1,backgroundColor: 'white', width: '100%', height: 90, marginVertical: 10, alignContent: 'center', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15}}>
      <View>
        <Image source={{ uri: uriImg }} style={{width: 80, height: 80}} resizeMode={'contain'}/>
      </View>
      <View style={{marginVertical: 5,width: 170}}>
        <Text style={{fontSize: 16, fontFamily: 'roboto-bold'}} numberOfLines={1} ellipsizeMode='tail' allowFontScaling={false}>
          {name}
        </Text>
        <Text style={{fontSize: 14, color: '#AEAFB1', marginVertical: 3}}>
          {size} g
        </Text>
        <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          {
            valorPromo ? 
            <Text style={{fontFamily: 'roboto-bold', fontSize: 14, color: '#AEAFB1'}} >
              {(valorPromo).toFixed(2)}  
            </Text> : null
          }
          <Text style={{fontFamily: 'roboto-bold',  color: 'black', fontSize: 14, textDecorationLine: 'line-through', paddingRight: windowWidth/8}} >
            {(valor).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={{marginRight: 20, marginTop: 10}}>
        <Button priceItem={price} priceItemPromo = {(price-(price*0.1)).toFixed(2)} setValor={setValor} setValorPromo={setValorPromo} valor={valor} valorPromo={valorPromo}/>
      </View>
    </View>
  );
}

export default CardCarrinho;