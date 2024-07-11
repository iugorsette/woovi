import React from 'react'
import { FormControl } from '@mui/material'
import { PaymentOptionData } from '../types/payment'
import Group from './Group'

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
    <FormControl component="fieldset">
      <Group
        label="Pix"
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
        pixOptions={pixOptions}
      />
      <Group
        label="Pix Parcelado"
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
        pixOptions={pixParceladoOptions}
      />
    </FormControl>
  )
}

export default PaymentOptionsList
