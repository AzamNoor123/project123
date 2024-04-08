
import { Text, View , Button, SafeAreaView, StyleSheet} from 'react-native'

const HomeScreen =({navigation})=> {
  
    return (
        <SafeAreaView>
      <View style={styles.container}> 
       <Button title='Web View' onPress={()=> navigation.navigate('Web')}/>
       <Button title='PDF View' onPress={()=> navigation.navigate('pdf')}/>
       
      </View>
      <View style={styles.second}>
       <Button title='Weather' onPress={()=> navigation.navigate('weather')}/>
       <Button title='Map View' onPress={()=> navigation.navigate('Map')}/>
       </View>
      </SafeAreaView>
    )
  
}

export default HomeScreen
const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:50,
        
    
    },

    second:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
    },
})
