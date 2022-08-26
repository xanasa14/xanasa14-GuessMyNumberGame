import { useState } from 'react';
import {StyleSheet,Text, View} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max,exclude){
    const rndNum = Math.floor(Math.random()*(max-min)) + min;
    if (rndNum ===exclude){
        return generateRandomBetween(min, max,exclude);
    }
    else{
        return rndNum
    }
}
let minBoundary = 1;
let maxBoundary = 99;

function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(minBoundary,maxBoundary,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    function nextGuessHandler(direction){ // direction => lower , greater
        if(direction ==='lower'){
            maxBoundary = currentGuess;
    
        }
        else{
            minBoundary = currentGuess+1;
        }
        console.log(minBoundary,maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    
    }
    
    return(
    <View style={styles.screen}>
        <Title style={styles.title}>Opponents Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        <View>
           <Text>Higher or lower?</Text>
           <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton> 
            </View>
        </View>
        <View>{/*Log Rounds*/}</View>
    </View>
);}
export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 40,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    },
});