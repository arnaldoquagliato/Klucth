import React, {useContext, useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import imgBackground from './assets/images/grocery-header.jpg'
import Card from "../src/components/Card";
import CardImage from '../src/components/CardImage'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const products = [{
  "id": 2,
  "description": "Qualy",
  "image":"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
  "price": 5.29,
   "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
},
{
  "id": 3,
  "description": "Qualy",
  "image":"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
  "price": 5.29,
   "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
},
{
  "id": 4,
  "description": "Qualy",
  "image":"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
  "price": 5.29,
   "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
},]
const App = () => {
  const [text, setText] = useState('')

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
                  <Text style={{color: 'white'}}>0</Text>
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
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#A8D6B3" />
        </View>

      </View>
      
      <FlatList 
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem ={({ item }) => (
            <Card />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />  
        <View style={styles.contentBestSeller}>
          <View style={styles.contentBestSellerTitle}>
            <Text style={styles.contentBestSellerText}>
              Produtos Mais Vendidos
            </Text>
          <View style={styles.contentSubtitlePlus}>
            <Text style={styles.contentSubtitlePlusText}>Ver mais</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#A8D6B3" />
          </View>
          </View>

          <FlatList 
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem ={({ item }) => (
            <CardImage />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />  
        </View>
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
    width: windowWidth/20,
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
    marginTop: windowHeight/7,
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
    color: "#85B997"
  },
  contentBestSeller:{
    flexDirection: 'row',
  },
  contentBestSellerTitle:{

  },

});

export default App;
