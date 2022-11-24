import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { Box } from '@mui/material';


function TabPostagem() {

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className='tab'>
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1"/>
                        <Tab label="Sobre mim" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo-sobre">Sobre mim</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Nunca sei o que falar quando o assunto é falar sobre mim... Mas vamos lá! Sou a Letícia, tenho 28 anos e atualmente estou terminando o bootcamp de Java Full-Stack da Generation Brasil. Espero em breve conseguir meu emprego na área da programação. 🤗 Ah, agora em que estou escrevendo esse texto, é um domingo (dia 13/11/2022) e estou escutando 🎵 Imagine Dragons - Bad Liar 🎵 nesse exato momento! Uma curiosidade sobre mim: amo fazer as coisas ouvindo música, principalmente quando o assunto é programar. 💜</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;