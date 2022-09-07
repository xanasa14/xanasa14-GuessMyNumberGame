import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer} >
            <Image
                style={styles.image} 
                source={require('../assets/images/success.png')} />
        </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>
            {roundsNumber}</Text> rounds to 
            guess the number <Text style={styles.highlight}>
            {userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    rootContainer:{
        flex:1, 
        padding:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer:{
        width: deviceWidth < 380 ? 150 : 300, 
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor: Colors.primary800,
        margin: 36, 
        overflow:'hidden'

    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 23, 
        textAlign:'center',
        marginBottom: 24
    },
    highlight:{
        fontFamily: 'open-sans-bold',
        color:Colors.primary500
    }
});