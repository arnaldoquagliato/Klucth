import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ProductsContext } from "../context/ProductsContext";

const Button = ({priceItem, idProduct, produto}) => {
  const [value, setValue] = useState(0)
  const [showIncreDecre, setShowIncreDecre] = useState(false)

  const {setQuantidade, quantidade, setTotalPrice, totalPrice, carrinho, setCarrinho} = useContext(ProductsContext)

  function changeCarrinho(){
    if(carrinho){
      const listaCarrinho = carrinho.find(item => item.id === idProduct)
      if(listaCarrinho != undefined) setCarrinho(...carrinho, {produto: produto, quantidade:value})
    }
  }
  function handleIncrement(){
    setValue(value+1) 
    setQuantidade(quantidade+1)
    setTotalPrice(parseFloat(priceItem)+parseFloat(totalPrice))
    changeCarrinho()
  }
  function handleDecrement(){
    value>0 ? setValue(value-1) : null

    if(quantidade>0 && value>=1){
      setQuantidade(quantidade-1)
      setTotalPrice(parseFloat(totalPrice)-parseFloat(priceItem))
      changeCarrinho()
    }
    if(value === 1){
      setShowIncreDecre(false)
    }    
  }
  return (
    <View style={{width: 100}}>
      {value === 0 && !showIncreDecre ?
      <View style={styles.contentButtons}>
        <TouchableOpacity onPress={() => setShowIncreDecre(true)}>
          <Text style={{color: '#56C66A', fontSize: 18, fontFamily: 'roboto-regular'}}>Adicionar</Text>
        </TouchableOpacity>
      </View>
         : 
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.button} onPress={handleDecrement}>
            <AntDesign name="minus" size={24} color="#56C66A" />
          </TouchableOpacity>
          <Text style={styles.quantityIncremented}>{value}</Text>
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <AntDesign name="plus" size={24} color="#56C66A" />
          </TouchableOpacity> 
         </View>
      }
          
      
    </View>
  );
}

const styles = StyleSheet.create({
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
export default Button;