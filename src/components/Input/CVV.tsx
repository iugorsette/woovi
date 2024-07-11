import { useState } from 'react'
import { TextField } from '@mui/material'

export default function CVVInput({
  label = 'CVV',
  size = 'small',
  placeholder = '---',
}) {
  const validateCVV = (value: string) => {
    const regex = /^\d{3,4}$/
    return regex.test(value) ? '' : 'CVV inválido'
  }
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
    const errorMsg = validateCVV(inputValue)
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
        maxLength: 3,
      }}
    />
  )
}
