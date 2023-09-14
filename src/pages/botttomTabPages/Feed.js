import { StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Feed = () => {

  const navigation = useNavigation();
  
  return (
    <Button title="Começar" onPress={()=>{navigation.navigate('LivePageAudience')}}/>
  )
}

export default Feed

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})