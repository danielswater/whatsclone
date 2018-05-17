import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const formLogin = props => {
    console.log(props)
    return (
        <View style={ estilo.container }>
        <View style={ estilo.titulo }>
            <Text style={ estilo.tituloTxt }>Swater's App</Text>
        </View>
        <View style={ estilo.login }>
            <TextInput value={ props.email } style={ estilo.textInput } placeholder="E-mail" />
            <TextInput value={ props.senha } style={ estilo.textInput } placeholder="Senha" />
            <TouchableOpacity onPress={ ()=> { Actions.formCadastro()} }>
                <Text style={ estilo.texto }>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableOpacity>
            
        </View>
        <View style={ estilo.botao }>
            <View style={{ backgroundColor: '#115e54' }}>
                <Button title="ACESSAR" color="#ffffff" onPress={() => false} />
            </View>
        </View>
    </View>
    )
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, null)(formLogin)

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
    },
    titulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        flex: 2
    },
    botao: {
        flex: 2
    },
    tituloTxt: {
        fontSize: 25,
    },
    textInput: {
        fontSize: 20,
        height: 45
    },
    texto: {
        fontSize: 20
    }
})