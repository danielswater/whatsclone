import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
    <View style={ estilo.container }>
        <View style={ estilo.forms }>
            <TextInput style={ estilo.textInput } placeholder="Nome"/>
            <TextInput style={ estilo.textInput } placeholder="E-mail"/>
            <TextInput style={ estilo.textInput } placeholder="Senha"/>
        </View>
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor:'#115e54' }}>
                <Button color="#ffffff" title="CADASTRAR" onPress={ () => false }/>
            </View>
        </View>
    </View>
)


const estilo = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
    },
    forms: {
        flex: 4,
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 20,
        height: 45
    }
})