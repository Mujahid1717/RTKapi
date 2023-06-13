import { StyleSheet, Text, View } from 'react-native';
import { useGetDataQuery,useGetDataByIdQuery, useAddNewPostMutation,useDeletePostMutation} from '../../src/services/GetApiCall';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => {
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
      <Button title="Api Call" onPress={()=>{deleteData()}} />
    </View>
    </SafeAreaView>
    
  );
};



const styles = StyleSheet.create({

});
export default HomeScreen;