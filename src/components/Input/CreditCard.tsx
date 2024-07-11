import { useState } from 'react'
import { TextField } from '@mui/material'

export default function CreditCardInput({
  label = 'Número do cartão',
  placeholder = '____ ____ ____ ____',
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validateCreditCard = (value: string) => {
    const regex = /^\d{16}$/
    return regex.test(value.replace(/\s/g, ''))
      ? ''
      : 'Número de cartão inválido'
  }

  const formatCreditCardNumber = (inputValue: string) => {
    const cleaned = inputValue.replace(/\D/g, '')
    const match = cleaned.match(/.{1,4}/g)
    return match ? match.join(' ') : inputValue
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value
    const formattedValue = formatCreditCardNumber(inputValue)
    setValue(formattedValue)
    const errorMsg = validateCreditCard(formattedValue)
    setError(errorMsg)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.which ? event.which : event.keyCode
    if (charCode < 48 || charCode > 57) {
      event.preventDefault()
    }
  }

  return (
    <TextField
      sx={{
        width: '100%',
      }}
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      error={!!error}
      onKeyPress={handleKeyPress}
      helperText={error}
      inputProps={{
        maxLength: 19,
      }}
    />
  )
}
