import { StyleSheet , View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from '../GuessMyNumberGame/screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if (userNumber){
    screen = <GameScreen/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground 
          source={require('./assets/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImageContainer}
          >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  }, 
  backgroundImageContainer:{
    opacity:0.25
  }
});
