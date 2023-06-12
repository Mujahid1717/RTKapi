import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1'


const App = () => {
  const [loader,setLoader] = useState(true);
  const [data,setData] = useState(null);
  const [error,setError] = useState();
  

  useEffect(()=>{
    const apiCall = async () => {
      try{
      setLoader(true)
      let response = await (await fetch(BASE_URL)).json()
      console.log(response, 'responsssee')
      setData(response)
      setLoader(false)
      }
      catch{
        setError(error)
        setLoader(false)
      }
    }
    apiCall()
    
  },[])
  if (loader){
    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
      <ActivityIndicator color = 'black' size='large'></ActivityIndicator>
    </View>
  }

  return (
    <SafeAreaView>
    <View>
      <Text style={{color:'black',fontSize:20,textAlign:'center',margin:20}}>{data?.title}</Text>
    </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({

});
export default App;