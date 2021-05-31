import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Main from "./src/index";
export default function App() {
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
    <Main />
  );
}

