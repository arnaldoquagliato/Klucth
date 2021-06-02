import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Main from "./src/index";

import { ProductsContext } from "./src/context/ProductsContext";
export default function App() {
  const [quantidade, setQuantidade] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [carrinho, setCarrinho] = useState([{
    produto:{},
    quantidade:0
  }])

  const [fontLoaded, setFontLoaded] = useState(false) 

  const fetchFonts = () => {
    return Font.loadAsync({
      'roboto-regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
      });
    };

    if(!fontLoaded) {
      return(
        <AppLoading 
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
          onError={console.warn}
          />
      );
    }
  return (
    <ProductsContext.Provider value={{quantidade, setQuantidade, totalPrice, setTotalPrice, carrinho, setCarrinho}}>
      <Main />
    </ProductsContext.Provider>
  );
}

