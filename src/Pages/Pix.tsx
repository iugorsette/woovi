import { Box, Container, Paper } from '@mui/material'

import Footer from './../components/Footer'
import theme from '../theme'
import BasicButtons from '../components/Button'
import PaymentComponent from '../components/PaymentData'
import Title from '../components/Text/Title'

export default function Pix() {
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
        }}
      >
        <Box textAlign="center" mb={2}>
          <img src="./logo.svg" alt="Woovi Logo" style={{ width: '100px' }} />
        </Box>
        <Title text="João, pague a entrada de  R$ 15.300,00 pelo Pix" />
        <Box
          style={{
            marginBottom: '1rem',
            marginTop: '1rem',
            padding: '0.25rem',
            borderRadius: '10px',
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <img src="./qr_code.png" alt="QR Code"></img>
        </Box>
        <BasicButtons 
          text='Clique para copiar QR CODE'
          icon='./copy.png'
        />

        <PaymentComponent />

        <Footer />
      </Paper>
    </Container>
  )
}
