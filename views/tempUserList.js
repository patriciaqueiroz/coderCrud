import React from 'react';
import {View,Text, FlatList, Alert} from 'react-native';
import users from '../Data/users';
import {Avatar, Button, Icon, ListItem } from 'react-native-elements';



export default props => {
  console.warn(Object.keys(props)) // warn é utilizado para mostrar na tela algum comportamento ou propriedade que é passada no parametro

  function confirmUserDeletion (user){
      Alert.alert('Exluir Usuário', 'Deseja excluir o usuário?', [
          {
              text: 'Sim',
              onPress() {
                  console.warn('delete' + user.id)
              }
          },
          {
              text: 'Não'
          }
      ])
  }
  function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
                

            </>
        )

  }
  
  
  function getUserItem({ item: user})  { //criando uma função para pegar um item do usuário utilizando a desestruturação pegando um item do objeto. OBS pode-se renomear o item para ficar mais intuitivo, por isso foi colocado a sitaxe item : user
        return (
            
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate ('UserForm')} 
                rightElements={getActions(user)} >
            
                <Avatar 
                    rounded
                    source={{uri: user.avatarUrl}} />
                <ListItem.Content >
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
                               
        ) 
       }
    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()} 
                data={users}
                renderItem={getUserItem} // chamada da função getUserItem para renderizar em UserList todos os usuários cadastrados
            />
        </View>
    )
}