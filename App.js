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
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if(!fontsLoaded){
    return (<AppLoading/>);
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;
  if (userNumber){
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);
  }
  if (gameIsOver && userNumber){
    screen = (<GameOverScreen
    //roundsNumber, userNumber, onStartNewGame}
     userNumber={ userNumber} 
     roundsNumber={guessRounds}
     onStartNewGame={startNewGameHandler}/>);
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
