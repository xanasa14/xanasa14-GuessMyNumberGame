import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {useState} from 'react'; 
import Colors from '../constants/colors';
function StartGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(EnteredText){

        setEnteredNumber(EnteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            //Show alert
            Alert.alert('Invalid Number!!', 'Number has to be between 1 and 99.',
            [{text:'Okay', style:'destructive', onPress:resetInputHandler }]);
            return;
        }
    
        onPickedNumber(chosenNumber);
    }
return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2}
            keyboardType="number-pad"            
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
            />
        <View style={styles.buttonsContainer}>
    
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm </PrimaryButton>
            </View>
        </View>
    </View>
);
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center' ,
        alignItems: 'center' ,
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor:'#000000',
        shadowOffset:{width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput:{
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
});