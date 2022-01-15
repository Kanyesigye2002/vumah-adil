import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Radio,
  Button,
  Collapse,
  TextField,
  Typography,
  RadioGroup,
  CardHeader,
  CardContent,
  FormHelperText,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  InputAdornment,
  IconButton
} from '@mui/material';
//
import { MHidden } from '../../components/@material-extend';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { varBounceIn } from '../../components/animate';
import Visa from '../../assets/svg/payments/visa';
import Amex from '../../assets/svg/payments/american_express';
import Paypal from '../../assets/svg/payments/paypal';
import MasterCard from '../../assets/svg/payments/mastercard';
import React from 'react';
import AddBankCard from '../account/AddBankCard';
import useDroidDialog from '../../hooks/useDroidDialog';
import useAuth from '../../hooks/useAuth';
import CardView from '../../components/CardView';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// ----------------------------------------------------------------------

const OptionStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2.5),
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('all'),
  border: `solid 1px ${theme.palette.grey[500_32]}`
}));

// ----------------------------------------------------------------------

CheckoutPaymentMethods.propTypes = {
  formik: PropTypes.object
};

export default function CheckoutPaymentMethods({ formik }) {
  const { onOpen } = useDroidDialog();

  const { user } = useAuth();

  const { errors, touched, values, getFieldProps, setValues } = formik;

  const onChangeCard = (event) => {
    setValues({
      ...values,
      card: {
        id: event.target.value.id,
        cardNumber: event.target.value.cardNumber,
        cardName: event.target.value.cardName,
        cardExpired: event.target.value.cardExpired
      }
    });
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Payment options" sx={{ textAlign: 'start' }} />
      <CardContent>
        <RadioGroup row {...getFieldProps('payment')}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <OptionStyle
                sx={{
                  ...(values.payment === 'credit_card' && {
                    boxShadow: (theme) => theme.customShadows.z8
                  }),
                  flexWrap: 'wrap'
                }}
              >
                <FormControlLabel
                  value="credit_card"
                  control={<Radio checkedIcon={<Icon icon={checkmarkCircle2Fill} />} />}
                  label={
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '100%' }}>
                      <Box sx={{ ml: 1 }}>
                        <Typography variant="subtitle2">Credit / Debit Card</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          We support Mastercard, Visa, American Express, and Stripe.
                        </Typography>
                      </Box>
                      <Box sx={{ flexGrow: 1 }} />
                      <MHidden width="smDown">
                        <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ mr: 1 }}>
                            <Visa sx={{ height: 15, m: 0.1 }} />
                          </Box>
                          <Box>
                            <Amex sx={{ height: 15, m: 0.1 }} />
                          </Box>
                          <Box>
                            <MasterCard sx={{ height: 15, m: 0.1 }} />
                          </Box>
                        </Box>
                      </MHidden>
                    </Stack>
                  }
                  sx={{ flexGrow: 1, py: 3 }}
                />

                <Collapse in={values.payment === 'credit_card'} sx={{ width: '100%' }}>
                  {user.paymentCards !== undefined && (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Payment Card</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Payment Card"
                        onChange={onChangeCard}
                      >
                        {user.paymentCards.map((card) => (
                          <MenuItem key={card.id} value={card}>
                            <CardView card={card} />
                            {/*{getCardType(card)}*/}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}

                  <Button
                    id="add-card"
                    type="button"
                    size="small"
                    startIcon={<Icon icon={plusFill} width={20} height={20} />}
                    sx={{ my: 3 }}
                    onClick={() => {
                      onOpen('Add Card', <AddBankCard />);
                    }}
                  >
                    Add new card
                  </Button>
                </Collapse>
              </OptionStyle>
            </Grid>
            <Grid item xs={12}>
              <OptionStyle>
                <FormControlLabel
                  value="paypal"
                  control={<Radio checkedIcon={<Icon icon={checkmarkCircle2Fill} />} />}
                  label={
                    <Box sx={{ ml: 1 }}>
                      <Typography variant="subtitle2">Paypal</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        You will be redirected to PayPal website to complete your purchase securely.
                      </Typography>
                    </Box>
                  }
                  sx={{ flexGrow: 1, py: 3 }}
                />
                <MHidden width="smDown">
                  <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 1 }}>
                      <Paypal sx={{ height: 20, m: 0.1 }} />
                    </Box>
                  </Box>
                </MHidden>
              </OptionStyle>
            </Grid>
          </Grid>
        </RadioGroup>

        {errors.payment && (
          <FormHelperText error>
            <Box component="span" sx={{ px: 2 }}>
              {touched.payment && errors.payment}
            </Box>
          </FormHelperText>
        )}
      </CardContent>
    </Card>
  );
}
