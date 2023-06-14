import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGetDataQuery,useGetDataByIdQuery, useAddNewPostMutation,useDeletePostMutation} from '../../src/services/GetApiCall';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';


const HomeScreen = () => {
  useEffect(()=>{
    GoogleSignin.configure();
  },[])

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user infooo',userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
        // play services not available or outdated
      } else {
        console.log(error)
        // some other error happened
      }
    }
  };

  const {data,isError,isFetching,isLoading,isSuccess} = useGetDataQuery();
  const res = useGetDataByIdQuery(1);
  // console.log('databyid',JSON.stringify(res))
  const [addPost]= useAddNewPostMutation();
  const [deletePost] = useDeletePostMutation();

  const addNewPost = async()=>{
    const response = await addPost({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
  })
  console.log('addingDATa',response)
  }
  const deleteData = async() =>{
    const data = await deletePost('6')
    console.log('deleteData',data)

  }
  // console.log('mydata: '+ JSON.stringify(data)+' '+ isError +' '+isSuccess +' '+isLoading+" "+isFetching)
  return (
    <SafeAreaView>
    <View >
      <Text>API</Text>
      <Button title="Api Call" onPress={()=>{addNewPost()}} />
      <TouchableOpacity style ={styles.btnStyle}
      onPress={googleLogin}
      >
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Google Login</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  );
};



const styles = StyleSheet.create({
  btnStyle:{
    margin:30,
    height:48,
    width:200,
    backgroundColor:'#007bef',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
    
  }
});
export default HomeScreen;