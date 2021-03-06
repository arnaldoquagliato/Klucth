import React, {useContext, useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { createServer } from "miragejs";


import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



import imgBackground from './assets/images/grocery-header.jpg'
import Card from "../src/components/Card";
import CardImage from '../src/components/CardImage'
import ModalForm from "../src/components/ModalForm";

import { Dimensions } from 'react-native';
import { ProductsContext } from './context/ProductsContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

if(window.server){
  server.shutdown();
}

window.server = createServer ({
  routes() {
    this.namespace = "api"

    this.get("/products", () => {
      return {
        "products": [
          {
            "id": 1,
            "description": "BOMBRIL",
            "image":"https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg",
            "price": 1.69,
            "date": "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)"
          },
          {
            "id": 2,
            "description": "Qualy",
            "image":"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
            "price": 5.29,
             "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
          },
          {
            "id": 3,
            "description": "Nescau",
            "image":"https://http2.mlstatic.com/relaco-de-produtos-c-eanncmfotos-16-milhoes-de-produtos-D_NQ_NP_808515-MLB25247269155_122016-F.jpg",
            "price": 10.25,
            "date": "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)"
          },
          {
            "id": 4,
            "description": "Leite Italac",
            "image":"https://static.carrefour.com.br/medias/sys_master/images/images/h75/hcb/h00/h00/9688613912606.jpg",
            "price": 11.3,
            "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
          },
          {
            "id": 5,
            "description": "Presunto Sadia",
            "image":"data:image/jpeg;base64,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",
            "price": 100.02,
            "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
          }
        ]
       }
    })
  },
})

const App = () => {
  const [products, setProducts] = useState([])
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)

  const {quantidade, totalPrice, setCarrinho} = useContext(ProductsContext)

  const handleModal = () => {
    setShowModal(!showModal);
    setCarrinho(products)
  }

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        let res = await fetch("/api/products");
        let data = await res.json();
        data.error ? console.log(data.error) : setProducts(data.products);
        setCarrinho(data.products)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts()
  }, [])

  
  const onChangeText = (text) => {
    setText(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={ imgBackground } style={styles.backgrounImage}>
          <View style={styles.contentHeader}>
            <View style={styles.backButton}>
              <Ionicons name="md-chevron-back-sharp" size={24} color="white"/>
            </View>
              <View style={styles.headerIconPerquisa}>
                <EvilIcons name="search" size={24} color="#C3C3C3" />
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Buscar produtos ou categorias"
                    maxLength={25}
                  />
                </View>
                <View style={styles.backgroundIconInput}>
                  <Ionicons name="color-wand-outline" size={24} color="white" />
                </View>
              </View>
              <View  style={styles.headerIconQuantidade}>
                <View style={styles.headerIconQuantidadeValue}>
                  <Text style={{color: 'white'}}>{quantidade}</Text>
                </View>
                <View style={styles.headerIconQuantidadeIcon}>
                <FontAwesome5 name="shopping-basket" size={24} color="white" />
                </View>
              </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.contentSubtitle}>
        <View style={styles.contentSubtitleText}>
          <Text style={{ fontSize:24, fontFamily: 'roboto-bold', color: '#656668'}}>Ofertas</Text>
        </View>
        <View style={styles.contentSubtitlePlus}>
          <Text style={styles.contentSubtitlePlusText}>Ver mais</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#56C66A" />
        </View>

      </View>
      
      <FlatList 
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem ={({ item }) => (
            <Card 
              name={item.description}
              uriImg={item.image}
              price={item.price}
              promoPrice={item.price}
              size={item.price}
              id={item.id}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />  
          
        <View style={styles.contentBestSeller}>
            <Text style={styles.contentBestSellerText}>
              Produtos Mais Vendidos
            </Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
              <Text style={styles.contentSubtitlePlusText}>Ver mais</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#56C66A" />
            </View>
          </View>

          <FlatList 
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem ={({ item }) => (
            <CardImage 
              uriImg={item.image}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />  
        <TouchableOpacity style={styles.contentButtonCesta} onPress={handleModal}>
          <View style={styles.valueQuantidadeItens}>
            <Text style={{color: 'white', fontFamily: 'roboto-regular', fontSize: 18, padding: 5, left: 10 }}>
              {quantidade}
            </Text>
          </View>
            <Text style={{color: 'white', fontFamily: 'roboto-bold', fontSize: 20}}>
              Ver cesta
            </Text>

            <Text style={{color: 'white', fontFamily: 'roboto-regular', fontSize: 18,marginRight: 10}}>
              R$ {(totalPrice).toFixed(2)}
            </Text>
        </TouchableOpacity>

        <ModalForm modalVisible={showModal} handleModal={handleModal}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: '#F8F9FB'
  },
  header:{
    flex: 1,
    marginBottom: windowHeight/4.5
  },
  backgrounImage:{
    resizeMode: 'cover',
    justifyContent: "center",
    height: 100
  },
  backButton:{
    height:  windowHeight/25,
    width: windowWidth/14,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'black',
    opacity: 0.6,
    paddingTop: 2,
  },
  contentHeader:{
    flex: 1,
    marginTop: windowHeight/20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  headerIconPerquisa:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    padding: 10
  },
  input:{
    fontFamily: 'Roboto',

  },
  backgroundIconInput:{
    backgroundColor: 'black',
    textAlign: 'center',
    height:  windowHeight/25,
    width: windowWidth/14,
    borderRadius: 20,
    opacity: 0.5,
    bottom: 5,
    left:8,
    padding:2
  },
  headerIconQuantidade:{
    flexDirection: 'row-reverse',
  },
  headerIconQuantidadeIcon:{
    backgroundColor: 'black',
    opacity: 0.6,
    paddingTop: 2,
    height:  windowHeight/20,
    width: windowWidth/12,
    borderRadius: 20,
    padding: 3,
    paddingTop: 5,
    marginRight: 10
  },
  headerIconQuantidadeValue:{
    backgroundColor: '#434946',
    paddingTop: 2,
    height:  windowHeight/35,
    width: windowWidth/15,
    borderRadius: 20,
    padding: 5,
    top: 1,
    left: 3,
    position: 'absolute',
    zIndex: 1
  },
  contentSubtitle:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: windowHeight/6,
    position: 'absolute'
  },
  contentSubtitleText:{
    marginLeft: 10,
  },
  contentSubtitlePlus:{
    flexDirection: 'row',
    marginTop:  windowHeight/100,
    left: windowWidth/1.8
  },
  contentSubtitlePlusText:{
    fontFamily: 'roboto-bold', 
    color: "#56C66A"
  },
  contentBestSeller:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentBestSellerTitle:{

  },
  contentBestSellerText:{
    fontFamily: 'roboto-bold',
    color: "#575A5C",
    fontSize: 20,
    marginLeft: 15,
  },
  contentButtonCesta:{
    height: 60,
    width: '100%',
    backgroundColor: '#56C66A',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  valueQuantidadeItens:{
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: '#4AA857',
  }

});

export default App;
