import React from 'react';
import { MotionContainer, varBounceIn, varFadeInDown } from '../../components/animate';
import { Alert, Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LoginImage from '../../assets/img/login.png';
import LoginForm from './LoginForm';
import useDroidDialog from '../../hooks/useDroidDialog';

function UnauthorizedAccess() {

  const { onOpen } = useDroidDialog();

  return (
    <>
      <Container sx={{p: 5}}>
        <MotionContainer initial='initial' open>
          <Box sx={{ maxWidth: 680, margin: 'auto', textAlign: 'center' }}>

            <Stack spacing={3} sx={{ px: 4 }}>
              <Alert severity='success'>{data.message}</Alert>
            </Stack>

            <motion.div variants={varBounceIn}>
              <img src={LoginImage} style={{ height: 200, marginTop: 3, marginBottom: 3 }}  alt='login'/>
            </motion.div>

            <motion.div variants={varFadeInDown}>
              <Paper sx={{ p: 2 }}>
                <Typography variant='body1'>
                  Unauthorized access please login
                </Typography>
              </Paper>
            </motion.div>

            <motion.div variants={varBounceIn}>
              <Button
                onClick={() => onOpen('', <LoginForm />)}
                size='large'
                variant='contained'
                sx={{ m: 2 }}>
                Please Login
              </Button>
            </motion.div>
          </Box>
        </MotionContainer>
      </Container>
    </>
  );
}

export default UnauthorizedAccess;