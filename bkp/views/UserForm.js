import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { css } from '../css/Css'

export default ({ route, navigation }) => {
    // export default props => {
    // console.warn (Object.keys(props.route.params))
    //const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        
        <View style={css.formForm}>
            <Text>Nome</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={name => setUser({ ...user, name })} // o onChangeText permite alterar o texto assim que o estado for alterado
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
            />

            <Text>Url do Avatar</Text>
            <TextInput
                style={css.inputForm}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe a Url do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />

        </View>

    )
}