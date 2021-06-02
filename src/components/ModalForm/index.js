import React, {useContext, useEffect} from 'react';
import { View, Modal, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, Image } from 'react-native';


import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CardCarrinho from "../CardCarrinho";
import {ProductsContext} from "../../context/ProductsContext";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ModalForm = ({modalVisible, handleModal, products}) => {
  const { totalPrice, setTotalPrice, setQuantidade, carrinho, setCarrinho} = useContext(ProductsContext)

  const handleClean = () => {
    setCarrinho([])
    setTotalPrice(0)
    setQuantidade(0)
  }
  return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <View style={{backgroundColor: '#F8F9FB', flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: 20}}>
              <View>
                <Text style={{fontFamily: 'roboto-bold', fontSize:14, color: '#D5D5D5'}}>SUBTOTAL</Text>
                <Text style={{fontFamily: 'roboto-bold', fontSize:24, color: 'black'}}>R$ {(totalPrice).toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={handleModal}>
                <AntDesign name="close" size={24} color="rgb(252, 47, 88)" />
              </TouchableOpacity>
            </View>

            <View style={{height: 45, width:'100%', backgroundColor:'rgb(252, 47, 88)', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
              
              <View style={{alignItems: 'center'}}>
                  <MaterialCommunityIcons name="crown" size={24} color="white" />
                  <Text style={{color:'white', fontSize:10, fontFamily: 'roboto-bold'}}>PRIME</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: 'roboto-regular'}}>Taxa de entrega com </Text>
                    <Text style={{color: 'white', fontFamily: 'roboto-bold'}}>RappiPrime</Text>
                  </View>
                  <Text style={{color: 'white', fontFamily: 'roboto-bold'}}>R$ 0,00</Text>
              </View>

              <Text 
                style={{color: 'white', fontFamily: 'roboto-bold', textDecorationLine: 'underline'}}
                >Inscreva-se aqui</Text>

            </View>
          
          
            <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 100, width: '100%', backgroundColor: 'white', marginTop: 30, borderRadius: 10, marginHorizontal: 10}}>
              <View style={{alignItems: 'flex-start', marginHorizontal: 10, width: '60%', marginTop: 10}}>
                <Text style={{color: '#D5D5D5', fontFamily: 'roboto-bold', fontSize: 14}}>ENDEREÇO DE ENTREGA</Text>
                <Text style={{fontFamily: 'roboto-regular', color: 'black',marginVertical: 5, fontSize: 16}} numberOfLines={1} ellipsizeMode='tail'>Condominio com Edificio Tk Tower - muito bom</Text>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#D5D5D5', fontFamily: 'roboto-bold', fontSize: 15, marginRight:10}}>Trabalho</Text>
                  <MaterialCommunityIcons name="briefcase-outline" size={24} color="#D5D5D5" />
                </View>
              </View>
  
              <Image source={{uri:"https://image.freepik.com/free-vector/top-view-map-with-destination-location-point_34645-1058.jpg"}} style={{height: 80, width: 80, marginTop: 10, marginRight: windowWidth/10}} resizeMode={'contain'}/>
            </View>
          
            <FlatList 
              data={carrinho}
              keyExtractor={(item) => String(item.id)}
              renderItem ={({ item }) => (
                <CardCarrinho 
                  name={item.description}
                  uriImg={item.image}
                  price={item.price}
                  promoPrice={item.price}
                  size={item.price}
                  id={item.id}
                />
              )}
            />  

          <View style={{alignItems: 'center', justifyContent: "flex-end"}}>
            <TouchableOpacity style={{backgroundColor: '#F8F9FB', width: '100%', height:30,alignItems: 'center', marginTop:10}} onPress={handleClean}>
              <Text style={{color: '#AEAFB1', fontSize: 16, fontFamily: 'roboto-bold', textDecorationLine: 'underline', marginBottom: 100}}>Esvaziar</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{backgroundColor:'#55C66A', height: 50, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontFamily: 'roboto-regular', fontSize: 20}}>Continuar</Text>
            </TouchableOpacity>
          </View>

          </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
 
})
export default ModalForm;