import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();

    // state reservado para pegar apenas o campo de confirmação de senha, que não irá para o backend
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    // oneWay data-binding

    // state que vai levar os dados para o backend
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    // state que recebera os dados de retorno do backend (devido a senha que volta criptografada)
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    // função para atualizar o campo de confirmação de senha
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    // mesma coisa do componente de Login, função que irá atualizar o state junto com o formulário
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label='Nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label='Usuário (e-mail)' variant='outlined' name='usuario' margin='normal' fullWidth required placeholder='digite um e-mail valido'/>
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} name="foto" label="URL da foto" fullWidth margin="normal"/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder='Digite pelo menos 8 caracteres' />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='botao-cadastro'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;