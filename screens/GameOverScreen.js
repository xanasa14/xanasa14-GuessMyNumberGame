import {Text, View, StyleSheet, Image} from 'react-native'
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
function GameOverScreen (){
    return(
        <View>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer} >
            <Image
                style={styles.image} 
                source={require('../assets/images/success.png')} />
        </View>
            <Card>
                <Text>Game is over</Text>
            </Card>
        </View>
    )
}

export default GameOverScreen;
const styles = StyleSheet.create({
    imageContainer:{
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth:3,
        borderColor: Colors.primary800,
        margin: 36, 
        overflow:'hidden'

    },
    image:{
        width:'100%',
        height:'100%'
    }

});