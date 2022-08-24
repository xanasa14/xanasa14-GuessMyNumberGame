import {StyleSheet,Text, View} from 'react-native';
function GameScreen(){
    return(
    <View style={styles.screen}>
        <Text>Opponents Guess</Text>
             {/*Guess*/ }
        <View>
           <Text>Higher or lower?</Text>
        
             {/*+ -*/} 
        </View>
        <View>{/*Log Rounds*/}</View>
    </View>
);}
export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 40,
    }
});