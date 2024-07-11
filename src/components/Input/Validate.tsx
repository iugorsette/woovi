import { useState } from 'react'
import { TextField } from '@mui/material'

const validateExpiryDate = (value: string) => {
  const month = value.slice(0, 2)
  if (Number(month) < 1 || Number(month) > 12)
    return 'Data de validade inválida'
  const year = value.slice(2)
  if (year.length < 4) return ''
  const expiryDate = new Date(Number(year), Number(month))
  const currentDate = new Date()
  return expiryDate > currentDate ? '' : 'Data de validade expirada'
}

export default function ValidateInput({
  label = 'Validade',
  size = 'small',
  placeholder = 'MM/AAAA',
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const formatValue = (inputValue: string) => {
    const month = inputValue.slice(0, 2)
    const year = inputValue.slice(2, 6)
    if (year) {
      return `${month}/${year}`
    } else if (month) {
      return month
    }
    return inputValue
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/\D/g, '')
    if (inputValue.length > 6) inputValue = inputValue.slice(0, 6)
    const formattedValue = formatValue(inputValue)
    setValue(formattedValue)
    const errorMsg = validateExpiryDate(inputValue)
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
        width: size === 'small' ? '50%' : '100%',
      }}
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      onKeyPress={handleKeyPress}
      inputProps={{
        maxLength: 7,
      }}
    />
  )
}
