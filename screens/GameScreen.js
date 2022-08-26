import { useState, useEffect } from 'react';
import {StyleSheet,Text, View, Alert} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import {Ionicons} from '@expo/vector-icons';

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
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if(currentGuess=== userNumber){
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver]);
    

    function nextGuessHandler(direction){ 
        // direction => lower , greater
        
        if((direction==='lower' && currentGuess < userNumber) ||
            (direction==='greater' && currentGuess > userNumber)){
                Alert.alert("Don't lie!", 'You know that this is wrong...', 
                {text:'Sorry', style:'cancel'}
                );
                return;
            } 
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
        <Title style={styles.title}>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
           <InstructionText  style={  styles.instructionText}>Higher or lower?</InstructionText>
           <View style={styles.buttonsContainer}>
                <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color="white"/>
                </PrimaryButton>
                <PrimaryButton style={styles.buttonContainer} onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color="white"/>
                </PrimaryButton> 
            </View>
        </Card>
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
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{

        flex:1
    },
    instructionText:{
        marginBottom:12
    }
    
});