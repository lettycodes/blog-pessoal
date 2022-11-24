import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { GitHub } from '@material-ui/icons';
import'./Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    var footerComponent;

    if(token != "") {
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12} className='footer'>
                        <Box className='footer-social'>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" align="center" gutterBottom className='textos'>Me siga nas redes sociais </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.github.com/lettycodes/" target="_blank">
                                    <GitHub className='redes'/>
                                </a>
                                <a href="https://www.instagram.com/lehpaixao/" target="_blank">
                                    <InstagramIcon className='redes'/>
                                </a>
                                <a href="https://www.linkedin.com/in/silva-leticia/" target="_blank">
                                    <LinkedInIcon className='redes'/>
                                </a>
                            </Box>
                        </Box>
                        <Box className='footer-copyright'>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2022 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="https://brasil.generation.org" className='generation'>
                                    <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
            </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;