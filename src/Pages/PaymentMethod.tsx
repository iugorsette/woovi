import React, { useEffect, useState } from 'react'
import { Box, Container, Paper } from '@mui/material'

import { PaymentOptionData } from '../types/payment'

import { getPaymentOptions } from './../services/paymentService'

import PaymentOptionsList from './../components/PaymentOptionList'
import Footer from './../components/Footer'
import Title from '../components/Text/Title'

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
        <Title text="João, como você quer pagar?" />
        <PaymentOptionsList
          options={options}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <Footer />
      </Paper>
    </Container>
  )
}

export default PaymentMethod
