import React from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';  

export default props => (
    <Router>
        <Stack>
            <Scene key="formLogin" titleStyle={{alignSelf: 'center'}} component={FormLogin} initial title="Login"></Scene>
            <Scene key="formCadastro" titleStyle={{alignSelf: 'center'}} component={FormCadastro} title="Cadastro"></Scene>
        </Stack>
    </Router>
);