import { StyleSheet , View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from '../GuessMyNumberGame/screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [fontsLoad] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if(!fontsLoad){
    return <AppLoading/>;
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber){
    screen = <GameOverScreen />
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
