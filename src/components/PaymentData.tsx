import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import theme from '../theme'
import Subtitle from './Text/Subtitle'

export default function PaymentComponent() {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <Box
      p={1}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '1rem',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="body2"
          color={theme.palette.grey[900]}
          fontWeight="bold"
        >
          Prazo de pagamento:
        </Typography>
        <Typography fontWeight="bold" variant="subtitle2">
          15/12/2021 - 08:17
        </Typography>
      </Box>
      <RadioGroup
        aria-label="payment-method"
        name="payment-method"
        value={selectedOption}
        onChange={handleOptionChange}
        sx={{
          width: 1,
        }}
      >
        <FormControlLabel
          value="pix"
          control={<Radio />}
          labelPlacement="end"
          label={
            <Box display="flex" gap={8}>
              <Typography>1ª entrada no Pix </Typography>
              <Typography flexGrow={1} color="textPrimary" fontWeight="bold">
                R$ 15.300,00
              </Typography>
            </Box>
          }
        />
        <FormControlLabel
          value="card"
          control={<Radio />}
          label={
            <Box
              display="flex"
              justifyContent="space-between"
              gap={13}
              width={1}
            >
              <Typography>2ª no cartão</Typography>
              <Typography color="textPrimary" fontWeight="bold">
                R$ 15.300,00
              </Typography>
            </Box>
          }
        />
      </RadioGroup>
      <Divider />
      <Box mt={1} display="flex" justifyContent="space-between">
        <Typography variant="body2">CET: 0,5%</Typography>
        <Subtitle text="Total: R$ 30.600,00" />
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<img src="./expand_more.svg" alt="expand_more" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body2">Como funciona?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            A primeira parcela é paga pelo Pix e a segunda no cartão de crédito.
            O CET é de 0,5% e o total é de R$ 30.600,00.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color={theme.palette.grey[900]}>
          Identificador:
        </Typography>
        <Typography variant="body2" color="textPrimary" fontWeight="bold">
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
    </Box>
  )
}
