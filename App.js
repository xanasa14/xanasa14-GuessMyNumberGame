import { StyleSheet , View, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from '../GuessMyNumberGame/screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
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
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
    <ImageBackground 
          source={require('./assets/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImageContainer}
          >

        {screen}
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
