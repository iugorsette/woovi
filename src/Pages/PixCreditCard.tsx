import { Box, Container, Paper, Typography } from '@mui/material'

import Footer from './../components/Footer'
import theme from '../theme'

export default function PixCreditCard() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Box textAlign="center" mb={2}>
          <img src="./logo.svg" alt="Woovi Logo" style={{ width: '100px' }} />
        </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
            borderRadius: '5px',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <img src="./qr_code.png" alt="QR Code"></img>
        </div>
        <Typography sx={{ fontWeight: 'bold' }} variant="h6" align="center">
          João, pague a entrada de R$ 15.300,00 pelo Pix
        </Typography>
        <Footer />
      </Paper>
    </Container>
  )
}
