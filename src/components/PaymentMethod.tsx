import React, { useEffect, useState } from 'react';
import { Box, Container, Paper, Typography, Divider } from '@mui/material';
import PaymentOptionsList from './PaymentOptionList';
import { getPaymentOptions } from './../services/paymentService';

interface PaymentOptionData {
    value: string;
    label: string;
    description: string;
    category: 'pix' | 'pix-parcelado';
  }
const PaymentMethod: React.FC = () => {
  const [options, setOptions] = useState<PaymentOptionData[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    getPaymentOptions().then((data) => setOptions(data));
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Box textAlign="center" mb={2}>
          <img src="./Logo.svg" alt="Woovi Logo" style={{ width: '100px' }} />
        </Box>
        <Typography variant="h6" align="center">
          João, como você quer pagar?
        </Typography>
        <PaymentOptionsList options={options} selectedOption={selectedOption} onOptionChange={handleOptionChange} />
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="caption" display="block" align="center">
          Pagamento 100% seguro via <strong>woovi</strong>
        </Typography>
      </Paper>
    </Container>
  );
};

export default PaymentMethod;
