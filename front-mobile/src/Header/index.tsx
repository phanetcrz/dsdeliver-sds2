import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Header() {
  const navigator = useNavigation();

  const handleOnPress = () =>{
    navigator.navigate('Home');
  }
  
  return (
    // TouchableWithoutFeedbac - poder capturar um evento de um click na View   
    <TouchableWithoutFeedback onPress={handleOnPress}>  
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} /> 
        <Text style={styles.text}>DS Delivery</Text>     
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,   
    paddingTop:50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,    
                            // multiplica o valor -0.015em por 16 para converter em pixel
    color: '#FFF',
    marginLeft:15,
    fontFamily: 'OpenSans_700Bold'
  }
});


export default Header;