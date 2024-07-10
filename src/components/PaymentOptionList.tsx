import './style.css'
import React from 'react'
import { FormControl, RadioGroup, Typography, Box, Chip } from '@mui/material'
import PaymentOption from './PaymentOption'

interface PaymentOptionData {
  value: string
  label: string
  description: string
  category: 'pix' | 'pix-parcelado'
}

interface PaymentOptionsListProps {
  options: PaymentOptionData[]
  selectedOption: string
  onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PaymentOptionsList: React.FC<PaymentOptionsListProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
  const pixOptions = options.filter((option) => option.category === 'pix')
  const pixParceladoOptions = options.filter(
    (option) => option.category === 'pix-parcelado'
  )

  return (
    <FormControl component='fieldset'>
      <Chip label='Pix' size='small' />
      <RadioGroup
        aria-label='pix-payment-method'
        name='pix-payment-method'
        value={selectedOption}
        onChange={onOptionChange}>
        {pixOptions.map((option) => (
          <PaymentOption
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            selected={option.value === selectedOption}
            onChange={onOptionChange}
          />
        ))}
      </RadioGroup>

      <Box mt={2}>
        <Typography variant='h6'>Pix Parcelado</Typography>
        <RadioGroup
          aria-label='pix-parcelado-payment-method'
          name='pix-parcelado-payment-method'
          value={selectedOption}
          onChange={onOptionChange}>
          {pixParceladoOptions.map((option) => (
            <PaymentOption
              key={option.value}
              value={option.value}
              label={option.label}
              description={option.description}
              selected={option.value === selectedOption}
              onChange={onOptionChange}
            />
          ))}
        </RadioGroup>
      </Box>
    </FormControl>
  )
}

export default PaymentOptionsList
