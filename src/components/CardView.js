import React from 'react';
import Visa from '../assets/svg/payments/visa';
import MasterCard from '../assets/svg/payments/mastercard';
import Amex from '../assets/svg/payments/american_express';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { varBounceIn } from './animate';

function CardView({ card }) {
  const getCardType = () => {
    try {
      if (card.cardNumber.startsWith('4')) return 'Visa';
      if (card.cardNumber.startsWith('5')) return 'Mastercard ';
      if (card.cardNumber.startsWith('3')) return 'American Express';
    } catch (e) {}
    return '';
  };

  const getCardValue = () => {
    try {
      if (card.cardNumber.startsWith('4')) return `Card ending **** ${card.cardNumber.slice(-4)}`;
      if (card.cardNumber.startsWith('5')) return `Card ending **** ${card.cardNumber.slice(-4)}`;
      if (card.cardNumber.startsWith('3')) return `Card ending **** ${card.cardNumber.slice(-4)}`;
    } catch (e) {}

    return '';
  };

  const getCardTypeImage = () => {
    try {
      if (card.cardNumber.startsWith('4')) return <Visa sx={{ height: 30, m: 0.2 }} />;
      if (card.cardNumber.startsWith('5')) return <MasterCard sx={{ height: 30, m: 0.2 }} />;
      if (card.cardNumber.startsWith('3')) return <Amex sx={{ height: 30, m: 0.2 }} />;
    } catch (e) {}
    return '';
  };

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          py: 0.2,
          my: 1,
          px: 1,
          width: '100%',
          bgcolor: 'grey.50012',
          textAlign: 'start'
        }}
      >
        <Stack direction="rows" spacing={4} sx={{ alignItems: 'center' }}>
          <motion.div variants={varBounceIn}>{getCardTypeImage()}</motion.div>
          <Stack
            direction="column"
            spacing={0}
            style={{ marginLeft: 10 }}
            sx={{ justifyContent: 'center', alignContent: 'center' }}
          >
            <Typography>{getCardType()}</Typography>
            <Typography>{getCardValue()}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default CardView;
