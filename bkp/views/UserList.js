import React, { useContext } from 'react';
import {View,Text, FlatList, Alert} from 'react-native';
// import users from '../Data/users'; //não é necessario já que se utilizou do ContextAPI
import {Avatar, Button, Icon } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import UsersContext from '../Data/UsersContext';



export default props => {

    const {state, dispatch} = useContext(UsersContext) //posso criar um objeto ou utilizar a desestruturacao para acessar direto 
    //console.warn(Object.keys(state))

  //console.warn(Object.keys(props)) // warn é utilizado para mostrar na tela algum comportamento ou propriedade que é passada no parametro

  function confirmUserDeletion (user) {
      Alert.alert('Exluir Usuário', 'Deseja excluir o usuário?', [
          {
              text: 'Sim',
              onPress() {
                 // console.warn('delete' + user.id)
                 dispatch ({
                     type: 'delete user',
                     payload: user,
                 })
              }
          },
          {
              text: 'Não'
          }
      ])
  }

  
  function getUserItem({ item: user})  { //criando uma função para pegar um item do usuário utilizando a desestruturação pegando um item do objeto. OBS pode-se renomear o item para ficar mais intuitivo, por isso foi colocado a sitaxe item : user
   // console.warn(getUserItem)
        return (
            
            <ListItem
                
                bottomDivider
                onPress={() => props.navigation.navigate ('UserForm')} 
            >
                <Avatar 
                    rounded
                    source={{uri: user.avatarUrl}} />

                <ListItem.Content >
                        <ListItem.Title >{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                    <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />

                
            </ListItem>
               
                               
        ) 
       }
    return(
        <View>
            <FlatList
                
                keyExtractor={user => user.id.toString()} 
                data={state.users}
                renderItem={getUserItem} // chamada da função getUserItem para renderizar em UserList todos os usuários cadastrados
            />
        </View>
    )
}