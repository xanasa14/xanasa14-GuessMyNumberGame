import {StyleSheet, View, Text, Pressable} from 'react-native';

function PrimaryButton({children, onPress}){
    
    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
            onPress={onPress} 
            android_ripple={{color:'644202'}}
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}  >
            
                <Text style={styles.buttonText}>
                    {children}
                </Text>
        </Pressable>
    </View>

);}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4, 
        overflow:'hidden',
        borderColor:'white',
        
    },
    buttonInnerContainer: {
        borderColor: 'white',
        borderWidth:2,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin:4,
        elevation:2,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:0.75,
        
    }
});