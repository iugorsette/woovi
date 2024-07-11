import React, { useEffect, useState } from 'react'
import { Box, Container, Paper, Typography, Divider } from '@mui/material'
import PaymentOptionsList from './PaymentOptionList'
import { getPaymentOptions } from './../services/paymentService'
import { PaymentOptionData } from '../types/payment'
import Footer from './Footer'

const PaymentMethod: React.FC = () => {
  const [options, setOptions] = useState<PaymentOptionData[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')

  useEffect(() => {
    getPaymentOptions().then((data) => setOptions(data))
  }, [])

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Box textAlign="center" mb={2}>
          <img src="./logo.svg" alt="Woovi Logo" style={{ width: '100px' }} />
        </Box>
        <Typography sx={{ fontWeight: 'bold' }} variant="h6" align="center">
          João, como você quer pagar?
        </Typography>
        <PaymentOptionsList
          options={options}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <Divider sx={{ marginY: 2 }} />
        <Footer />
      </Paper>
    </Container>
  )
}

export default PaymentMethod
