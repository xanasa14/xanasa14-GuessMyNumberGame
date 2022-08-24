import { StyleSheet , View, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from '../GuessMyNumberGame/screens/StartGameScreen';
export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
    <ImageBackground 
          source={require('./assets/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImageContainer}
          >

        <StartGameScreen/>
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
