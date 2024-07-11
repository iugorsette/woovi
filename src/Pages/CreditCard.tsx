import { Box, Container, Paper } from '@mui/material'

import Footer from './../components/Footer'

import BasicButtons from '../components/Button'
import PaymentComponent from '../components/PaymentData'
import Title from '../components/Text/Title'
import CreditCardInput from '../components/Input/CreditCard'
import ValidateInput from '../components/Input/Validate'
import NameInput from '../components/Input/Name'
import CPFInput from '../components/Input/CPF'
import CVVInput from '../components/Input/CVV'
import InstallmentsInput from '../components/Input/Installments'

export default function CreditCard() {
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          marginTop: 2,
          gap: '1rem',
        }}
      >
        <Box textAlign="center" mb={2}>
          <img src="./logo.svg" alt="Woovi Logo" style={{ width: '100px' }} />
        </Box>
        <Title text="João, pague o restante em 1x no cartão" />
        <NameInput
          label="Nome completo"
          placeholder="Como no cartão"
          size="big"
        />
        <CPFInput />
        <CreditCardInput />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <ValidateInput />

          <CVVInput />
        </Box>
        <InstallmentsInput
          options={['1x de R$ 15.300,00', '2x de R$ 7.650,00']}
        />

        <BasicButtons text="Pagar" full />

        <PaymentComponent />

        <Footer />
      </Paper>
    </Container>
  )
}
